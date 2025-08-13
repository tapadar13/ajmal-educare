"use client";

import { useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Create separate components for better performance
const CircleContent = memo(({ currentSection, features }) => {
  const feature = features[currentSection];
  const IconComponent = feature.icon;
  
  return (
    <div className="space-y-6">
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center"
      >
        <IconComponent className={`w-12 h-12 text-${feature.color}`} />
      </motion.div>
      <div className="space-y-2 w-[300px] flex flex-col items-center justify-center">
        <div className="h-8 overflow-hidden relative w-full">
          <AnimatePresence mode="wait">
            <motion.h2
              key={feature.title}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl font-bold absolute w-full text-center text-black"
            >
              {feature.title}
            </motion.h2>
          </AnimatePresence>
        </div>
        <div className="h-16 overflow-hidden relative w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={feature.stats}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="opacity-60 text-sm md:text-xl absolute text-center w-full text-gray-700"
            >
              {feature.stats}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

CircleContent.displayName = "CircleContent";

// Memoize the entire ProcessCircle component
const ProcessCircle = memo(({
  progressAngle,
  currentSection,
  describeArc,
  className,
  features
}) => {
  const ref = useRef(null);

  // Memoize SVG gradient definitions
  const gradientDefs = (
    <defs>
      <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: "#FFFFFF", stopOpacity: 0.2 }} />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: "#ffffff" }} />
        <stop offset="100%" style={{ stopColor: "#f5f5f5" }} />
      </radialGradient>
      <clipPath id="circleClip">
        <circle cx="50" cy="50" r="39.5" />
      </clipPath>
      <pattern id="dottedPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="0.4" fill="rgba(147, 51, 234, 0.3)" />
      </pattern>
    </defs>
  );

  // Calculate dot position only when needed
  const dotPosition = progressAngle > 0 ? {
    cx: 50 + 39 * Math.cos(((progressAngle - 90) * Math.PI) / 180),
    cy: 50 + 39 * Math.sin(((progressAngle - 90) * Math.PI) / 180)
  } : null;
  
  // When we reach a full 360°, switch to a circle stroke to avoid SVG arc glitches
  const isComplete = progressAngle >= 359.99;

  return (
    <div
      ref={ref}
      className={cn(
        // Use a single vertical anchor to avoid stretching when sticky releases
        // Center on desktop/tablet; mobile is positioned by the passed className
        "absolute right-10 sm:top-1/2 sm:-translate-y-1/2",
        className
      )}
    >
      <div className="relative w-[600px] h-[600px]">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
          strokeWidth="14"
          color="white"
          style={{ overflow: 'hidden' }}
        >
          {gradientDefs}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="url(#circleGradient)"
            stroke="none"
          />
          <circle
            cx="50"
            cy="50"
            r="32"
            fill="url(#dottedPattern)"
            stroke="none"
          />
          <circle
            cx="50"
            cy="50"
            r="36"
            fill="none"
            stroke="black"
            className="opacity-30"
            strokeWidth="0.2"
            strokeDasharray="1 0.5"
          />
          {isComplete ? (
            <circle
              cx="50"
              cy="50"
              r="39"
              fill="none"
              stroke="rgb(147, 51, 234)"
              strokeWidth="0.4"
              strokeLinecap="round"
              filter="url(#glow)"
              clipPath="url(#circleClip)"
            />
          ) : (
            <path
              d={describeArc(50, 50, 39, 0, progressAngle)}
              fill="none"
              stroke="rgb(147, 51, 234)"
              strokeWidth="0.4"
              strokeLinecap="round"
              filter="url(#glow)"
              clipPath="url(#circleClip)"
            />
          )}
          {dotPosition && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <circle
                cx={dotPosition.cx}
                cy={dotPosition.cy}
                r="1"
                className="fill-purple-400/30"
                filter="url(#glow)"
              />
              <circle
                cx={dotPosition.cx}
                cy={dotPosition.cy}
                r="0.5"
                strokeWidth="3"
                className="fill-purple-400"
                filter="url(#glow)"
              />
            </motion.g>
          )}
        </svg>

        <div
          className="absolute inset-[15%] rounded-full flex items-center justify-center border-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 1) 30%, rgba(248, 248, 248, 0.95) 50%, rgba(240, 240, 240, 0.9) 70%, rgba(235, 235, 235, 1) 85%)",
            boxShadow: `
              inset 0 0 50px rgba(0, 0, 0, 0.05),
              0 0 30px rgba(88, 65, 165, 0.3),
              0 0 60px rgba(88, 65, 165, 0.2),
              0 0 90px rgba(88, 65, 165, 0.1)
            `
          }}
        >
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <AnimatePresence mode="wait">
              <CircleContent currentSection={currentSection} features={features} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
});

ProcessCircle.displayName = "ProcessCircle";

export default ProcessCircle;
