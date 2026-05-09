"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  IconArrowUpRight, 
  IconSparkles, 
  IconActivity, 
  IconDeviceLaptop, 
  IconShieldCheck, 
  IconDatabase,
  IconChartLine,
  IconClock,
  IconTrophy,
  IconAward,
  IconBuildingCommunity
} from "@tabler/icons-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

export const HeroSection = () => {
  // Pull live vertical scroll coordinates
  const { scrollY } = useScroll();

  // Create smooth, interconnected scroll-bound parallax translation and rotation properties
  const leftCardY = useTransform(scrollY, [0, 1000], [0, -150]);
  const rightCardY = useTransform(scrollY, [0, 1000], [0, 180]);
  
  const leftSphereY = useTransform(scrollY, [0, 1000], [0, -220]);
  const rightSphereY = useTransform(scrollY, [0, 1000], [0, -120]);

  const leftRotation = useTransform(scrollY, [0, 1000], [0, 35]);
  const rightRotation = useTransform(scrollY, [0, 1000], [0, -45]);

  // Mock scrolling log entries inside the NCC HQ Command Center
  const [logs, setLogs] = useState([
    { id: 1, time: "09:42:10", action: "NEW ENTRY: Olimpiade MIPA", school: "MAN 2 Malang" },
    { id: 2, time: "09:43:15", action: "PAYMENT VERIFIED: Speech Contest", school: "SMA 1 Surabaya" },
    { id: 3, time: "09:44:02", action: "NEW ENTRY: LKTI Nasional", school: "SMA DU 1 Jombang" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      const actions = [
        "NEW ENTRY: Olimpiade MIPA",
        "PAYMENT VERIFIED: MTQ Nasional",
        "NEW ENTRY: LKTI Nasional",
        "PAYMENT VERIFIED: Speech Contest",
        "NEW ENTRY: Speech Contest",
        "SYSTEM: Audit Log Synced"
      ];
      const schools = [
        "SMA Negeri 3 Bandung",
        "MAN 1 Yogyakarta",
        "SMA Taruna Nusantara",
        "SMA Kristen Petra Surabaya",
        "MAN IC Serpong",
        "SMA Darul Ulum 1"
      ];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomSchool = schools[Math.floor(Math.random() * schools.length)];
      
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

      setLogs(prev => {
        const updated = [...prev, { id: Date.now(), time: timeStr, action: randomAction, school: randomSchool }];
        return updated.slice(-3); // Keep only last 3 logs
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-rose-200 selection:text-rose-900 relative overflow-hidden flex flex-col justify-between">
      
      {/* 1. Fine Interactive Background Dotted-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* 2. Top Large Ambient Radial Glow */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(255,202,212,0.12),transparent_60%)] pointer-events-none" />

      {/* 3. Dynamic Background Ambient Gradients */}
      <div className="absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FFB5A7]/30 via-[#FFCAD4]/25 to-[#B5E2FA]/30 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-[#B5E2FA]/20 rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-10%] w-[500px] h-[500px] bg-[#FFCAD4]/15 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* 4. Scroll-Bound Floating Parallax Ornaments & Glass Badges */}
      
      {/* Left side floating elements */}
      <motion.div
        style={{ y: leftSphereY }}
        className="absolute top-[18%] left-[3%] w-20 h-20 rounded-full bg-gradient-to-tr from-rose-200/20 to-orange-100/30 blur-sm pointer-events-none hidden lg:block"
      />
      
      <motion.div
        style={{ y: leftCardY, rotate: leftRotation }}
        className="absolute top-[28%] left-[2%] xl:left-[4%] z-20 hidden lg:flex items-center gap-3 bg-white/50 backdrop-blur-md border border-white/60 px-5 py-3 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] cursor-pointer hover:border-rose-300 hover:bg-white/80 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
          <IconAward size={18} />
        </div>
        <div className="text-left">
          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">AKREDITASI</div>
          <div className="text-xs font-black text-slate-800 tracking-tight mt-0.5">Grade A+ Unggulan</div>
        </div>
      </motion.div>

      {/* Right side floating elements */}
      <motion.div
        style={{ y: rightSphereY }}
        className="absolute top-[48%] right-[3%] w-28 h-28 rounded-full bg-gradient-to-tr from-blue-200/20 to-indigo-100/30 blur-sm pointer-events-none hidden lg:block"
      />

      <motion.div
        style={{ y: rightCardY, rotate: rightRotation }}
        className="absolute top-[36%] right-[2%] xl:right-[4%] z-20 hidden lg:flex items-center gap-3 bg-white/50 backdrop-blur-md border border-white/60 px-5 py-3 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] cursor-pointer hover:border-blue-300 hover:bg-white/80 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
          <IconTrophy size={18} />
        </div>
        <div className="text-left">
          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">KABAR PRESTASI</div>
          <div className="text-xs font-black text-slate-800 tracking-tight mt-0.5">100+ Trophy Nasional</div>
        </div>
      </motion.div>

      {/* Middle upper glowing tiny stars */}
      <div className="absolute top-[22%] left-[40%] w-2 h-2 rounded-full bg-rose-400/20 animate-ping" />
      <div className="absolute top-[25%] right-[38%] w-1.5 h-1.5 rounded-full bg-indigo-400/20 animate-pulse" />

      {/* Hero Content Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 flex flex-col items-center text-center relative z-10 w-full">
        
        {/* Dynamic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-rose-50/50 via-orange-50/50 to-pink-50/50 border border-rose-100 text-rose-600 text-[10px] font-extrabold uppercase tracking-widest shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <IconSparkles size={11} className="text-amber-500 animate-spin-slow" />
          <span>Pendaftaran Tahun Ajaran 2026/2027 Dibuka</span>
        </motion.div>
        
        {/* Main Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-[76px] font-black text-slate-900 tracking-tight leading-[1.05] mb-6 max-w-5xl"
        >
          Pusat Keunggulan IPTEK <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-400 to-[#FF8E9E] italic">
            Berbingkai IMTAQ.
          </span>
        </motion.h1>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Membentuk insan cendekia yang adaptif terhadap kemajuan teknologi global, berakar kuat pada nilai-nilai akhlakul karimah Pondok Pesantren Darul Ulum.
        </motion.p>
 
        {/* Action Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto"
        >
          <MagneticButton>
            <Link
              href="/ppdb"
              className="w-full sm:w-auto px-8 py-4 bg-slate-950 hover:bg-slate-800 text-white rounded-full font-extrabold text-[12px] uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-rose-100 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Daftar Sekarang</span>
              <IconArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/kontak"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full font-extrabold text-[12px] uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center"
            >
              Hubungi Admin
            </Link>
          </MagneticButton>
        </motion.div>
 
        {/* Interactive NCC HQ Command Center Mockup (Phase 3 Upgrade) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-5xl relative"
        >
          {/* Latar Belakang Gradasi Pastel Halus */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/40 via-orange-50/40 to-blue-100/40 rounded-[2rem] blur-2xl opacity-70"></div>
          
          {/* Kotak Kontainer Utama */}
          <div className="relative w-full aspect-[16/10] md:aspect-[16/8] bg-white/65 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            
            {/* Mockup Header: Dashboard Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 md:mb-6">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                  <IconDeviceLaptop size={14} className="text-slate-400" />
                  <span className="text-[10px] font-black text-slate-400 tracking-wider uppercase bg-slate-100 px-2 py-0.5 rounded">NCC HQ COMMAND CENTER v13</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-bold text-slate-400 tracking-wide uppercase hidden sm:block">All Systems Operational</span>
              </div>
            </div>
 
            {/* Mockup Dashboard Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-1 text-left items-stretch">
              
              {/* Box 1: Live Verification Stats */}
              <div className="col-span-1 bg-slate-50/40 border border-slate-100 p-4 rounded-2xl flex flex-col justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-rose-500">
                    <IconActivity size={14} />
                    <span className="text-[9px] font-black uppercase tracking-wider">Live Metrics</span>
                  </div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">TOTAL PENDAFTAR</h4>
                  <div className="text-3xl font-black text-slate-900 mt-1">1,420</div>
                </div>
                <div className="border-t border-slate-100/80 pt-3 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-bold">Olimpiade MIPA</span>
                    <span className="text-slate-800 font-extrabold">428</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-bold">LKTI Nasional</span>
                    <span className="text-slate-800 font-extrabold">392</span>
                  </div>
                </div>
              </div>
 
              {/* Box 2: Verification Activity Line Chart */}
              <div className="col-span-1 bg-slate-50/40 border border-slate-100 p-4 rounded-2xl flex flex-col justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-500">
                    <IconChartLine size={14} />
                    <span className="text-[9px] font-black uppercase tracking-wider">Growth Index</span>
                  </div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">SEBARAN REGIONAL</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-semibold mt-1">Pendaftar tersebar aktif dari **34 Provinsi** di seluruh Indonesia.</p>
                </div>
 
                {/* Micro Chart Visualization */}
                <div className="h-16 flex items-end justify-between gap-1 pt-2">
                  {[30, 50, 40, 70, 60, 90, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 h-full relative overflow-hidden bg-slate-200/30 rounded-t-sm">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.2, delay: i * 0.05 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-rose-400/40 to-orange-400/80 rounded-t-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Box 3: Live scrolling system logs from server */}
              <div className="col-span-1 bg-slate-950 text-slate-200 p-4 rounded-2xl border border-white/5 flex flex-col justify-between font-mono text-[9px] min-h-[140px] shadow-lg shadow-slate-950/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                  <span className="text-rose-400 font-black tracking-wide flex items-center gap-1.5">
                    <IconClock size={10} className="animate-pulse" />
                    REALTIME LOGS
                  </span>
                  <span className="text-[8px] text-white/30 font-bold">NCC_PORTAL_API</span>
                </div>
                
                <div className="flex-1 flex flex-col justify-end space-y-1.5 overflow-hidden py-1">
                  <AnimatePresence mode="popLayout">
                    {logs.map((log) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-0.5 border-l border-rose-500/30 pl-2"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-white/40">{log.time}</span>
                          <span className="text-emerald-400 font-bold">{log.action}</span>
                        </div>
                        <span className="text-white/60 text-[8px]">{log.school}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
 
            </div>
 
            {/* Bottom Bar inside Mockup */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-100 pt-4 mt-4 text-[9px] font-semibold text-slate-400 gap-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <IconShieldCheck size={11} className="text-emerald-500" /> Secure SSL (SHA-256)
                </span>
                <span className="flex items-center gap-1">
                  <IconDatabase size={11} className="text-indigo-500" /> Supabase Connection
                </span>
              </div>
              <span className="font-bold">NCC OPERATIONAL CENTER AUTHORITY LEVEL V</span>
            </div>
 
          </div>
        </motion.div>
      </main>
 
      {/* 4. Logo Cloud Section (Social Proof / Alumni accepted) */}
      <footer className="w-full bg-white border-t border-slate-100 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-slate-400">
            Alumni Kami Diterima di Perguruan Tinggi Terkemuka & Mitra Global
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            
            {/* UI Monogram Logo */}
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-extrabold text-slate-900 text-[11px] border border-yellow-500/20 shadow-sm shadow-yellow-100">UI</div>
              <span className="text-xs font-black tracking-tight text-slate-800">Universitas Indonesia</span>
            </div>
 
            {/* UGM Monogram Logo */}
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center font-extrabold text-white text-[11px] border border-blue-950/20 shadow-sm shadow-blue-100">UGM</div>
              <span className="text-xs font-black tracking-tight text-slate-800">U Gadjah Mada</span>
            </div>
 
            {/* ITS Geometric Monogram */}
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center font-extrabold text-white text-[10px] border border-blue-600/10 shadow-sm shadow-blue-50">ITS</div>
              <span className="text-xs font-black tracking-tight text-slate-800">Sepuluh Nopember</span>
            </div>
 
            {/* UNAIR Monogram */}
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center font-extrabold text-amber-300 text-[10px] border border-indigo-950 shadow-sm shadow-indigo-100">UNAIR</div>
              <span className="text-xs font-black tracking-tight text-slate-800">U Airlangga</span>
            </div>
 
            {/* Brawijaya Geometric */}
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center font-extrabold text-slate-900 text-[11px] border border-amber-500/10 shadow-sm shadow-amber-50">UB</div>
              <span className="text-xs font-black tracking-tight text-slate-800">U Brawijaya</span>
            </div>
 
          </div>
        </div>
      </footer>
 
    </div>
  );
};
