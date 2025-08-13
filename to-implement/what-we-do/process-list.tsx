// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { WHAT_WE_DO_SECTIONS } from "@/constants";

// type ProcessListProps = {
//   currentSection: number;
//   className?: string;
// };

// export const ProcessList = ({
//   currentSection,
//   className,
// }: ProcessListProps) => {
//   return (
//     <div className={cn("h-full flex gap-2", className)}>
//       <div className="w-4 h-4 flex items-center">
//         <ArrowRight size={16} className="rotate-45" />
//       </div>
//       <div className="w-full flex flex-col">
//         <div className="h-8 overflow-hidden relative w-full hidden lg:block">
//           <AnimatePresence mode="wait">
//             <motion.span
//               key={WHAT_WE_DO_SECTIONS[currentSection].title}
//               initial={{ y: "100%", opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: "-100%", opacity: 0 }}
//               transition={{
//                 duration: 0.5,
//                 ease: "easeOut",
//               }}
//               className="text-lg absolute whitespace-normal sm:whitespace-nowrap"
//             >
//               {WHAT_WE_DO_SECTIONS[currentSection].title}
//             </motion.span>
//           </AnimatePresence>
//         </div>
//         <div className="h-56 sm:h-24 overflow-hidden relative w-full">
//           <AnimatePresence mode="wait">
//             <motion.span
//               key={WHAT_WE_DO_SECTIONS[currentSection].description}
//               initial={{ y: "100%", opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: "-100%", opacity: 0 }}
//               transition={{
//                 delay: 0.1,
//                 duration: 0.5,
//                 ease: "easeOut",
//               }}
//               className="text-xs sm:text-base absolute text-foreground/50"
//             >
//               {WHAT_WE_DO_SECTIONS[currentSection].description}
//             </motion.span>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };
