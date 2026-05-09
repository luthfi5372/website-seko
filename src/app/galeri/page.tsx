"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";

export default function GaleriPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const dockItems = NAV_ITEMS.map(item => ({
    ...item,
    icon: <item.icon className="w-4 h-4" />
  }));

  const images = [
    "https://images.unsplash.com/photo-1523050335102-c8847976b128?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop",
  ];

  return (
    <main ref={containerRef} className="relative min-h-[300vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        <motion.h1 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="text-6xl md:text-9xl font-black text-primary absolute z-20 text-center px-6 uppercase tracking-tighter"
        >
          ARSIP <span className="text-secondary">UNGGULAN</span>
        </motion.h1>

        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((img, i) => {
            const rotate = i * 60;
            const y = useTransform(scrollYProgress, [0, 1], [0, -1000 * (i + 1)]);
            const r = useTransform(scrollYProgress, [0, 1], [rotate, rotate + 360]);
            const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

            return (
              <motion.div
                key={i}
                style={{ 
                  rotate: r,
                  scale,
                  y
                }}
                className="absolute w-[300px] md:w-[500px] aspect-[4/3] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-xl border border-primary/10 shadow-2xl"
              >
                <Image
                  src={img}
                  alt="Galeri Image"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 300px, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-10 inset-x-0 z-[100] flex justify-center">
        <FloatingDock items={dockItems} />
      </div>
    </main>
  );
}
