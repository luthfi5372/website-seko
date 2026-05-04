"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = ({ className }: { className?: string }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (current) => {
      // Previous value check
      const previous = scrollY.getPrevious() || 0;
      
      if (current > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (current > previous && current > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    });
  }, [scrollY]);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -100, 
          opacity: visible ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 inset-x-0 z-[150] transition-all duration-300",
          scrolled ? "py-4" : "py-8",
          className
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300",
          scrolled ? "bg-white/90 backdrop-blur-md py-3 px-8 rounded-full border border-slate-200 shadow-xl" : ""
        )}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform">
              D
            </div>
            <div className="hidden md:block">
              <span className="text-primary font-black tracking-tighter text-lg leading-none block">SMADU 1</span>
              <span className="text-secondary font-bold text-[10px] tracking-[0.2em] uppercase">Unggulan Jombang</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Beranda", "Akademik", "Prestasi", "Fasilitas", "Galeri", "PPDB"].map((item) => (
              <Link 
                key={item} 
                href={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                className="text-slate-500 hover:text-secondary text-sm font-bold transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link 
            href="/kontak"
            className="bg-secondary hover:bg-accent text-white px-6 py-2 rounded-xl text-sm font-black transition-all hover:shadow-lg shadow-secondary/20 active:scale-95"
          >
            HUBUNGI KAMI
          </Link>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
