"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string; // Suffix to append like "+", "%", or letters
}

export const AnimatedCounter = ({ from, to, duration = 2, suffix = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Set up motion values and transform sequences to calculate rounded decimals
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => `${latest}${suffix}`);

  useEffect(() => {
    if (isInView) {
      // Begin numeric animation sequences smoothly
      animate(count, to, { 
        duration: duration,
        ease: "easeOut" // Decelerates naturally towards completion
      });
    }
  }, [count, isInView, to, duration]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};
