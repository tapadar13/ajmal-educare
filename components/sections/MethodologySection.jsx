"use client";

import { Badge } from '@/components/ui/badge'
import { MagicCard } from '@/components/magicui/magic-card'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { ShineBorder } from '@/components/magicui/shine-border'

const MethodologySection = () => {
  const methodologies = [
    {
      number: "01",
      title: "Personalized Mentoring & Doubt Resolution",
      description: "One-on-one mentoring, doubt-clearing sessions, and personalized counseling to help students overcome individual challenges and stay on track with their academic goals.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      number: "02", 
      title: "Weekly Tests & Performance Tracking",
      description: "Comprehensive weekly tests, mock exams, and monthly assessments with detailed progress tracking and analysis to ensure steady improvement.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      number: "03",
      title: "Daily Practice Problems & Assignments", 
      description: "Structured Daily Practice Problems, assignments, and concept reviews designed to challenge students and strengthen long-term retention skills.",
      gradient: "from-pink-500/20 to-blue-500/20"
    },
    {
      number: "04",
      title: "Exam-Oriented Preparation Strategy",
      description: "Meticulously aligned curriculum with the latest NEET, JEE, UPSC, and APSC exam patterns, updated syllabus, and proven testing strategies.",
      gradient: "from-cyan-500/20 to-blue-500/20"
    }
  ]

  return (
    <section className="relative pt-8 pb-20 sm:py-20 lg:py-16 bg-gray-50 overflow-hidden">
      {/* Small box type background design */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-8 w-8 h-8 border border-gray-300 rounded"></div>
        <div className="absolute top-40 right-12 w-6 h-6 border border-gray-400 rounded-sm"></div>
        <div className="absolute bottom-32 left-16 w-10 h-10 border border-gray-300 rounded-md"></div>
        <div className="absolute top-1/3 right-8 w-12 h-12 border border-gray-300 rounded-lg"></div>
        <div className="absolute bottom-16 right-1/4 w-7 h-7 border border-gray-400 rounded"></div>
        <div className="absolute top-24 left-1/3 w-9 h-9 border border-gray-300 rounded-sm"></div>
        <div className="absolute bottom-40 left-1/2 w-8 h-8 border border-gray-300 rounded-md"></div>
        <div className="absolute top-1/2 left-12 w-11 h-11 border border-gray-300 rounded-lg"></div>
        <div className="absolute bottom-24 right-16 w-6 h-6 border border-gray-400 rounded"></div>
        <div className="absolute top-3/4 right-1/3 w-10 h-10 border border-gray-300 rounded-sm"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
           <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Our Teaching{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Methodology
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Ajmal Educare, we believe effective teaching transcends traditional classroom instruction. 
            Our methodology provides clarity, consistency, and confidence to every student, ensuring 
            comprehensive preparation for competitive exams and future challenges.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {methodologies.map((method, index) => (
            <div key={index} className="relative rounded-2xl group h-full">
              <ShineBorder className="rounded-[inherit] z-10 opacity-90" borderWidth={2} duration={16} shineColor={["#60A5FA", "#C084FC", "#60A5FA"]} />
              <div className="relative z-0 h-full rounded-[inherit] bg-white/80 backdrop-blur-2xl border border-white/30 p-8 lg:p-10 flex flex-col">
                {/* Number + Title inline */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 group-hover:scale-110 transition-transform duration-300 shadow-sm p-4">
                    <span className="text-2xl leading-none font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {method.number}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {method.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MethodologySection