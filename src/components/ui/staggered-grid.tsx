"use client";

import React from "react";
import { motion } from "framer-motion";

export const StaggeredGrid = () => {
  // Set up 3 elements matching the Anime.js DOM Elements reference
  const items = Array.from({ length: 3 });

  // Container variants to sequence staggered children animations
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Staggered slide, scale, and rotate animations with spring physics
  const itemVariants = {
    initial: { 
      x: 0, 
      scale: 1, 
      backgroundColor: "rgba(181, 226, 250, 0.3)", // Soft blue glass-translucent
      borderColor: "rgba(181, 226, 250, 0.6)"
    },
    animate: {
      x: [0, 110, 0], // Graceful sliding path
      scale: [1, 1.25, 1], // Smooth scaling puff
      backgroundColor: [
        "rgba(181, 226, 250, 0.3)", 
        "rgba(255, 202, 212, 0.7)", // Beautiful coral pink glow peak
        "rgba(181, 226, 250, 0.3)"
      ],
      borderColor: [
        "rgba(181, 226, 250, 0.6)", 
        "rgba(255, 181, 167, 0.8)", 
        "rgba(181, 226, 250, 0.6)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      },
    },
    hover: {
      scale: 1.35,
      rotate: 45,
      backgroundColor: "rgba(255, 181, 167, 0.9)", // Soft Peach
      borderColor: "rgba(244, 63, 94, 0.5)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-start px-8 md:px-12 relative overflow-hidden bg-gradient-to-r from-blue-50/10 via-[#FFCAD4]/5 to-rose-50/10 rounded-2xl border border-slate-100/50">
      
      {/* Aesthetic Guide Lines showing the sliding trajectory */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-slate-100/60 flex flex-col justify-between" />
      
      <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-4 relative z-10 w-full"
      >
        {items.map((_, i) => (
          <div key={i} className="flex items-center gap-4 relative w-full">
            
            {/* Guide path line per slot */}
            <div className="absolute left-3 right-12 h-[2px] bg-dashed border-t border-dashed border-slate-200/40 pointer-events-none" />
            
            {/* Animated interactive capsule node representing CPU Core packets */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="w-7 h-7 rounded-lg border flex items-center justify-center shadow-sm cursor-pointer relative z-20 backdrop-blur-sm"
              style={{ originX: 0.5, originY: 0.5 }}
            >
              {/* Core miniature white dot */}
              <div className="w-2 h-2 rounded-full bg-white shadow-sm" />
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Grid background decorative wireframe */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-1 items-end pointer-events-none opacity-30">
        <div className="w-[3px] h-10 bg-slate-300 rounded-full" />
        <div className="w-[3px] h-16 bg-rose-300 rounded-full" />
        <div className="w-[3px] h-8 bg-slate-300 rounded-full" />
      </div>

    </div>
  );
};
