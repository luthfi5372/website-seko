"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  // Pull live scroll vertical percentage (0 to 1)
  const { scrollYProgress } = useScroll();
  
  // Wrap with spring physics to give organic momentum and elasticity
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-orange-400 to-rose-400 z-[9999]"
      style={{ 
        scaleX, 
        transformOrigin: "0% 50%" // Animates expansion outward from the left edge
      }}
    />
  );
};
