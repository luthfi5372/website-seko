"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { NAV_ITEMS } from "@/lib/constants";

export default function PrestasiPage() {
  const dockItems = NAV_ITEMS.map(item => ({
    ...item,
    icon: <item.icon className="w-4 h-4" />
  }));

  const awards = [
    {
      year: "2024",
      title: "Juara Umum OSN Nasional",
      category: "Sains",
      desc: "Berhasil meraih 10 medali emas di bidang Fisika, Kimia, dan Biologi.",
      img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2070&auto=format&fit=crop"
    },
    {
      year: "2023",
      title: "Gold Medal International Robotics Expo",
      category: "Teknologi",
      desc: "Inovasi robot penyelamat berbasis AI yang diakui secara global.",
      img: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=2074&auto=format&fit=crop"
    },
    {
      year: "2023",
      title: "Best Islamic School of the Year",
      category: "Institusi",
      desc: "Penghargaan atas integrasi pendidikan modern dan nilai-nilai luhur.",
      img: "https://images.unsplash.com/photo-1523050335102-c8847976b128?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <section className="relative h-[40vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #219EBC 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <h1 className="relative z-10 text-5xl md:text-7xl font-black text-white text-center px-6 uppercase">
          JEJAK <span className="text-accent">PRESTASI</span>
        </h1>
      </section>

      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-24">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 relative aspect-video rounded-3xl overflow-hidden bg-white/40 backdrop-blur-xl border border-primary/5 group shadow-xl">
                <img 
                  src={award.img} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-accent font-black text-4xl">{award.year}</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-bold uppercase tracking-widest text-xs border border-accent/20">
                    {award.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">{award.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed font-serif italic">
                  "{award.desc}"
                </p>
                <div className="h-1 w-20 bg-accent rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Medali Emas", value: "150+" },
            { label: "Siswa Berprestasi", value: "2.4k" },
            { label: "Partner Global", value: "15" },
            { label: "Inovasi Paten", value: "8" }
          ].map((stat, i) => (
            <LiquidGlassCard key={i} className="text-center py-10">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-secondary text-xs uppercase tracking-widest font-bold">{stat.label}</div>
            </LiquidGlassCard>
          ))}
        </div>
      </section>

      <div className="fixed bottom-10 inset-x-0 z-[100] flex justify-center">
        <FloatingDock items={dockItems} />
      </div>
    </main>
  );
}
