"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal = ({ text, className }: TextRevealProps) => {
  // Split sentence into words array
  const words = text.split(" ");

  // Stagger children transition variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  // Entry spring motion variants
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: "100%", // Initial position starts hidden underneath the masking frame
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", rowGap: "0.2em", columnGap: "0.25em" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("text-4xl md:text-5xl font-extrabold tracking-tight", className)}
    >
      {words.map((word, index) => (
        <motion.span 
          style={{ overflow: "hidden", display: "inline-block" }} 
          key={index}
        >
          <motion.span style={{ display: "inline-block" }} variants={child}>
            {word}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  );
};
