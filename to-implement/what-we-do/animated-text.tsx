// "use client";

// import { motion } from "framer-motion";

// interface AnimatedTextProps {
//   text: string;
//   className?: string;
// }

// export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
//   const letters = Array.from(text);

//   return (
//     <motion.div
//       className={`flex flex-wrap ${className}`}
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{
//         duration: 0.5,
//         ease: [0.4, 0.0, 0.2, 1],
//       }}
//     >
//       <div className="overflow-hidden">
//         {letters.map((letter, i) => (
//           <motion.span
//             key={i}
//             className="relative inline-block pb-1.5"
//             style={{
//               display: letter === " " ? "inline-block" : undefined,
//               width: letter === " " ? "0.4em" : undefined,
//             }}
//             initial={{ y: "100%" }}
//             whileInView={{ y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.5,
//               delay: i * 0.02,
//               ease: [0.4, 0.0, 0.2, 1],
//             }}
//           >
//             {letter === " " ? "\u00A0" : letter}
//           </motion.span>
//         ))}
//       </div>
//     </motion.div>
//   );
// };
