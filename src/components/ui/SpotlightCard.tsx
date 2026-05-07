"use client";

import React, { MouseEvent, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const SpotlightCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const boundingRef = useRef<HTMLDivElement | null>(null);
  
  // Real-time cursor coordinate values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Translate absolute screen cursor coordinates to relative card coordinates
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={boundingRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/50 p-8 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      {/* Light-mode delicate rose/peach mouse tracking spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(244, 63, 94, 0.07),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};
