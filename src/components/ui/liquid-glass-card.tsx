"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export const LiquidGlassCard = ({ 
  children, 
  className, 
  variant = "light" 
}: LiquidGlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative p-8 rounded-[2rem] overflow-hidden transition-all duration-500",
        variant === "light" 
          ? "bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(30,75,61,0.05)] hover:shadow-[0_12px_48px_rgba(30,75,61,0.1)] hover:border-secondary/30" 
          : "bg-primary/95 backdrop-blur-2xl border border-white/5 shadow-2xl",
        className
      )}
    >
      {/* Glossy Reflection Effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
      
      {/* Decorative Blur Dot */}
      <div className={cn(
        "absolute -bottom-10 -right-10 w-32 h-32 blur-3xl opacity-20 pointer-events-none",
        variant === "light" ? "bg-secondary" : "bg-accent"
      )} />
    </motion.div>
  );
};
