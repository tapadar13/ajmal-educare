"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Users, Target, BookOpen, TrendingUp, Clock, Heart } from 'lucide-react'
import AnimatedText from './animated/AnimatedText';
import ProcessCircle from './animated/ProcessCircle';
import ProcessNumber from './animated/ProcessNumber';
import ProcessList from './animated/ProcessList';
import StatsSection from './animated/StatsSection';

// Move calculations outside component to prevent recreating on every render
const polarToCartesian = (
  centerX,
  centerY,
  radius,
  angleInDegrees
) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

// Memoize the arc description function
const createArcDescription = (
  x,
  y,
  radius,
  startAngle,
  endAngle
) => {
  let arcSweep = endAngle - startAngle;
  arcSweep = Math.max(0, Math.min(360, arcSweep));

  if (arcSweep >= 359.99) {
    return `M ${x + radius} ${y}
            A ${radius} ${radius} 0 1 0 ${x + radius - 0.01} ${y}
            A ${radius} ${radius} 0 1 0 ${x + radius} ${y}`;
  }

  const start = polarToCartesian(x, y, radius, startAngle + arcSweep);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = arcSweep <= 180 ? 0 : 1;

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry veterans and subject matter experts with proven teaching methodologies and years of experience delivering exceptional educational outcomes for students",
      stats: "150+ Expert Teachers",
      color: "brand-secondary",
      endAngle: 60
    },
    {
      icon: Target,
      title: "Personalized Learning", 
      description: "Customized study plans tailored to individual learning styles with focused attention to address each student's unique needs ensuring optimal academic growth and understanding",
      stats: "One-on-One Mentoring",
      color: "brand-secondary",
      endAngle: 120
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description: "Meticulously crafted study materials covering the entire syllabus with extensive practice questions and detailed explanations designed to strengthen conceptual clarity and exam readiness",
      stats: "Extensive Practice Questions",
      color: "brand-accent",
      endAngle: 180
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of consistent success with students securing top ranks in competitive examinations year after year demonstrating our commitment to academic excellence",
      stats: "High Success Rate",
      color: "brand-secondary",
      endAngle: 240
    },
    {
      icon: Clock,
      title: "Strong Track Record",
      description: "1400+ selections in NEET & JEE examinations alongside numerous civil services aspirants qualifying for APSC reflecting our comprehensive approach to competitive exam preparation",
      stats: "1400+ Selections",
      color: "brand-secondary",
      endAngle: 300
    },
    {
      icon: Heart,
      title: "Student Support",
      description: "Comprehensive support system beyond academics including professional counseling and career guidance services helping students navigate their educational journey successfully",
      stats: "24/7 Support Available",
      color: "brand-accent",
      endAngle: 360
    }
  ]

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0", "end 1"],
  });
  
  // Use useTransform to handle scroll calculations more efficiently
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const [currentSection, setCurrentSection] = useState(0);
  const [progressAngle, setProgressAngle] = useState(0);

  // Memoize total sections
  const totalSections = useMemo(() => features.length, [features.length]);

  // Memoize section angle calculations
  const sectionAngles = useMemo(() => 
    features.map((feature, index) => ({
      startAngle: index > 0 ? features[index - 1].endAngle : 0,
      endAngle: feature.endAngle
    })),
    [features]
  );

  // Debounced scroll handler using useCallback
  const handleScroll = useCallback((latest) => {
    const clampedProgress = Math.max(0, Math.min(1, latest));
    const currentSectionIndex = Math.min(
      Math.floor(clampedProgress * totalSections),
      totalSections - 1
    );

    const { startAngle, endAngle } = sectionAngles[currentSectionIndex];
    const fractionInSection = clampedProgress * totalSections - currentSectionIndex;
    const currentSectionAngleRange = endAngle - startAngle;

    let angle = startAngle + currentSectionAngleRange * fractionInSection;
    // Avoid exact 360° which can cause SVG and filter artifacts on some browsers
    const MAX_ANGLE = 359.9;
    angle = Math.min(angle, MAX_ANGLE);

    requestAnimationFrame(() => {
      setProgressAngle(angle);
      setCurrentSection(currentSectionIndex);
    });
  }, [totalSections, sectionAngles]);

  useEffect(() => {
    const unsubscribe = progress.on("change", handleScroll);
    return () => unsubscribe();
  }, [progress, handleScroll]);

  // Memoize the describeArc function to prevent recreating on every render
  const describeArc = useCallback(createArcDescription, []);

  return (
    <>
      {/* Progress-controlled section. We keep Stats outside so it doesn't peek until full circle completes */}
      <section
        ref={containerRef}
        className="relative w-full bg-gray-50 will-change-transform"
      >
      {/* Mobile Screen */}
        <div className="lg:hidden h-screen overflow-x-hidden sticky top-0 w-full px-6 pt-20">
        <div className="flex flex-col gap-10">
          <AnimatedText
            text="Why Choose Us"
            className="text-4xl font-bold text-gray-900"
          />
          <div className="relative flex">
            <div>
              <ProcessNumber currentSection={currentSection} totalSections={totalSections} />
            </div>
            <ProcessList currentSection={currentSection} className="w-full" features={features} />
          </div>
        </div>
        <ProcessCircle
          progressAngle={progressAngle}
          currentSection={currentSection}
          describeArc={describeArc}
          className="absolute bottom-0 right-1/2 translate-x-1/2 scale-75"
          features={features}
        />
        </div>

      {/* Desktop Screen */}
        <div className="hidden lg:block h-screen sticky top-0 w-full px-10 pt-20">
          <div className="flex flex-col gap-10">
            <AnimatedText
              text="Why Choose Us"
              className="text-6xl font-bold text-gray-900"
            />
            <ProcessList currentSection={currentSection} className="w-1/2" features={features} />
          </div>
          <ProcessNumber currentSection={currentSection} className="absolute" totalSections={totalSections} />
          <ProcessCircle
            progressAngle={progressAngle}
            currentSection={currentSection}
            describeArc={describeArc}
            features={features}
          />
        </div>

        {/* Spacer defines the exact scrollable area for the 6 steps */}
        <div className="h-[600vh]" />
      </section>

      {/* Stats Section (outside of the progress container to avoid early reveal) */}
      <StatsSection />
    </>
  )
}

export default WhyChooseSection