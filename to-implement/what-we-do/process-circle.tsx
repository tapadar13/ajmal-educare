// import { useRef, memo } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { WHAT_WE_DO_SECTIONS } from "@/constants";

// type ProcessCircleProps = {
//   progressAngle: number;
//   currentSection: number;
//   describeArc: (
//     x: number,
//     y: number,
//     radius: number,
//     startAngle: number,
//     endAngle: number
//   ) => string;
//   className?: string;
// };

// // Create separate components for better performance
// const CircleContent = memo(({ currentSection }: { currentSection: number }) => (
//   <div className="space-y-6">
//     <motion.div
//       key={WHAT_WE_DO_SECTIONS[currentSection].title}
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="w-12 h-12 mx-auto rounded-full flex items-center justify-center"
//     >
//       <Image
//         src={WHAT_WE_DO_SECTIONS[currentSection].icon}
//         alt={WHAT_WE_DO_SECTIONS[currentSection].title}
//         width={44}
//         height={44}
//         className="w-44 lg:w-64"
//         priority
//       />
//     </motion.div>
//     <div className="space-y-2 w-[200px] flex flex-col items-center justify-center">
//       <div className="h-8 overflow-hidden relative w-full">
//         <AnimatePresence mode="wait">
//           <motion.h2
//             key={WHAT_WE_DO_SECTIONS[currentSection].title}
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "-100%" }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="text-2xl font-medium absolute w-full"
//           >
//             {WHAT_WE_DO_SECTIONS[currentSection].title}
//           </motion.h2>
//         </AnimatePresence>
//       </div>
//       <div className="h-20 overflow-hidden relative w-full left-1/2 -translate-x-1/2">
//         <AnimatePresence mode="wait">
//           <motion.p
//             key={WHAT_WE_DO_SECTIONS[currentSection].tagLine}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="opacity-40 text-sm absolute"
//           >
//             {WHAT_WE_DO_SECTIONS[currentSection].tagLine}
//           </motion.p>
//         </AnimatePresence>
//       </div>
//     </div>
//   </div>
// ));

// CircleContent.displayName = "CircleContent";

// // Memoize the entire ProcessCircle component
// export const ProcessCircle = memo(({
//   progressAngle,
//   currentSection,
//   describeArc,
//   className,
// }: ProcessCircleProps) => {
//   const ref = useRef(null);

//   // Memoize SVG gradient definitions
//   const gradientDefs = (
//     <defs>
//       <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 0.8 }} />
//         <stop offset="100%" style={{ stopColor: "#FFFFFF", stopOpacity: 0.2 }} />
//       </linearGradient>
//       <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
//         <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
//         <feMerge>
//           <feMergeNode in="coloredBlur" />
//           <feMergeNode in="SourceGraphic" />
//         </feMerge>
//       </filter>
//       <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
//         <stop offset="0%" style={{ stopColor: "#1a1a1a" }} />
//         <stop offset="100%" style={{ stopColor: "#0a0a0a" }} />
//       </radialGradient>
//     </defs>
//   );

//   // Calculate dot position only when needed
//   const dotPosition = progressAngle > 0 ? {
//     cx: 50 + 40 * Math.cos(((progressAngle - 90) * Math.PI) / 180),
//     cy: 50 + 40 * Math.sin(((progressAngle - 90) * Math.PI) / 180)
//   } : null;

//   return (
//     <div
//       ref={ref}
//       className={cn(
//         "absolute sm:top-1/2 right-10 bottom-44 sm:bottom-0 sm:-translate-y-1/2",
//         className
//       )}
//     >
//       <div className="relative w-[600px] h-[600px]">
//         <svg
//           className="absolute inset-0 w-full h-full -rotate-90"
//           viewBox="0 0 100 100"
//           strokeWidth="14"
//           color="white"
//         >
//           {gradientDefs}
//           <circle
//             cx="50"
//             cy="50"
//             r="35"
//             fill="url(#circleGradient)"
//             stroke="none"
//           />
//           <circle
//             cx="50"
//             cy="50"
//             r="36"
//             fill="none"
//             stroke="rgb(147, 51, 234)"
//             className="opacity-30"
//             strokeWidth="0.2"
//             strokeDasharray="1 0.5"
//           />
//           <path
//             d={describeArc(50, 50, 40, 0, progressAngle)}
//             fill="none"
//             stroke="white"
//             strokeWidth="0.1"
//             strokeLinecap="round"
//             filter="url(#glow)"
//           />
//           {dotPosition && (
//             <motion.g
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.1 }}
//             >
//               <circle
//                 cx={dotPosition.cx}
//                 cy={dotPosition.cy}
//                 r="1"
//                 className="fill-accent/30"
//                 filter="url(#glow)"
//               />
//               <circle
//                 cx={dotPosition.cx}
//                 cy={dotPosition.cy}
//                 r="0.5"
//                 strokeWidth="3"
//                 className="fill-accent"
//                 filter="url(#glow)"
//               />
//             </motion.g>
//           )}
//         </svg>

//         <div
//           className="absolute inset-[15%] rounded-full flex items-center justify-center border-none"
//           style={{
//             background:
//               "radial-gradient(circle at center, transparent 20%, rgba(20, 20, 35, 0.95) 40%, rgba(15, 15, 25, 0.98) 60%, rgba(10, 10, 15, 1) 80%)",
//             boxShadow: `
//               inset 0 0 50px rgba(255, 255, 255, 0.05),
//               0 0 30px rgba(88, 65, 165, 0.3),
//               0 0 60px rgba(88, 65, 165, 0.2),
//               0 0 90px rgba(88, 65, 165, 0.1)
//             `
//           }}
//         >
//           <div className="flex flex-col items-center justify-center h-full text-center p-8">
//             <AnimatePresence mode="wait">
//               <CircleContent currentSection={currentSection} />
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// ProcessCircle.displayName = "ProcessCircle";