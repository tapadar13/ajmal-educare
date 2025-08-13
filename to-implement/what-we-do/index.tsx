// "use client";

// import { useEffect, useState, useRef, useCallback, useMemo } from "react";
// import { useScroll, useTransform } from "framer-motion";
// import { AnimatedText } from "@/components/ui/animated-text";
// import { WHAT_WE_DO_SECTIONS } from "@/constants";
// import { ProcessCircle } from "./process-circle";
// import { ProcessNumber } from "./process-number";
// import { ProcessList } from "./process-list";

// // Move calculations outside component to prevent recreating on every render
// const polarToCartesian = (
//   centerX: number,
//   centerY: number,
//   radius: number,
//   angleInDegrees: number
// ) => {
//   const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
//   return {
//     x: centerX + radius * Math.cos(angleInRadians),
//     y: centerY + radius * Math.sin(angleInRadians),
//   };
// };

// // Memoize the arc description function
// const createArcDescription = (
//   x: number,
//   y: number,
//   radius: number,
//   startAngle: number,
//   endAngle: number
// ): string => {
//   let arcSweep = endAngle - startAngle;
//   arcSweep = Math.max(0, Math.min(360, arcSweep));

//   if (arcSweep >= 359.99) {
//     return `M ${x + radius} ${y}
//             A ${radius} ${radius} 0 1 0 ${x + radius - 0.01} ${y}
//             A ${radius} ${radius} 0 1 0 ${x + radius} ${y}`;
//   }

//   const start = polarToCartesian(x, y, radius, startAngle + arcSweep);
//   const end = polarToCartesian(x, y, radius, startAngle);
//   const largeArcFlag = arcSweep <= 180 ? 0 : 1;

//   return [
//     "M",
//     start.x,
//     start.y,
//     "A",
//     radius,
//     radius,
//     0,
//     largeArcFlag,
//     0,
//     end.x,
//     end.y,
//   ].join(" ");
// };

// export const WhatWeDo = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0", "end 1"],
//   });
  
//   // Use useTransform to handle scroll calculations more efficiently
//   const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
//   const [currentSection, setCurrentSection] = useState(0);
//   const [progressAngle, setProgressAngle] = useState(0);

//   // Memoize total sections
//   const totalSections = useMemo(() => WHAT_WE_DO_SECTIONS.length, []);

//   // Memoize section angle calculations
//   const sectionAngles = useMemo(() => 
//     WHAT_WE_DO_SECTIONS.map((section, index) => ({
//       startAngle: index > 0 ? WHAT_WE_DO_SECTIONS[index - 1].endAngle : 0,
//       endAngle: section.endAngle
//     })),
//     []
//   );

//   // Debounced scroll handler using useCallback
//   const handleScroll = useCallback((latest: number) => {
//     const clampedProgress = Math.max(0, Math.min(1, latest));
//     const currentSectionIndex = Math.min(
//       Math.floor(clampedProgress * totalSections),
//       totalSections - 1
//     );

//     const { startAngle, endAngle } = sectionAngles[currentSectionIndex];
//     const fractionInSection = clampedProgress * totalSections - currentSectionIndex;
//     const currentSectionAngleRange = endAngle - startAngle;

//     let angle = startAngle + currentSectionAngleRange * fractionInSection;
//     angle = Math.min(angle, 359);

//     requestAnimationFrame(() => {
//       setProgressAngle(angle);
//       setCurrentSection(currentSectionIndex);
//     });
//   }, [totalSections, sectionAngles]);

//   useEffect(() => {
//     const unsubscribe = progress.on("change", handleScroll);
//     return () => unsubscribe();
//   }, [progress, handleScroll]);

//   // Memoize the describeArc function to prevent recreating on every render
//   const describeArc = useCallback(createArcDescription, []);

//   return (
//     <div
//       id="what-we-do"
//       ref={containerRef}
//       className="relative min-h-screen w-screen"
//     >
//       {/* Mobile Screen */}
//       <div className="lg:hidden h-screen overflow-x-hidden sticky top-0 w-full px-6 pt-20">
//         <div className="flex flex-col gap-10">
//           <AnimatedText
//             text="What We Do"
//             className="text-4xl font-roobert-medium"
//           />
//           <div className="relative flex">
//             <div>
//               <ProcessNumber currentSection={currentSection} />
//             </div>
//             <ProcessList currentSection={currentSection} className="w-full" />
//           </div>
//         </div>
//         <ProcessCircle
//           progressAngle={progressAngle}
//           currentSection={currentSection}
//           describeArc={describeArc}
//           className="absolute bottom-0 right-1/2 translate-x-1/2 scale-75"
//         />
//       </div>

//       {/* Desktop Screen */}
//       <div className="hidden lg:block h-screen sticky top-0 w-full px-10 pt-20">
//         <div className="flex flex-col gap-10">
//           <AnimatedText
//             text="What We Do"
//             className="text-7xl font-roobert-medium"
//           />
//           <ProcessList currentSection={currentSection} className="w-1/2" />
//         </div>
//         <ProcessNumber currentSection={currentSection} className="absolute" />
//         <ProcessCircle
//           progressAngle={progressAngle}
//           currentSection={currentSection}
//           describeArc={describeArc}
//         />
//       </div>

//       <div className="h-[360vh]" />
//     </div>
//   );
// };