"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconChevronRight, IconSparkles } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-500 font-sans px-6 md:px-12 py-5",
        scrolled 
          ? "bg-white/70 backdrop-blur-xl border-b border-slate-100/80 py-4 shadow-[0_2px_20px_rgba(0,0,0,0.01)]" 
          : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* School Brand / Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFB5A7] via-[#FFCAD4] to-[#B5E2FA] flex items-center justify-center font-extrabold text-white text-lg shadow-md shadow-orange-100 group-hover:scale-105 transition-transform duration-300">
              DU
            </div>
            <div>
              <span className="text-slate-800 font-extrabold tracking-tighter text-md leading-none block">
                SMADU 1 <span className="text-xs font-bold text-slate-400">UNGGULAN</span>
              </span>
              <span className="text-slate-400 font-semibold text-[8px] tracking-[0.2em] uppercase mt-0.5 block">
                Jombang, Jawa Timur
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 bg-slate-50/50 p-1 rounded-full border border-slate-100">
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
                        className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 border border-slate-100"
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
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/ppdb"
              className="px-6 py-2.5 bg-slate-950 hover:bg-slate-800 text-white rounded-full text-[11px] font-extrabold uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-orange-100 active:scale-95 flex items-center gap-1.5"
            >
              <IconSparkles size={12} className="text-amber-300" />
              <span>Daftar PPDB</span>
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
          >
            {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </nav>

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
