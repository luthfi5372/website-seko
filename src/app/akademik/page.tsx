"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { WavyBackground } from "@/components/ui/wavy-background";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { NAV_ITEMS } from "@/lib/constants";

export default function AkademikPage() {
  const dockItems = NAV_ITEMS.map(item => ({
    ...item,
    icon: <item.icon className="w-4 h-4" />
  }));

  const programs = [
    {
      title: "Kurikulum Merdeka",
      desc: "Menekankan pada pengembangan karakter dan kompetensi siswa secara fleksibel.",
      features: ["Proyek Profil Pelajar Pancasila", "Pembelajaran Berdiferensiasi", "Asesmen Kompetensi Minimum"]
    },
    {
      title: "Peminatan Unggulan",
      desc: "Fokus pada penguatan IPTEK dan IMTAQ dalam setiap rumpun ilmu.",
      features: ["IPA (Sains & Teknologi)", "IPS (Ekonomi & Sosial)", "Keagamaan (Tahfidz & Kitab)"]
    }
  ];

  return (
    <main className="relative min-h-screen">
      <section className="relative h-[60vh] overflow-hidden">
        <WavyBackground speed="slow" containerClassName="h-full">
          <h1 className="text-5xl md:text-7xl font-black text-primary text-center px-6">
            PROGRAM <span className="text-secondary">AKADEMIK</span>
          </h1>
        </WavyBackground>
      </section>

      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {programs.map((program, idx) => (
            <LiquidGlassCard key={idx} className="h-full">
              <h3 className="text-3xl font-black text-primary mb-4">{program.title}</h3>
              <p className="text-slate-600 mb-8 font-serif italic text-lg leading-relaxed">
                "{program.desc}"
              </p>
              <ul className="space-y-4">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-bold">{feature}</span>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Ekosistem Belajar <br /> Berstandar Global</h2>
              <p className="text-secondary text-lg font-serif italic">
                Kami menggabungkan nilai-nilai pesantren yang luhur dengan metode pembelajaran modern yang adaptif terhadap perubahan zaman.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Rasio Guru", val: "1:15" },
                { label: "Lab Riset", val: "12+" },
                { label: "E-Library", val: "24/7" },
                { label: "Lulusan PTN", val: "95%" }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-center">
                  <div className="text-2xl font-black text-accent">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-secondary font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-10 inset-x-0 z-[100] flex justify-center">
        <FloatingDock items={dockItems} />
      </div>
    </main>
  );
}
