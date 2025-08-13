// import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { WHAT_WE_DO_SECTIONS } from "@/constants";

// type ProcessNumberProps = {
//   currentSection: number;
//   className?: string;
// };

// export const ProcessNumber = ({
//   currentSection,
//   className,
// }: ProcessNumberProps) => {
//   return (
//     <div
//       className={cn(
//         "lg:bottom-56 lg:left-10 flex items-center lg:gap-4 font-roobert-regular",
//         className
//       )}
//     >
//       <p className="text-4xl sm:text-7xl lg:text-[300px] font-semibold h-14 w-7 sm:w-14 md:h-16 md:w-16 lg:h-48 lg:w-48">
//         0
//       </p>
//       <div className="relative h-14 w-7 md:h-16 md:w-16 lg:h-48 lg:w-48">
//         <div className="overflow-hidden h-12 md:h-24 lg:h-[350px] relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={WHAT_WE_DO_SECTIONS[currentSection].number}
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-100%" }}
//               transition={{
//                 duration: 0.5,
//                 ease: "easeOut",
//               }}
//               className="text-4xl sm:text-7xl lg:text-[300px] font-semibold absolute"
//             >
//               {WHAT_WE_DO_SECTIONS[currentSection].number}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };
