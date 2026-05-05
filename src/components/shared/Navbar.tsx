"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Beranda", "Akademik", "Prestasi", "Fasilitas", "PPDB"];

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-[100] transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#023047] rounded-xl flex items-center justify-center text-white font-black text-xl">
            D
          </div>
          <div className="hidden md:block">
            <span className="text-[#023047] font-black tracking-tighter text-lg leading-none block">SMADU 1</span>
            <span className="text-[#219EBC] font-bold text-[10px] tracking-[0.2em] uppercase">Unggulan Jombang</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item} 
              href={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
              className="text-slate-500 hover:text-[#219EBC] text-sm font-bold transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="/ppdb"
            className="bg-[#023047] text-white px-6 py-2 rounded-xl text-sm font-black hover:bg-[#219EBC] transition-colors"
          >
            ENROLL NOW
          </Link>
        </div>
      </div>
    </nav>
  );
};
