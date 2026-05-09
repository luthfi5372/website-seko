"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IconX, IconTrophy, IconCalendar, IconChevronRight, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

// Ambil sampel data prestasi autentik untuk representasi cuplikan halaman utama
const highlightsData = [
  {
    id: 1,
    image: "/images/prestasi/657723292_18347231815209103_4607357526145163170_n..jpg",
    title: "Juara 1 Olimpiade Fisika Nasional",
    category: "Akademik",
    year: "2024",
    desc: "Sinergi ketekunan dan bimbingan intensif mengantarkan santri SMA Darul Ulum 1 meraih Juara 1 tingkat nasional dalam persaingan fisika teoretis dan eksperimen."
  },
  {
    id: 2,
    image: "/images/prestasi/657737528_18347231824209103_5250874756443422647_n..jpg",
    title: "Gold Medal National Robotics Exhibition",
    category: "IT & Robotika",
    year: "2024",
    desc: "Inovasi robot penyelamat mandiri (Autonomous Search & Rescue Robot) rancangan Lab Robotika SMA DU 1 menyabet medali emas nasional."
  },
  {
    id: 3,
    image: "/images/prestasi/657762029_18347231806209103_7586382303523791718_n..jpg",
    title: "Juara Utama LKTI Energi Terbarukan",
    category: "Riset & LKTI",
    year: "2024",
    desc: "Inovasi pemanfaatan biomassa lokal sebagai bahan bakar alternatif ramah lingkungan memboyong Trofi Utama Lomba Karya Tulis Ilmiah Nasional."
  },
  {
    id: 4,
    image: "/images/prestasi/657824634_18347231845209103_1388297608906823518_n..jpg",
    title: "Juara Terbaik Speech & Storytelling",
    category: "Seni & Bahasa",
    year: "2024",
    desc: "Kefasihan berorasi dan kemampuan menceritakan warisan budaya nusantara secara diplomatis memukau dewan juri English Festival Nasional."
  },
  {
    id: 5,
    image: "/images/prestasi/658481235_18347231776209103_9126762826929786035_n..jpg",
    title: "Juara 1 Musabaqah Syarhil Quran",
    category: "Keagamaan",
    year: "2024",
    desc: "Sajian retorika terstruktur dikombinasikan dengan pemahaman mendalam ayat suci Al-Quran berhasil meraih gelar juara pertama tingkat provinsi."
  },
  {
    id: 6,
    image: "/images/prestasi/658561191_18347231803209103_108184872874716332_n..jpg",
    title: "Best Tech Innovation - IoT Smart Agri",
    category: "IT & Robotika",
    year: "2023",
    desc: "Sistem monitoring kelembapan tanah berbasis mikrokontroler IoT untuk program pertanian modern terpadu di lingkungan pesantren."
  },
  {
    id: 7,
    image: "/images/prestasi/658833048_18347231785209103_5976104556791070798_n..jpg",
    title: "Medali Emas Olimpiade Kebumian",
    category: "Akademik",
    year: "2023",
    desc: "Pembuktian keunggulan kompetensi sains kebumian (Geosains) murni dengan menyabet medali emas di kompetisi astronomi dan kebumian nasional."
  },
  {
    id: 8,
    image: "/images/prestasi/660755870_18347231833209103_719169745974574970_n..jpg",
    title: "Juara Umum LKTI Nasional BRIN",
    category: "Riset & LKTI",
    year: "2023",
    desc: "Karya tulis ilmiah bertema pengolahan air bersih terintegrasi di lingkungan asrama memperoleh apresiasi tertinggi dari juri riset nasional."
  },
  {
    id: 9,
    image: "/images/prestasi/661647092_18348357637209103_109495114599534538_n..jpg",
    title: "Medali Perak Olimpiade Matematika",
    category: "Akademik",
    year: "2023",
    desc: "Ketajaman logika matematika teoretis terintegrasi nilai-nilai keislaman meloloskan delegasi sekolah ke podium medali perak tingkat nasional."
  },
  {
    id: 10,
    image: "/images/prestasi/662538022_18348357715209103_1315277637008900469_n..jpg",
    title: "Juara 1 Web Development",
    category: "IT & Robotika",
    year: "2024",
    desc: "Pengembangan portal belajar keagamaan interaktif berbasis Next.js untuk mempermudah santri menghafal Al-Quran secara mandiri."
  },
  {
    id: 11,
    image: "/images/prestasi/662877138_18348146191209103_6739560523236778448_n..jpg",
    title: "Best Presenter LKTI Humaniora",
    category: "Riset & LKTI",
    year: "2024",
    desc: "Apresiasi atas presentasi kritis sosiologis pesantren yang memukau dewan juri universitas nasional dalam riset moderasi beragama."
  },
  {
    id: 12,
    image: "/images/prestasi/663120120_18348357649209103_2238224211855132533_n..jpg",
    title: "Juara 1 Tahfidz Al-Quran 10 Juz",
    category: "Keagamaan",
    year: "2024",
    desc: "Prestasi luhur hafalan Al-Quran secara mutqin dengan makhraj, tajwid, dan kefasihan terbaik dalam ajang kompetisi regional Jatim."
  }
];

