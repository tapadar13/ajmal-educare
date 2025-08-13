"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ProcessNumber = ({ currentSection, className, totalSections }) => {
  return (
    <div
      className={cn(
        "lg:bottom-56 lg:left-10 flex items-center lg:gap-4 font-semibold",
        className
      )}
    >
      <p className="text-4xl sm:text-7xl lg:text-[200px] font-bold h-14 w-7 sm:w-14 md:h-16 md:w-8 lg:h-48 lg:w-32 text-gray-800">
        0
      </p>
      <div className="relative h-14 w-7 md:h-16 md:w-16 lg:h-48 lg:w-48">
        <div className="overflow-hidden h-12 md:h-24 lg:h-[300px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection + 1}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="text-4xl sm:text-7xl lg:text-[200px] font-bold absolute text-gray-900"
            >
              {currentSection + 1}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProcessNumber;
