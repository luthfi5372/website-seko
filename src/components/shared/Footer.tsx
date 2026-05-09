"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconBrandInstagram, IconPhone, IconMapPin, IconSparkles } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="w-full py-20 bg-[#FAFAFA] border-t border-slate-100 font-sans relative overflow-hidden">
      {/* Decorative Pastel Background Blur */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-rose-100/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[10%] left-[-5%] w-[250px] h-[250px] bg-indigo-100/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[120px]">
          
          {/* Identitas Utama (Span 2x2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:border-slate-200 transition-colors group min-h-[256px] text-left"
          >
            <div>
              <div className="w-12 h-12 bg-slate-900 rounded-2xl mb-6 flex items-center justify-center text-white font-extrabold text-sm tracking-tighter">
                DU
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                SMA Darul Ulum 1 Unggulan
                <IconSparkles size={16} className="text-rose-400 group-hover:rotate-12 transition-transform duration-300" />
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-sm leading-relaxed font-medium">
                Mencetak generasi cendekiawan muda yang inovatif, berdaya saing global, dan berakar kuat pada integritas spiritual Pondok Pesantren Darul Ulum.
              </p>
            </div>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-8 md:mt-0">
              © 2026 SMA Darul Ulum 1. All Rights Reserved.
            </p>
          </motion.div>

          {/* Kontak & Socials (Instagram Box) */}
          <motion.a 
            href="https://www.instagram.com/hitsdarululum1/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-center shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:border-rose-200 hover:bg-rose-50/10 transition-all cursor-pointer text-left group min-h-[120px]"
          >
            <div className="flex items-center gap-2 mb-2 text-rose-500">
              <IconBrandInstagram size={18} className="group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Instagram</span>
            </div>
            <p className="text-slate-800 font-extrabold text-base tracking-tight hover:text-rose-500 transition-colors">
              @hitsdarululum1
            </p>
          </motion.a>

          {/* Hubungi Kami (Phone Box) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-center shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:border-blue-200 hover:bg-blue-50/10 transition-all text-left group min-h-[120px]"
          >
            <div className="flex items-center gap-2 mb-2 text-blue-500">
              <IconPhone size={18} className="group-hover:translate-x-0.5 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Hubungi Kami</span>
            </div>
            <p className="text-slate-800 font-extrabold text-base tracking-tight">
              +62 321 866156
            </p>
          </motion.div>

          {/* Peta Lokasi (Span 2x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.005 }}
            className="md:col-span-2 bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:border-slate-200 transition-all text-left group min-h-[120px]"
          >
            <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
              <IconMapPin size={22} className="group-hover:animate-bounce" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Lokasi Kampus</span>
              <p className="text-sm font-extrabold text-slate-800 leading-tight mt-1">
                Pondok Pesantren Darul Ulum, Peterongan, Jombang, Jawa Timur
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};
