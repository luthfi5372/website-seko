"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  IconCpu, 
  IconBook, 
  IconHome, 
  IconActivity, 
  IconBuildingCommunity, 
  IconBallBasketball,
  IconArrowRight,
  IconSparkles
} from "@tabler/icons-react";
import Link from "next/link";

export const FacilityGallery = () => {
  // Reference to track scroll bounds over the entire section
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Starts at entering bottom, completes when exiting top
  });

  // Parallax transforms: Column-specific translations with varying speeds and directions
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 100]); // Moves in opposite direction
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -200]);

  // Premium facilities datasets with tailored pastel colors and matching icons
  const facilities = [
    { 
      name: "Lab MIPA & Riset Terpadu", 
      desc: "Pusat eksplorasi sains terapan dan eksperimen ilmiah berbasis riset mendalam.",
      icon: <IconCpu size={24} />, 
      color: "from-[#FFB5A7]/10 to-[#FFCAD4]/30 text-rose-500 border-rose-100", 
      height: "h-80" 
    },
    { 
      name: "Perpustakaan Digital", 
      desc: "Akses tanpa batas ke ribuan jurnal internasional, e-book, dan multimedia ilmiah.",
      icon: <IconBook size={24} />, 
      color: "from-[#B5E2FA]/10 to-[#FFCAD4]/30 text-blue-500 border-blue-100", 
      height: "h-96" 
    },
    { 
      name: "Asrama Santri (Nusantara/Majjah)", 
      desc: "Hunian nyaman bernuansa pesantren modern dengan pendampingan moral & ibadah intensif.",
      icon: <IconHome size={24} />, 
      color: "from-[#FFB5A7]/10 to-orange-100/30 text-orange-500 border-orange-100", 
      height: "h-72" 
    },
    { 
      name: "Pusat Komando NCC", 
      desc: "Ruang pusat operasi dan evaluasi real-time kompetisi kreativitas nasional.",
      icon: <IconActivity size={24} />, 
      color: "from-[#B5E2FA]/10 to-emerald-100/30 text-emerald-500 border-emerald-100", 
      height: "h-80" 
    },
    { 
      name: "Lab Komputer & Rekayasa Perangkat Lunak", 
      desc: "Infrastruktur mutakhir rekayasa perangkat lunak, pemrograman, dan otomatisasi digital.",
      icon: <IconCpu size={24} />, 
      color: "from-indigo-100/20 to-purple-100/30 text-indigo-500 border-indigo-100", 
      height: "h-96" 
    },
    { 
      name: "Masjid Baitul 'Ilmi", 
      desc: "Pusat spiritual pembinaan akhlak mulia dan kajian keagamaan santri.",
      icon: <IconBuildingCommunity size={24} />, 
      color: "from-sky-100/20 to-blue-100/30 text-sky-500 border-sky-100", 
      height: "h-72" 
    },
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA] overflow-hidden relative z-10 font-sans" ref={containerRef}>
      
      {/* Decorative Pastel Background Glows */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-indigo-200/10 rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[350px] h-[350px] bg-rose-200/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-500 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 inline-flex items-center gap-1.5 shadow-sm">
            <IconSparkles size={11} /> Lingkungan & Sarana Belajar
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Infrastruktur & Ruang Tumbuh Modern
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto font-medium">
            Jelajahi ekosistem akademik yang dirancang presisi untuk mendukung inovasi riset, spiritualitas, dan kenyamanan siswa.
          </p>
        </div>

        {/* 3-Column Parallax Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[850px] overflow-hidden rounded-[2.5rem] p-6 bg-white border border-slate-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative">
          
          {/* Column 1 (Slower translation upwards) */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-6">
            {[0, 3].map((idx) => {
              const item = facilities[idx];
              return (
                <div 
                  key={idx}
                  className={`w-full ${item.height} bg-gradient-to-tr ${item.color} rounded-3xl border p-6 md:p-8 flex flex-col justify-between items-start text-left relative overflow-hidden group hover:shadow-lg transition-all duration-300`}
                >
                  <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-slate-800 tracking-tight">{item.name}</h4>
                    <p className="text-xs text-slate-400 mt-2 font-semibold leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-6 right-6 p-2 bg-white rounded-full border border-slate-100/50 shadow-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <IconArrowRight size={12} className="text-slate-400" />
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Column 2 (Opposite direction translation downwards) */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-6">
            {[1, 4].map((idx) => {
              const item = facilities[idx];
              return (
                <div 
                  key={idx}
                  className={`w-full ${item.height} bg-gradient-to-tr ${item.color} rounded-3xl border p-6 md:p-8 flex flex-col justify-between items-start text-left relative overflow-hidden group hover:shadow-lg transition-all duration-300`}
                >
                  <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-slate-800 tracking-tight">{item.name}</h4>
                    <p className="text-xs text-slate-400 mt-2 font-semibold leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-6 right-6 p-2 bg-white rounded-full border border-slate-100/50 shadow-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <IconArrowRight size={12} className="text-slate-400" />
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Column 3 (Medium translation upwards) */}
          <motion.div style={{ y: y3 }} className="flex flex-col gap-6 hidden md:flex">
            {[2, 5].map((idx) => {
              const item = facilities[idx];
              return (
                <div 
                  key={idx}
                  className={`w-full ${item.height} bg-gradient-to-tr ${item.color} rounded-3xl border p-6 md:p-8 flex flex-col justify-between items-start text-left relative overflow-hidden group hover:shadow-lg transition-all duration-300`}
                >
                  <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-slate-800 tracking-tight">{item.name}</h4>
                    <p className="text-xs text-slate-400 mt-2 font-semibold leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-6 right-6 p-2 bg-white rounded-full border border-slate-100/50 shadow-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <IconArrowRight size={12} className="text-slate-400" />
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
        
        {/* Full-width interactive footer card linking directly to Facility Page */}
        <div className="w-full mt-12 text-center relative z-20">
          <Link 
            href="/fasilitas"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-700 hover:text-rose-500 border border-slate-200/80 px-8 py-4 rounded-full bg-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Selidiki Semua Fasilitas Sekolah</span>
            <IconArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};
