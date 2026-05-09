"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

export const TrustedBy = () => {
  const partners = [
    { name: "BPPT (BRIN)", logo: "BPPT", color: "bg-emerald-600 text-white border-emerald-700/20" },
    { name: "Institut Teknologi Sepuluh Nopember", logo: "ITS", color: "bg-blue-500 text-white border-blue-600/10" },
    { name: "Universitas Gadjah Mada", logo: "UGM", color: "bg-blue-900 text-white border-blue-950/20" },
    { name: "Universitas Brawijaya", logo: "UB", color: "bg-amber-400 text-slate-900 border-amber-500/10" },
    { name: "Universitas Airlangga", logo: "UNAIR", color: "bg-indigo-900 text-amber-300 border-indigo-950" },
    { name: "Universitas Indonesia", logo: "UI", color: "bg-yellow-400 text-slate-900 border-yellow-500/20" },
  ];

  return (
    <section className="w-full py-16 bg-[#FAFAFA] font-sans border-t border-slate-100/50">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header Section: Text left, Button right (SaaS Layout standard) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-500 mb-1 flex items-center gap-1.5">
              <IconSparkles size={11} /> TRADISI PRESTASI AKADEMIK & AFILIASI STRATEGIS
            </h4>
            <p className="text-sm md:text-base font-bold text-slate-500 leading-relaxed">
              Alumni kami melanjutkan studi di perguruan tinggi negeri terkemuka, serta didukung oleh kolaborasi erat dengan lembaga IPTEK nasional.
            </p>
          </div>
          <Link 
            href="/prestasi"
            className="text-xs font-black uppercase tracking-widest text-slate-800 hover:text-rose-500 transition-all flex items-center justify-center gap-2 border border-slate-200/80 px-6 py-3.5 rounded-full bg-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 whitespace-nowrap"
          >
            <span>Lihat Sebaran Alumni</span>
            <IconArrowUpRight size={14} className="text-slate-400 group-hover:text-rose-500" />
          </Link>
        </div>

        {/* Logo Cloud Grid with Grayscale Opacity */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Monogram styled badge with high-end hover effects */}
              <div className="flex items-center gap-3 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-[11px] border shadow-sm transition-all group-hover:shadow-md ${partner.color}`}>
                  {partner.logo}
                </div>
                <div className="text-left hidden lg:block">
                  <p className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider leading-none">{partner.logo}</p>
                  <p className="text-[8px] font-bold text-slate-400 mt-0.5 truncate max-w-[100px]">{partner.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Sleek Gradient Horizontal Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-16" />
      </div>
    </section>
  );
};
