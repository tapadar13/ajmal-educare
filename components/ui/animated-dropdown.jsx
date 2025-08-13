"use client"

import * as React from "react"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, GraduationCap, Users } from "lucide-react"
import { useClickAway } from "@/lib/hooks/useClickAway"

const academies = [
  { 
    id: "super40", 
    label: "Ajmal Super 40", 
    icon: GraduationCap, 
    color: "#4F46E5", // Using primary color from your theme
    href: "/super40" 
  },
  { 
    id: "ias", 
    label: "Ajmal IAS Academy", 
    icon: Users, 
    color: "#6D28D9", // Using brand-accent color from your theme
    href: "#ias" 
  },
]

const IconWrapper = ({
  icon: Icon,
  isHovered,
  color,
}) => (
  <motion.div className="w-4 h-4 mr-3 relative" initial={false} animate={isHovered ? { scale: 1.2 } : { scale: 1 }}>
    <Icon className="w-4 h-4 text-gray-600" />
    {isHovered && (
      <motion.div
        className="absolute inset-0"
        style={{ color }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Icon className="w-4 h-4" strokeWidth={2} />
      </motion.div>
    )}
  </motion.div>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function AnimatedDropdown({ onItemClick }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedAcademy, setSelectedAcademy] = React.useState(null)
  const [hoveredAcademy, setHoveredAcademy] = React.useState(null)
  const dropdownRef = React.useRef(null)

  // Handle click outside to close dropdown
  useClickAway(dropdownRef, () => setIsOpen(false))

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  const handleAcademyClick = (academy) => {
    setSelectedAcademy(academy)
    setIsOpen(false)
    if (onItemClick) {
      onItemClick(academy)
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium text-sm",
            "focus:outline-none rounded-md px-2 py-1",
            isOpen && "text-gray-900",
          )}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>Our Academies</span>
          <motion.div
            animate={{ rotate: isOpen ? 120 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 1, y: 0, height: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                height: "auto",
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1,
                },
              }}
              exit={{
                opacity: 0,
                y: 0,
                height: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1,
                },
              }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-10"
              onKeyDown={handleKeyDown}
            >
              <motion.div
                className={cn(
                  "w-56 rounded-xl border border-gray-100",
                  "bg-white p-1 shadow-lg backdrop-blur-sm"
                )}
                initial={{ borderRadius: 8 }}
                animate={{
                  borderRadius: 12,
                  transition: { duration: 0.2 },
                }}
                style={{ transformOrigin: "top" }}
              >
                <motion.div 
                  className="relative" 
                  variants={containerVariants} 
                  initial="hidden" 
                  animate="visible"
                >
                  <motion.div
                    layoutId="hover-highlight"
                    className="absolute inset-x-1 bg-gray-50 rounded-lg"
                    animate={{
                      y: academies.findIndex((a) => (hoveredAcademy || selectedAcademy?.id) === a.id) * 48 + 8,
                      height: 40,
                      opacity: hoveredAcademy || selectedAcademy ? 1 : 0,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.15,
                      duration: 0.5,
                    }}
                  />
                  {academies.map((academy) => (
                    <motion.button
                      key={academy.id}
                      onClick={() => handleAcademyClick(academy)}
                      onHoverStart={() => setHoveredAcademy(academy.id)}
                      onHoverEnd={() => setHoveredAcademy(null)}
                      className={cn(
                        "relative flex w-full items-center px-3 py-2 text-sm rounded-lg",
                        "transition-colors duration-60",
                        "focus:outline-none focus:ring-primary/20",
                        selectedAcademy?.id === academy.id || hoveredAcademy === academy.id
                          ? "text-gray-900"
                          : "text-gray-700",
                        "hover:text-gray-900"
                      )}
                      whileTap={{ scale: 0.98 }}
                      variants={itemVariants}
                    >
                      <IconWrapper
                        icon={academy.icon}
                        isHovered={hoveredAcademy === academy.id}
                        color={academy.color}
                      />
                      {academy.label}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