// Pisah baris untuk efek double-marquee
const row1 = highlightsData.slice(0, 6);
const row2 = highlightsData.slice(6, 12);

export const PrestasiHighlights = () => {
  const [selectedAward, setSelectedAward] = useState<typeof highlightsData[0] | null>(null);

  return (
    <section className="py-24 bg-white border-b border-slate-100 overflow-hidden relative">
      {/* Decorative Blur Ambient */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-rose-100/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-indigo-100/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 mb-16 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-4 max-w-2xl text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-rose-500 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-flex items-center gap-1.5 shadow-sm">
            <IconSparkles size={11} /> Galeri Kemenangan
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Puncak Apresiasi & <br />
            Dokumentasi Prestasi.
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
            Melihat lebih dekat senyum kemenangan, trofi kebanggaan, dan dedikasi luhur para santri cendekia dalam mengharumkan nama almamater di tingkat nasional.
          </p>
        </div>
        
        <Link 
          href="/prestasi"
          className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-sm self-start sm:self-auto"
        >
          <span>Semua Prestasi</span>
          <IconChevronRight size={14} />
        </Link>
      </div>

      {/* Infinite Scroll Rows Wrap */}
      <div className="space-y-6 select-none relative z-10 w-full">
        {/* Left & Right dissolving glass edge gradients */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left to Right Marquee */}
        <div className="flex overflow-hidden w-full gap-6 relative">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear"
            }}
            className="flex gap-6 shrink-0 py-2"
          >
            {[...row1, ...row1, ...row1].map((award, idx) => (
              <MarqueeCard key={`r1-${idx}`} award={award} onSelect={() => setSelectedAward(award)} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div className="flex overflow-hidden w-full gap-6 relative">
          <motion.div 
            animate={{ x: [-1920, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear"
            }}
            className="flex gap-6 shrink-0 py-2"
          >
            {[...row2, ...row2, ...row2].map((award, idx) => (
              <MarqueeCard key={`r2-${idx}`} award={award} onSelect={() => setSelectedAward(award)} />
            ))}
          </motion.div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAward && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAward(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-3xl rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_30px_70px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col z-10"
            >
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-md text-slate-500 hover:text-slate-800 rounded-full flex items-center justify-center border border-slate-100 shadow-sm transition-all hover:scale-105 z-20"
              >
                <IconX size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 text-left">
                {/* Image Side */}
                <div className="md:col-span-7 bg-slate-100 h-64 sm:h-96 md:h-auto relative min-h-[300px]">
                  <img
                    src={selectedAward.image}
                    alt={selectedAward.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>

                {/* Meta Side */}
                <div className="md:col-span-5 p-8 flex flex-col justify-between h-auto md:min-h-[420px]">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="px-3.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-800 shadow-sm w-fit inline-block">
                        {selectedAward.category}
                      </span>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight pt-1">
                        {selectedAward.title}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                      {selectedAward.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                      <div className="flex items-center gap-1">
                        <IconCalendar size={14} />
                        <span>Tahun {selectedAward.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IconTrophy size={14} />
                        <span>Tingkat Nasional</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedAward(null)}
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const MarqueeCard = ({ award, onSelect }: { award: typeof highlightsData[0]; onSelect: () => void }) => {
  return (
    <motion.div 
      onClick={onSelect}
      whileHover={{ y: -4, scale: 1.02 }}
      className="w-[280px] sm:w-[320px] aspect-[4/3] rounded-[2rem] overflow-hidden relative cursor-pointer border border-slate-200/50 bg-slate-100 group shadow-[0_4px_20px_rgba(0,0,0,0.02)] shrink-0 text-left"
    >
      <img 
        src={award.image} 
        alt={award.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
      
      {/* Content overlays */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
        <span className="text-[9px] font-black uppercase tracking-wider text-rose-400 mb-1.5">
          {award.category} • {award.year}
        </span>
        <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight group-hover:text-rose-100 transition-colors duration-300">
          {award.title}
        </h3>
      </div>
    </motion.div>
  );
};
