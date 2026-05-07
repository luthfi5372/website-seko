"use client";

import React from "react";
import { TextReveal } from "@/components/ui/TextReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { IconSparkles, IconCrown, IconCertificate, IconUsers, IconHeartFilled } from "@tabler/icons-react";

export const VisionAndStats = () => {
  return (
    <section className="w-full py-32 bg-[#FAFAFA] border-t border-slate-100/50 relative overflow-hidden font-sans">
      
      {/* Soft Pastel Background Blur Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[5%] w-[450px] h-[450px] bg-blue-100/15 rounded-full blur-[110px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Text Masking Slogan & Vision statement */}
          <div className="max-w-2xl text-left space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-rose-500 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-flex items-center gap-1.5 shadow-sm">
              <IconSparkles size={11} /> VISI UTAMA SEKOLAH
            </span>
            
            {/* Elegant Spring TextReveal rendering */}
            <TextReveal 
              text="Membentuk intelektual muda yang unggul dalam riset, inovasi teknologi, dan berkarakter kuat." 
              className="text-slate-900 leading-[1.1] font-extrabold tracking-tight"
            />
            
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-semibold">
              Ekosistem pendidikan yang kami rancang di SMA Darul Ulum 1 Unggulan tidak hanya berfokus pada keilmuan teoritis, melainkan berorientasi pada praktik nyata serta pencapaian prestasi berskala internasional.
            </p>
          </div>

          {/* Right Column: High-performance floating statistic indicators */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            
            {/* Card 1: NCC Execution Year count */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100/80 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:scale-105 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-rose-50 border border-rose-100/50 text-rose-500 rounded-2xl w-fit mb-6">
                <IconCrown size={18} />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                  <AnimatedCounter from={0} to={13} duration={2.5} />
                  <span className="text-rose-500">th</span>
                </div>
                <p className="text-xs md:text-sm font-extrabold text-slate-400 uppercase tracking-wider leading-none">Pelaksanaan NCC</p>
              </div>
            </div>

            {/* Card 2: Branches of competition */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100/80 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:scale-105 hover:shadow-md transition-all duration-300 md:mt-8">
              <div className="p-3 bg-orange-50 border border-orange-100/50 text-orange-500 rounded-2xl w-fit mb-6">
                <IconCertificate size={18} />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                  <AnimatedCounter from={0} to={5} duration={2} />
                </div>
                <p className="text-xs md:text-sm font-extrabold text-slate-400 uppercase tracking-wider leading-none">Bidang Utama Lomba</p>
              </div>
            </div>

            {/* Card 3: Active overall participant count */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100/80 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:scale-105 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-blue-50 border border-blue-100/50 text-blue-500 rounded-2xl w-fit mb-6">
                <IconUsers size={18} />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                  <AnimatedCounter from={0} to={1200} suffix="+" duration={3} />
                </div>
                <p className="text-xs md:text-sm font-extrabold text-slate-400 uppercase tracking-wider leading-none">Partisipan Aktif</p>
              </div>
            </div>

            {/* Card 4: Satisfaction index percentage */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100/80 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:scale-105 hover:shadow-md transition-all duration-300 md:mt-8">
              <div className="p-3 bg-emerald-50 border border-emerald-100/50 text-emerald-500 rounded-2xl w-fit mb-6">
                <IconHeartFilled size={18} />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                  <AnimatedCounter from={0} to={98} suffix="%" duration={2.5} />
                </div>
                <p className="text-xs md:text-sm font-extrabold text-slate-400 uppercase tracking-wider leading-none">Tingkat Kepuasan</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
