"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

export const Animated3DCarousel = ({ items }: { items: CarouselItem[] }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden py-20">
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((item, i) => {
            const offset = (i - index + items.length) % items.length;
            const isCenter = offset === 0;
            const isLeft = offset === items.length - 1;
            const isRight = offset === 1;

            if (!isCenter && !isLeft && !isRight) return null;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, x: isRight ? 300 : -300 }}
                animate={{
                  opacity: isCenter ? 1 : 0.4,
                  scale: isCenter ? 1 : 0.8,
                  x: isCenter ? 0 : isRight ? 350 : -350,
                  zIndex: isCenter ? 10 : 5,
                  rotateY: isCenter ? 0 : isRight ? -45 : 45,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                  "absolute w-[300px] md:w-[450px] aspect-[16/9] rounded-3xl overflow-hidden glass border-white/20 cursor-pointer shadow-2xl",
                  isCenter ? "shadow-emerald-500/20" : ""
                )}
                onClick={() => {
                  if (isRight) next();
                  if (isLeft) prev();
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, 450px"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 block">
                    {item.category}
                  </span>
                  <h4 className="text-2xl font-black">{item.title}</h4>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 flex gap-4 z-30">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          ←
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
};
