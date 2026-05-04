"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { NeuralNetworkBackground } from "@/components/ui/neural-network";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Animated3DCarousel } from "@/components/ui/animated-carousel";
import { TextScramble } from "@/components/ui/text-scramble";
import { LinkPreview } from "@/components/ui/link-preview";
import { ShieldCheck, Zap, ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";

export default function HomePage() {
  const dockItems = NAV_ITEMS.map(item => ({
    ...item,
    icon: <item.icon className="w-4 h-4" />
  }));

  const carouselItems = [
    {
      id: 1,
      title: "Laboratorium Riset Terpadu",
      category: "Fasilitas",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Perpustakaan Digital 24/7",
      category: "Fasilitas",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Gedung Pusat Inovasi",
      category: "Arsitektur",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "NCC 2024: National Creativity Competition",
      category: "Event",
      image: "https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary">
              <TextScramble text="SMA DARUL ULUM 1" duration={2} /> <br />
              <span className="text-secondary block mt-2">
                <TextScramble text="UNGGULAN" duration={2.5} />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-serif italic max-w-2xl mx-auto">
              "Membangun Masa Depan Berbasis Iman, Ilmu, dan Teknologi"
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 pt-8">
              <button className="px-8 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-accent transition-all hover:scale-105 shadow-xl shadow-secondary/20">
                Pendaftaran PPDB
              </button>
              <LinkPreview 
                url="https://smadu1-jombang.sch.id" 
                className="px-8 py-3 bg-white border border-slate-200 text-primary rounded-xl font-bold hover:bg-slate-50 transition-all hover:scale-105 flex items-center justify-center shadow-sm"
              >
                Jelajahi Fasilitas <ArrowRight className="ml-2 w-4 h-4" />
              </LinkPreview>
            </div>
          </motion.div>
        </WavyBackground>
      </section>

      {/* Principal Section */}
      <section className="py-24 px-6 md:px-20 relative bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Principal" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
              <TextScramble text="Pesan dari" duration={2} /> <br />
              <span className="text-secondary uppercase">
                <TextScramble text="Kepala Sekolah" duration={2.5} />
              </span>
            </h2>
            <p className="text-2xl font-serif italic text-slate-600 leading-relaxed border-l-4 border-secondary pl-6">
              "Pendidikan bukan sekadar transfer ilmu, melainkan proses membentuk karakter yang siap menghadapi tantangan era digital dengan landasan spiritual yang kokoh."
            </p>
            <div>
              <p className="text-xl font-bold text-primary">Drs. H. Mochammad Zulfikar, M.Si.</p>
              <p className="text-secondary uppercase tracking-widest text-sm">Kepala Sekolah SMA Darul Ulum 1 Unggulan</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/About Section */}
      <section className="py-24 px-6 md:px-20 relative z-10 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <LiquidGlassCard>
            <ShieldCheck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Akreditasi A</h3>
            <p className="text-slate-600">
              Menjamin standar pendidikan internasional dengan kurikulum yang terintegrasi antara nasional dan pesantren.
            </p>
          </LiquidGlassCard>
          <LiquidGlassCard>
            <Zap className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-2">Kurikulum Merdeka</h3>
            <p className="text-slate-600">
              Pendekatan belajar yang adaptif, fokus pada potensi unik setiap siswa melalui program lintas minat yang inovatif.
            </p>
          </LiquidGlassCard>
          <LiquidGlassCard>
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Global Network</h3>
            <p className="text-slate-600">
              Kerjasama internasional dengan berbagai universitas ternama untuk peluang beasiswa dan pertukaran pelajar.
            </p>
          </LiquidGlassCard>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-4">
            <TextScramble text="DOKUMENTASI & GALERI" duration={3} />
          </h2>
          <p className="text-secondary font-serif italic text-lg">Melihat lebih dekat ekosistem belajar yang inspiratif</p>
        </div>
        <Animated3DCarousel items={carouselItems} />
      </section>

      {/* Innovation Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <NeuralNetworkBackground />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-6 text-primary uppercase tracking-tighter">
              Pusat Inovasi <br /> <span className="text-secondary">&</span> Teknologi
            </h2>
            <p className="text-lg md:text-xl text-secondary font-serif italic mb-10 max-w-xl mx-auto">
              Kami menghadirkan ekosistem riset yang memungkinkan siswa untuk mengeksplorasi batas-batas sains dan teknologi modern.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Robotics", "AI Lab", "Science Hub", "BioTech"].map((item) => (
                <div key={item} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-secondary transition-colors cursor-pointer group shadow-sm">
                  <p className="font-bold text-slate-500 group-hover:text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24 px-6 md:px-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-primary">
                BERITA <span className="text-secondary">&</span> ACARA
              </h2>
              <p className="text-slate-600 font-serif italic text-lg">Informasi terkini seputar prestasi dan kegiatan sekolah</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
              Lihat Semua Berita <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: "24 Apr 2024",
                title: "SMA Darul Ulum 1 Raih Juara Umum Olimpiade Sains Nasional",
                desc: "Tim riset sekolah berhasil memborong 5 medali emas dalam ajang OSN tingkat provinsi.",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              },
              {
                date: "12 Apr 2024",
                title: "Pendaftaran PPDB Gelombang II Resmi Dibuka",
                desc: "Segera daftarkan diri Anda untuk menjadi bagian dari generasi unggul masa depan.",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
              },
              {
                date: "05 Apr 2024",
                title: "Kunjungan Industri ke Silicon Valley Asia di BSD City",
                desc: "Siswa kelas XII melakukan studi banding ke pusat pengembangan teknologi AI dan Robotics.",
                img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((news, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 glass border-white/10">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {news.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {news.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {news.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -z-10" />
        <h2 className="text-4xl md:text-7xl font-black mb-8 text-primary">
          Siap Bergabung dengan <br />
          <span className="text-secondary">Generasi Unggul?</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg">
          Jadilah bagian dari perjalanan menuju prestasi global dan masa depan yang cerah bersama SMA Darul Ulum 1 Unggulan. Pendaftaran dibuka untuk tahun ajaran 2024/2025.
        </p>
        <button className="px-12 py-5 bg-secondary text-white rounded-xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-secondary/30 uppercase tracking-widest">
          DAFTAR SEKARANG
        </button>
      </section>

      {/* Navigation */}
      <div className="fixed bottom-10 inset-x-0 z-[100] flex justify-center">
        <FloatingDock items={dockItems} />
      </div>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-200 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm bg-white">
        <div className="mb-12 md:mb-0 text-center md:text-left space-y-4">
          <h4 className="text-primary font-black text-2xl tracking-tighter">SMA Darul Ulum 1 Unggulan</h4>
          <p className="max-w-xs text-slate-400">Jl. Rejoso, Peterongan, Jombang, Jawa Timur. <br /> Telp: (0321) 866XXX</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:text-secondary transition-colors cursor-pointer italic text-slate-400">f</div>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:text-secondary transition-colors cursor-pointer italic text-slate-400">ig</div>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:text-secondary transition-colors cursor-pointer italic text-slate-400">yt</div>
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">Portal</span>
            <a href="#" className="hover:text-secondary transition-colors">Siswa</a>
            <a href="#" className="hover:text-secondary transition-colors">Guru</a>
            <a href="#" className="hover:text-secondary transition-colors">Alumni</a>
            <a href="#" className="hover:text-secondary transition-colors">Wali Murid</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">Layanan</span>
            <a href="#" className="hover:text-secondary transition-colors">E-Learning</a>
            <a href="#" className="hover:text-secondary transition-colors">Perpustakaan Digital</a>
            <a href="#" className="hover:text-secondary transition-colors">PPDB Online</a>
            <a href="#" className="hover:text-secondary transition-colors">Konsultasi Karir</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
