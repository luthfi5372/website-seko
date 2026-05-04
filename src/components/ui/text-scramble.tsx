"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
  text: string;
  duration?: number;
  className?: string;
  onComplete?: () => void;
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

export const TextScramble = ({
  text,
  duration = 1.5,
  className,
  onComplete,
}: TextScrambleProps) => {
  const [output, setOutput] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = duration * 60;
    const queue: any[] = [];

    for (let i = 0; i < text.length; i++) {
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from: "", to: text[i], start, end, char: "" });
    }

    let rafId: number;

    const update = () => {
      let outputText = "";
      let complete = 0;

      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          outputText += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          outputText += char;
        } else {
          outputText += from;
        }
      }

      setOutput(outputText);

      if (complete === queue.length) {
        setIsCompleted(true);
        if (onComplete) onComplete();
      } else {
        frame++;
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    return () => cancelAnimationFrame(rafId);
  }, [text, duration, onComplete]);

  useEffect(() => {
    const cleanup = scramble();
    return cleanup;
  }, [scramble]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {output}
    </motion.span>
  );
};
