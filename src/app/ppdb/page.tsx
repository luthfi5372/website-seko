"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { WavyBackground } from "@/components/ui/wavy-background";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { NAV_ITEMS } from "@/lib/constants";

export default function PPDBPage() {
  const dockItems = NAV_ITEMS.map(item => ({
    ...item,
    icon: <item.icon className="w-4 h-4" />
  }));

  const steps = [
    { title: "Registrasi Online", desc: "Mengisi formulir data diri melalui portal PPDB Digital." },
    { title: "Verifikasi Berkas", desc: "Unggah dokumen pendukung (Ijazah, KK, Akta Kelahiran)." },
    { title: "CBT & Wawancara", desc: "Mengikuti tes berbasis komputer dan wawancara peminatan." },
    { title: "Pengumuman", desc: "Hasil seleksi dapat dilihat secara real-time di dashboard." }
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <section className="relative h-[40vh] overflow-hidden">
        <WavyBackground speed="slow" containerClassName="h-full">
          <h1 className="text-5xl md:text-7xl font-black text-primary text-center px-6">
            PENDAFTARAN <span className="text-secondary">PPDB</span>
          </h1>
        </WavyBackground>
      </section>

      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">Jadilah Bagian dari Generasi Unggul</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-serif italic">
              Penerimaan Peserta Didik Baru (PPDB) SMA Darul Ulum 1 Unggulan tahun ajaran 2024/2025 telah dibuka. Kami mengundang putra-putri terbaik bangsa untuk bergabung dalam ekosistem pendidikan masa depan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <LiquidGlassCard key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold shrink-0 border border-secondary/20">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-2">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <LiquidGlassCard className="bg-primary text-white border-none shadow-xl">
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">Daftar Sekarang</h3>
            <div className="space-y-4">
              <button className="w-full py-4 bg-accent text-white font-black rounded-xl hover:bg-accent-light transition-colors uppercase tracking-widest text-sm shadow-lg shadow-accent/20">
                Buka Portal Pendaftaran
              </button>
              <button className="w-full py-4 bg-white/10 border border-white/20 text-white font-black rounded-xl hover:bg-white/20 transition-colors uppercase tracking-widest text-sm">
                Unduh Brosur (PDF)
              </button>
            </div>
          </LiquidGlassCard>

          <div className="p-8 rounded-[2rem] border border-primary/5 bg-secondary/5">
            <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              Syarat Utama
            </h4>
            <ul className="space-y-3 text-slate-600 text-sm italic font-serif">
              <li>• Lulus SMP/MTs sederajat</li>
              <li>• Usia maksimal 17 tahun</li>
              <li>• Memiliki motivasi belajar tinggi</li>
              <li>• Sehat jasmani dan rohani</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="fixed bottom-10 inset-x-0 z-[100] flex justify-center">
        <FloatingDock items={dockItems} />
      </div>
    </main>
  );
}
