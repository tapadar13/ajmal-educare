"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ProcessList = ({ currentSection, className, features }) => {
  const feature = features[currentSection];
  
  return (
    <div className={cn("h-full flex gap-2", className)}>
      <div className="w-4 h-4 flex items-center">
        <ArrowRight size={16} className="rotate-45 text-gray-900" />
      </div>
      <div className="w-full flex flex-col">
        <div className="h-9 overflow-hidden relative w-full hidden lg:block mb-2 pb-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={feature.title}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="text-3xl absolute whitespace-normal sm:whitespace-nowrap text-gray-900 font-semibold"
            >
              {feature.title}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="h-56 sm:h-24 overflow-hidden relative w-full">
          <AnimatePresence mode="wait">
            <motion.span
              key={feature.description}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="text-xs md:text-xl sm:text-base absolute text-gray-600"
            >
              {feature.description}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProcessList;
