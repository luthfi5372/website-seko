"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import { IconCamera, IconCalendar, IconUsers, IconTrophy } from "@tabler/icons-react";

// ─── Data ────────────────────────────────────────────────────────────
const heroImages = [
  { src: "https://images.unsplash.com/photo-1523050335102-c8847976b128?q=80&w=2070&auto=format&fit=crop", label: "Upacara Kehormatan" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", label: "Diskusi Kelompok" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", label: "Kolaborasi Tim" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", label: "Workshop Riset" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", label: "Seminar Akademik" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop", label: "Kelas Interaktif" },
];

const galleryGrid = [
  { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop", caption: "Ekspedisi Ilmiah", category: "Akademik" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop", caption: "Laboratorium Modern", category: "Fasilitas" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop", caption: "Ujian Nasional", category: "Akademik" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop", caption: "Wisuda Santri", category: "Acara" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop", caption: "Belajar Bersama", category: "Akademik" },
  { src: "https://images.unsplash.com/photo-1523050335102-c8847976b128?q=80&w=2070&auto=format&fit=crop", caption: "Upacara Bendera", category: "Acara" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", caption: "Kuliah Tamu", category: "Akademik" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop", caption: "Perpustakaan Digital", category: "Fasilitas" },
];

const featuredMoments = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    title: "Olimpiade Sains Nasional 2024",
    desc: "Delegasi SMA Darul Ulum 1 berhasil membawa pulang 5 medali emas dari ajang bergengsi OSN 2024 di bidang Fisika dan Astronomi.",
    date: "November 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    title: "Workshop Riset Internasional",
    desc: "Kolaborasi riset dengan universitas ternama Jepang dalam bidang energi terbarukan dan teknologi ramah lingkungan.",
    date: "September 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    title: "Festival Budaya Nusantara",
    desc: "Perayaan kemajemukan budaya Indonesia melalui pertunjukan seni, kuliner tradisional, dan pameran kerajinan santri.",
    date: "Agustus 2024",
  },
];

const stats = [
  { icon: IconTrophy, value: 156, suffix: "+", label: "Prestasi Nasional" },
  { icon: IconUsers, value: 2400, suffix: "+", label: "Alumni Aktif" },
  { icon: IconCalendar, value: 45, suffix: "", label: "Tahun Berdiri" },
  { icon: IconCamera, value: 320, suffix: "+", label: "Dokumentasi Kegiatan" },
];

// ─── Counter Hook ────────────────────────────────────────────────────
function useCounter(target: number, isInView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return count;
}

// ─── Stat Card ───────────────────────────────────────────────────────
function StatCard({ icon: Icon, value, suffix, label, delay }: {
  icon: typeof IconTrophy; value: number; suffix: string; label: string; delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(value, isInView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-3 p-8"
    >
      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-2">
        <Icon size={26} className="text-secondary" />
      </div>
      <span className="text-4xl md:text-5xl font-black text-slate-900 tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────
export default function GaleriPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Buttery spring for hero parallax
  const smoothHero = useSpring(heroProgress, { stiffness: 80, damping: 30, mass: 0.5 });

  const dockItems = NAV_ITEMS.map((item) => ({
    ...item,
    icon: <item.icon className="w-4 h-4" />,
  }));

  // Hero scroll-linked values
  const titleY = useTransform(smoothHero, [0, 1], [0, -120]);
  const titleOpacity = useTransform(smoothHero, [0, 0.4], [1, 0]);
  const titleScale = useTransform(smoothHero, [0, 0.5], [1, 0.9]);

  return (
    <main className="relative bg-[#FAFAFA]">
      {/* ═══════ SECTION 1: Hero Parallax Stack ═══════ */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-slate-900">
        {/* Layered Parallax Images */}
        {heroImages.slice(0, 4).map((img, i) => {
          const depth = (i + 1) * 0.15;
          const imgY = useTransform(smoothHero, [0, 1], [0, -200 * (i + 1)]);
          const imgScale = useTransform(smoothHero, [0, 1], [1, 1.15 + i * 0.05]);
          const imgOpacity = useTransform(smoothHero, [0, 0.6], [0.35 - i * 0.05, 0]);

          return (
            <motion.div
              key={i}
              style={{ y: imgY, scale: imgScale, opacity: imgOpacity }}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            </motion.div>
          );
        })}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 z-10" />

        {/* Hero Title */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-secondary/80 mb-6"
          >
            SMA Darul Ulum 1 Unggulan
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9]"
          >
            ARSIP
            <br />
            <span className="bg-gradient-to-r from-secondary via-secondary-light to-accent bg-clip-text text-transparent">
              UNGGULAN
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-slate-400 text-sm md:text-base max-w-lg font-medium"
          >
            Mengabadikan momen keunggulan, inspirasi, dan semangat juang santri Darul Ulum.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-12 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-slate-500/40 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-1.5 rounded-full bg-slate-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════ SECTION 2: Stats Counter Bar ═══════ */}
      <section className="relative z-10 -mt-1 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ═══════ SECTION 3: Masonry Photo Grid ═══════ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#FAFAFA]">
        {/* Background decoration */}
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-20"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary bg-secondary/5 px-4 py-2 rounded-full border border-secondary/10 inline-block mb-6">
              Galeri Kegiatan
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Momen yang<br />Menginspirasi.
            </h2>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryGrid.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: (i % 3) * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-500 cursor-pointer"
              >
                <div className={`relative ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/90 block mb-1">{item.category}</span>
                    <h4 className="text-white font-bold text-lg">{item.caption}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: Featured Moments (Cinematic Cards) ═══════ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-20 text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-light bg-accent/5 px-4 py-2 rounded-full border border-accent/10 inline-block mb-6">
              Sorotan Utama
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Momen Terbaik Tahun Ini
            </h2>
            <p className="mt-4 text-slate-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              Kilas balik peristiwa bersejarah yang mengukir nama SMA Darul Ulum 1 di panggung nasional.
            </p>
          </motion.div>

          {/* Featured Cards */}
          <div className="space-y-12 md:space-y-16">
            {featuredMoments.map((moment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <div className="relative w-full md:w-3/5 aspect-[16/10] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={moment.src}
                    alt={moment.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  {/* Date badge */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                      <IconCalendar size={12} /> {moment.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/5 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {moment.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                    {moment.desc}
                  </p>
                  <button className="group/btn flex items-center gap-2 text-sm font-bold text-secondary hover:text-secondary-light transition-colors mt-2">
                    Lihat Detail
                    <span className="transform transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: Call to Action ═══════ */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Jadilah Bagian dari<br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Cerita Selanjutnya.
              </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-lg mx-auto mb-10">
              Bergabunglah bersama ribuan alumni sukses SMA Darul Ulum 1 Unggulan. Daftarkan diri Anda sekarang.
            </p>
            <a
              href="/kontak"
              className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              <span>Daftar Sekarang</span>
              <span>&rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════ Floating Dock ═══════ */}
      <div className="fixed bottom-10 inset-x-0 z-[100] flex justify-center">
        <FloatingDock items={dockItems} />
      </div>
    </main>
  );
}
