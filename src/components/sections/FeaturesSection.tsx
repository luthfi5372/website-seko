"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  IconNetwork, 
  IconCpu, 
  IconSparkles, 
  IconArrowUpRight, 
  IconPlayerPlay,
  IconChartLine,
  IconTrendingUp,
  IconCircleCheckFilled
} from "@tabler/icons-react";
import Link from "next/link";

export const FeaturesSection = () => {
  // References for target scroll tracking
  const chartCardRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progression specifically for the chart container element
  const { scrollYProgress } = useScroll({
    target: chartCardRef,
    offset: ["start end", "center center"], // Starts when top enters bottom, completes when center hits center of screen
  });

  // Transform scroll progress (0 to 1) into path draw length and element opacity
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 1, 1]);

  return (
    <section className="w-full py-24 bg-[#FAFAFA] font-sans relative overflow-hidden">
      
      {/* Decorative Pastel Backdrops */}
      <div className="absolute top-[10%] right-[-5%] w-[350px] h-[350px] bg-rose-200/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-5%] w-[400px] h-[400px] bg-[#B5E2FA]/15 rounded-full blur-[110px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-rose-500 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-flex items-center gap-1.5 shadow-sm">
            <IconSparkles size={11} /> Keunggulan Ekosistem Sekolah
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Program & Keunggulan Unggulan SMADU 1
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto font-medium">
            Memadukan kebebasan intelektual sains dengan integritas spiritual pesantren.
          </p>
        </div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Jejaring & Komunitas (Span 2 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-12px_rgba(0,0,0,0.03)] relative overflow-hidden group flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="relative z-10 w-full md:w-1/2 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-extrabold uppercase tracking-wider rounded-md mb-4 border border-orange-100">
                <IconNetwork size={12} /> Sistem Terintegrasi
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
                Jejaring Ekstrakurikuler & Komando NCC.
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed font-semibold">
                Terhubung dengan ribuan siswa berprestasi di tingkat nasional melalui National Creativity Competition. Kami memfasilitasi minat riset, pidato, dan sains.
              </p>
              <Link 
                href="/ncc"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-900 bg-white border border-slate-200 px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 hover:border-slate-300"
              >
                <span>Jelajahi Portal NCC</span>
                <IconArrowUpRight size={13} className="text-slate-400" />
              </Link>
            </div>

            {/* Ilustrasi UI Melayang (Nodes/Network System) */}
            <div className="relative w-full md:w-1/2 h-56 flex items-center justify-center">
               <div className="relative w-56 h-56">
                  {/* Connection lines paths */}
                  <svg className="absolute inset-0 w-full h-full text-slate-200" viewBox="0 0 200 200">
                    <path d="M100,100 L40,50 M100,100 L160,60 M100,100 L100,165" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 5" />
                  </svg>
                  
                  {/* Center Node: National Creativity (NC) Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-tr from-rose-400 via-orange-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl shadow-rose-200/50 z-10 hover:scale-105 transition-transform">
                    <span className="text-white font-black text-lg tracking-tighter">NC</span>
                  </div>
                  
                  {/* Sub-node nodes (floating avatars or status triggers) */}
                  <div className="absolute top-8 left-4 w-10 h-10 bg-blue-100 border-2 border-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-sm">👨‍🎓</span>
                  </div>
                  <div className="absolute top-12 right-6 w-12 h-12 bg-green-100 border-2 border-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-sm">👩‍🔬</span>
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-purple-100 border-2 border-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-sm">👨‍💻</span>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Card 2: Lab Robotika & IT (Span 1 Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_25px_-12px_rgba(0,0,0,0.03)] relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase tracking-wider rounded-md mb-4 border border-blue-100">
                <IconCpu size={12} /> Fasilitas Modern
              </span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-tight">
                Lab Robotika & Riset IT
              </h3>
              <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                Peralatan mutakhir berskala global untuk mendukung praktik rekayasa robotika, pemrograman, dan kompetisi siswa.
              </p>
            </div>
            
            {/* Play Button video-like mockup illustration */}
            <div className="w-full h-40 bg-gradient-to-tr from-slate-50 via-slate-100 to-slate-200/50 rounded-2xl border border-slate-200/30 relative mt-8 flex items-center justify-center group-hover:-translate-y-2.5 transition-transform duration-500 shadow-inner">
               <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-rose-500 border border-slate-100/50 hover:scale-110 active:scale-95 cursor-pointer transition-transform duration-300">
                 <IconPlayerPlay size={16} fill="currentColor" />
               </div>
               <div className="absolute -top-3 -right-3 bg-white px-3 py-1 rounded-lg shadow-md border border-slate-100 text-[9px] font-black text-emerald-600 flex items-center gap-1.5 uppercase tracking-wider">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Aktif
               </div>
            </div>
          </motion.div>

        </div>

        {/* --- Graph Section (Statistik Kelulusan PTN) --- */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
             <div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Kualitas Terukur, Dampak Nyata.
                </h2>
                <p className="text-slate-500 mt-2 text-sm md:text-base font-semibold">
                  Tingkat kelulusan siswa SMA Darul Ulum 1 Unggulan di PTN Terkemuka terus berkembang pesat dari tahun ke tahun.
                </p>
             </div>
             <div className="shrink-0 flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/25 text-[10px] font-black uppercase tracking-wider">
               <IconTrendingUp size={14} /> Kenaikan 9.2% Tahunan
             </div>
          </div>

          {/* Master Chart Card - Tracks Scroll Status */}
          <div 
            ref={chartCardRef}
            className="w-full bg-white rounded-[2rem] p-6 md:p-10 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.015)] relative overflow-hidden"
          >
             <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4 mb-10 text-left">
                <div className="space-y-1.5">
                   <h4 className="font-extrabold text-slate-800 flex items-center gap-2 text-sm uppercase tracking-wider">
                     <IconCircleCheckFilled className="text-rose-500" size={16} />
                     Persentase Kelulusan UTBK / SNBT
                   </h4>
                   <p className="text-xs text-slate-400 font-semibold">Scroll perlahan bolak-balik untuk menyaksikan jalur grafik tergambar interaktif!</p>
                </div>
                <div className="text-left sm:text-right">
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Tahun Evaluasi</span>
                   <p className="text-xl md:text-2xl font-black text-slate-900 mt-1">2024 - 2026</p>
                </div>
             </div>

             {/* Smooth Line Graph using highly precise scalable SVG Vectors */}
             <div className="w-full h-64 relative mt-4">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
                  <defs>
                    <linearGradient id="gradientGraph" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(244, 63, 94, 0.22)" />
                      <stop offset="100%" stopColor="rgba(244, 63, 94, 0.00)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Static thin background guideline so graph shape is visible before scroll */}
                  <path 
                    d="M0,170 C200,165 300,135 500,120 C700,105 800,45 1000,20" 
                    fill="none" 
                    stroke="#FFE2E2" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />

                  {/* Shaded Area Below Line */}
                  <path 
                    d="M0,170 C200,165 300,135 500,120 C700,105 800,45 1000,20 L1000,200 L0,200 Z" 
                    fill="url(#gradientGraph)" 
                    opacity="0.5"
                  />
                  
                  {/* Scroll-Linked Main Chart Path */}
                  <motion.path 
                    style={{ 
                      pathLength: pathLength, 
                      opacity: opacity 
                    }}
                    d="M0,170 C200,165 300,135 500,120 C700,105 800,45 1000,20" 
                    fill="none" 
                    stroke="#F43F5E" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />

                  {/* Node Anchor Points linking dynamically to scroll percentage */}
                  <motion.circle 
                    style={{ opacity }}
                    cx="500" 
                    cy="120" 
                    r="5" 
                    fill="#F43F5E" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    className="drop-shadow" 
                  />
                  <motion.circle 
                    style={{ opacity }}
                    cx="1000" 
                    cy="20" 
                    r="7.5" 
                    fill="#F43F5E" 
                    stroke="white" 
                    strokeWidth="3" 
                    className="drop-shadow-lg" 
                  />
                </svg>

                {/* Floating details badge over chart vector */}
                <motion.div 
                  style={{ opacity }}
                  className="absolute right-[5%] top-[-10px] sm:top-0 bg-white border border-slate-100 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex items-center gap-3 animate-bounce-slow"
                >
                   <div className="h-9 w-1 bg-rose-500 rounded-full shrink-0" />
                   <div className="text-left">
                     <p className="text-xs font-black text-slate-900 leading-none">Meningkat Tajam</p>
                     <p className="text-[10px] text-slate-400 font-bold mt-1">98.4% Angkatan 2026</p>
                   </div>
                </motion.div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
