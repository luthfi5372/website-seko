"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { IconMenu2, IconX, IconChevronRight, IconSparkles } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Mengecek arah scroll
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      
      if (scrollYProgress.get() < 0.05) {
        // Selalu tampilkan jika sedang di paling atas halaman
        setVisible(true);
        setScrolled(false);
      } else {
        setScrolled(true);
        if (direction < 0) {
          // Scroll ke atas -> Tampilkan
          setVisible(true);
        } else {
          // Scroll ke bawah -> Sembunyikan
          setVisible(false);
        }
      }
    }
  });

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Akademik", href: "/akademik" },
    { label: "Prestasi", href: "/prestasi" },
    { label: "Fasilitas", href: "/fasilitas" },
    { label: "Galeri", href: "/galeri" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav 
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "fixed inset-x-0 mx-auto z-[100] font-sans px-4 md:px-6 transition-all duration-500",
            scrolled ? "top-6 max-w-5xl" : "top-0 max-w-7xl pt-6"
          )}
        >
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled 
              ? "bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full px-6 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" 
              : "bg-transparent py-2"
          )}>
            
            {/* School Brand / Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFB5A7] via-[#FFCAD4] to-[#B5E2FA] flex items-center justify-center font-extrabold text-white text-lg shadow-md shadow-orange-100 group-hover:scale-105 transition-transform duration-300">
                DU
              </div>
              <div className={cn("transition-all duration-300", scrolled ? "hidden lg:block" : "block")}>
                <span className="text-slate-800 font-extrabold tracking-tighter text-md leading-none block">
                  SMADU 1 <span className="text-xs font-bold text-slate-400">UNGGULAN</span>
                </span>
                <span className="text-slate-400 font-semibold text-[8px] tracking-[0.2em] uppercase mt-0.5 block">
                  Jombang, Jawa Timur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5">
              {menuItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.label} 
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-[12px] font-bold tracking-wide transition-all duration-300 z-10",
                      isActive 
                        ? "text-slate-900" 
                        : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    {/* Sliding Hover highlight */}
                    <AnimatePresence>
                      {hoveredIndex === idx && (
                        <motion.div
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 bg-slate-100 shadow-sm rounded-full -z-10 border border-slate-200/50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                        />
                      )}
                    </AnimatePresence>
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Call to Action Button */}
            <div className="hidden md:flex items-center gap-4 pl-4 border-l border-slate-200/50">
              <Link 
                href="/ppdb"
                className="group relative px-6 py-2 bg-slate-950 text-white rounded-full text-[11px] font-extrabold uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95 flex items-center gap-1.5 overflow-hidden"
              >
                <IconSparkles size={12} className="text-amber-300 relative z-10" />
                <span className="relative z-10">Daftar PPDB</span>
                <div className="absolute inset-0 h-full w-0 bg-slate-800 transition-all duration-300 ease-out group-hover:w-full z-0" />
              </Link>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors border border-slate-200/50 bg-white"
            >
              {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Sidebar Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[98] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-[99] p-8 shadow-2xl flex flex-col justify-between border-l border-slate-100 md:hidden"
            >
              <div className="space-y-8 mt-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFB5A7] via-[#FFCAD4] to-[#B5E2FA] flex items-center justify-center font-extrabold text-white text-lg shadow-md shadow-orange-100">
                    DU
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-extrabold text-md tracking-tight">SMADU 1 UNGGULAN</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Navigation</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-xl transition-all font-bold text-sm",
                          isActive 
                            ? "bg-slate-50 text-slate-900 border border-slate-100" 
                            : "text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
                        )}
                      >
                        <span>{item.label}</span>
                        <IconChevronRight size={14} className="opacity-40" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <Link
                  href="/ppdb"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-slate-950 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-colors"
                >
                  <IconSparkles size={14} className="text-amber-300" />
                  <span>Daftar PPDB Online</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
