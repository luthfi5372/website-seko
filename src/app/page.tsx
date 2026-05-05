"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Globe, 
  Award,
  Cpu,
  Binary,
  FlaskConical,
  Microchip
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const words = [
    { text: "Empowering" },
    { text: "the" },
    { text: "Next" },
    { text: "Generation" },
    { text: "through" },
    { text: "Innovation.", className: "text-secondary font-black" },
  ];

  const stickyContent = [
    {
      title: "National Creativity Competition",
      description:
        "Ajang kompetisi kreativitas tingkat nasional yang mempertemukan talenta-talenta terbaik dari seluruh penjuru negeri untuk berinovasi di bidang sains dan teknologi.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Trophy className="w-20 h-20" />
        </div>
      ),
    },
    {
      title: "Digital Innovation Hub",
      description:
        "Pusat riset dan pengembangan teknologi digital di mana siswa dapat mengeksplorasi AI, Robotics, dan Software Development secara mendalam.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Cpu className="w-20 h-20 text-white" />
        </div>
      ),
    },
    {
      title: "Global Partnership",
      description:
        "Menjalin kolaborasi dengan institusi pendidikan global untuk memberikan wawasan internasional dan peluang pertukaran pelajar.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Globe className="w-20 h-20" />
        </div>
      ),
    },
  ];

  const bentoItems = [
    {
      title: "Smart Laboratory",
      description: "Fasilitas riset berbasis IoT dengan peralatan medis dan sains mutakhir.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <FlaskConical className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "AI & Robotics Hub",
      description: "Pusat pengembangan kecerdasan buatan dan robotika berskala internasional.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Microchip className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Digital Library",
      description: "Akses tanpa batas ke ribuan jurnal dan e-book dari seluruh dunia.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <BookOpen className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Quantum Coding",
      description: "Kurikulum pemrograman tingkat lanjut berbasis industri teknologi modern.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Binary className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <main className="bg-background text-primary overflow-x-hidden">
      {/* Hero Section */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Empowering Future Leaders
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-center leading-[0.9] max-w-4xl">
            SMADU 1 <br />
            <span className="text-secondary italic">UNGGULAN.</span>
          </h1>
          
          <TypewriterEffect words={words} className="mt-4 mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ppdb" className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all hover:scale-105 shadow-xl shadow-primary/20 flex items-center gap-2 group">
              Join PPDB 2024 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/fasilitas" className="px-8 py-4 bg-white border border-slate-200 text-primary rounded-xl font-bold hover:bg-slate-50 transition-all hover:scale-105">
              Explore Facilities
            </Link>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Sticky Scroll Section - Highlight Events */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Focus & Events</h2>
        </div>
        <StickyScroll content={stickyContent} />
      </section>

      {/* Bento Grid Section - Program & Facilities */}
      <section className="py-32 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">PREMIUM ECOSYSTEM</h2>
            <p className="text-slate-500 max-w-xl font-medium">World-class facilities designed for the next generation of innovators.</p>
          </div>
          <BentoGrid>
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 0 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Students", val: "1.2k+", icon: Users },
            { label: "Success Rate", val: "98%", icon: Zap },
            { label: "Global Partners", val: "15+", icon: Globe },
            { label: "Awards", val: "150+", icon: Award }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <stat.icon className="w-6 h-6 mx-auto text-secondary mb-4" />
              <h3 className="text-4xl font-black tracking-tighter">{stat.val}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 md:px-20 text-center bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent blur-3xl" />
        <h2 className="relative z-10 text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          BUILD YOUR <br />
          <span className="text-secondary italic">FUTURE.</span>
        </h2>
        <p className="relative z-10 text-slate-400 max-w-xl mx-auto mb-12 text-lg">
          Registration for the 2024 academic year is now open. Secure your place in the most innovative school in the region.
        </p>
        <Link href="/ppdb" className="relative z-10 inline-block px-12 py-6 bg-accent text-primary rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-accent/20 uppercase tracking-widest">
          Join Us Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white px-6 md:px-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-black text-2xl tracking-tighter">SMADU 1 UNGGULAN</h4>
            <p className="text-slate-400 text-sm mt-2">Jl. Rejoso, Peterongan, Jombang, Jawa Timur.</p>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="/akademik" className="hover:text-secondary transition-colors">Academic</Link>
            <Link href="/prestasi" className="hover:text-secondary transition-colors">Awards</Link>
            <Link href="/kontak" className="hover:text-secondary transition-colors">Contact</Link>
          </div>
          <p className="text-slate-300 text-xs uppercase tracking-widest">© 2024 All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}

const Trophy = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
