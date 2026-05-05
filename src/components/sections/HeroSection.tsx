"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

export const HeroSection = () => {
  const words = ["Inovatif", "Religius", "Berprestasi", "Global"];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          Join the Excellence
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-center leading-[0.9] max-w-4xl">
          SMADU 1 <br />
          <span className="text-secondary italic">UNGGULAN.</span>
        </h1>
        
        <div className="text-xl md:text-3xl font-medium text-slate-600 max-w-2xl text-center">
          Sekolah yang <FlipWords words={words} className="text-secondary font-black" />
        </div>
        <p className="text-lg text-slate-500 max-w-lg text-center font-medium leading-relaxed">
          Empowering the next generation through a unique blend of high-tech innovation and spiritual foundation.
        </p>
          <Link href="/ppdb" className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all hover:scale-105 shadow-xl shadow-primary/20 flex items-center gap-2 group">
            Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/fasilitas" className="px-8 py-4 bg-white border border-slate-200 text-primary rounded-xl font-bold hover:bg-slate-50 transition-all hover:scale-105">
            Explore Campus
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
