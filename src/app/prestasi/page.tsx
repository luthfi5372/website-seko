"use client";

import { motion } from "framer-motion";
import { 
  IconArrowLeft, 
  IconTrophy, 
  IconAward, 
  IconStar, 
  IconSparkles 
} from "@tabler/icons-react";
import Link from "next/link";

export default function PrestasiPage() {
  const awards = [
    {
      year: "2024",
      title: "Juara Umum Olimpiade Sains Nasional",
      category: "Akademik",
      desc: "Menyabet 5 medali emas dalam ajang OSN tingkat nasional tahun 2024 bidang Astronomi, Kebumian, dan Fisika.",
      icon: <IconTrophy className="w-8 h-8 text-rose-500 animate-pulse" />,
      color: "from-rose-50 to-orange-50/50 border-rose-100"
    },
    {
      year: "2023",
      title: "Gold Medal International Robotics Expo",
      category: "Teknologi",
      desc: "Inovasi robot penyelamat berbasis AI yang diakui secara global di ajang bergengsi Tokyo Robotics Summit.",
      icon: <IconAward className="w-8 h-8 text-indigo-500" />,
      color: "from-indigo-50 to-blue-50/50 border-indigo-100"
    },
    {
      year: "2023",
      title: "Best Islamic School of the Year",
      category: "Institusi",
      desc: "Penghargaan atas keunggulan kurikulum integrasi sains modern dengan nilai-nilai luhur keislaman.",
      icon: <IconStar className="w-8 h-8 text-amber-500" />,
      color: "from-amber-50 to-orange-50/50 border-amber-100"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans relative overflow-hidden py-24">
      
      {/* 1. Fine Interactive Background Dot-Grid Wireframe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      
      {/* 2. Top Large Ambient Radial Glow Overlay */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,202,212,0.15),transparent_60%)] pointer-events-none" />

      {/* 3. Soft Floating Pastel Blur Spheres */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-rose-200/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-[350px] h-[350px] bg-blue-100/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Floating Back Button Pill */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-rose-500 font-bold text-xs uppercase tracking-widest bg-white hover:bg-rose-50 px-5 py-3 rounded-full border border-slate-100 shadow-sm transition-all hover:translate-x-[-2px]"
          >
            <IconArrowLeft size={14} /> Kembali ke Beranda
          </Link>
        </motion.div>
        
        {/* Header Block with Reveals */}
        <div className="mb-24 text-left space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-black uppercase tracking-[0.25em] text-rose-500 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-flex items-center gap-1.5 shadow-sm"
          >
            <IconSparkles size={11} /> Lembaran Prestasi
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-slate-900"
          >
            Jejak <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-400 to-[#FF8E9E]">
              Kemenangan Global.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-slate-500 font-medium max-w-xl leading-relaxed"
          >
            Catatan dedikasi, perjuangan keras, dan penghargaan tertinggi yang berhasil diraih oleh civitas akademika SMA Darul Ulum 1 Unggulan.
          </motion.p>
        </div>

        {/* Scroll-Triggered Animated Timeline */}
        <div className="space-y-16 relative">
          
          {/* Vertical central path line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-dashed border-l border-dashed border-slate-200/60 pointer-events-none" />

          {awards.map((award, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex gap-8 group relative"
            >
              {/* Timeline Year Node */}
              <div className="flex flex-col items-center z-10">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center font-black text-slate-800 text-sm group-hover:border-rose-300 group-hover:text-rose-500 group-hover:shadow-md transition-all duration-300">
                  {award.year.slice(2)}
                </div>
              </div>

              {/* Liquid Glass Award Card Body */}
              <div className="bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-slate-200/50 hover:border-rose-400/30 flex-1 hover:shadow-[0_20px_50px_rgba(244,63,94,0.05)] transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                
                {/* Surface Reflection Gloss */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                {/* Left Side Icon Slot styled with custom ambient backdrop */}
                <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  {award.icon}
                </div>

                {/* Text Contents */}
                <div className="space-y-3 text-left">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-50 border border-rose-100 text-rose-500 shadow-sm w-fit inline-block">
                    {award.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-rose-500 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed font-semibold">
                    {award.desc}
                  </p>
                </div>

                {/* Decorative background dot inside each card */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-rose-200/5 blur-xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
