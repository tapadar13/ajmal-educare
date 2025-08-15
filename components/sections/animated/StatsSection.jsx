"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Award, BookOpen } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { value: "12000+", label: "Students Mentored", icon: Users },
    { value: "300+", label: "Toppers", icon: TrendingUp },
    { value: "9+", label: "Years Experience", icon: Award },
    { value: "150+", label: "Expert Faculty", icon: BookOpen }
  ];

  return (
    <motion.section 
      className="relative overflow-hidden py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Dotted Pattern Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#d1d5db" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)"/>
        </svg>
      </div>
      
      {/* Subtle decorative circles */}
      <div className="absolute top-20 left-20 w-24 h-24 border border-gray-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border border-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/4 right-1/3 w-12 h-12 border border-gray-200 rounded-full opacity-30"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading Text */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Achievements</span> Speak for Themselves
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and student success
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="relative bg-gray-100 rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-[1px]">
                    <div className="bg-gray-100 rounded-2xl h-full w-full"></div>
                  </div>
                  <div className="relative z-10">
                  <div className="text-center">
                    {/* Icon */}
                    <motion.div 
                      className="mb-4 flex justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    
                    {/* Value */}
                    <motion.div 
                      className="text-3xl font-bold text-gray-900 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    {/* Label */}
                    <motion.div 
                      className="text-gray-600 text-sm font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
