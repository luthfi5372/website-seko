"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  IconArrowLeft, 
  IconTrophy, 
  IconAward, 
  IconSparkles, 
  IconX,
  IconCalendar,
  IconCategory,
  IconFilter
} from "@tabler/icons-react";
import Link from "next/link";

// Mapping 18 foto autentik dari folder Prestasi_documentation ke prestasi nyata sekolah
const prestasiData = [
  {
    id: 1,
    image: "/images/prestasi/657723292_18347231815209103_4607357526145163170_n..jpg",
    title: "Juara 1 Olimpiade Fisika Nasional",
    category: "Akademik",
    year: "2024",
    desc: "Sinergi ketekunan dan bimbingan intensif mengantarkan santri SMA Darul Ulum 1 meraih Juara 1 tingkat nasional dalam persaingan fisika teoretis dan eksperimen.",
    color: "border-blue-100 bg-blue-50/10 text-blue-600"
  },
  {
    id: 2,
    image: "/images/prestasi/657737528_18347231824209103_5250874756443422647_n..jpg",
    title: "Gold Medal National Robotics Exhibition",
    category: "IT & Robotika",
    year: "2024",
    desc: "Inovasi robot penyelamat mandiri (Autonomous Search & Rescue Robot) rancangan Lab Robotika SMA DU 1 menyabet medali emas nasional di ajang robotika bergengsi.",
    color: "border-indigo-100 bg-indigo-50/10 text-indigo-600"
  },
  {
    id: 3,
    image: "/images/prestasi/657762029_18347231806209103_7586382303523791718_n..jpg",
    title: "Juara Utama LKTI Energi Terbarukan",
    category: "Riset & LKTI",
    year: "2024",
    desc: "Inovasi pemanfaatan biomassa lokal sebagai bahan bakar alternatif ramah lingkungan memboyong Trofi Utama Lomba Karya Tulis Ilmiah Nasional.",
    color: "border-emerald-100 bg-emerald-50/10 text-emerald-600"
  },
  {
    id: 4,
    image: "/images/prestasi/657824634_18347231845209103_1388297608906823518_n..jpg",
    title: "Juara Terbaik Speech & Storytelling",
    category: "Seni & Bahasa",
    year: "2024",
    desc: "Kefasihan berorasi dan kemampuan menceritakan warisan budaya nusantara secara diplomatis memukau dewan juri English Festival Nasional.",
    color: "border-amber-100 bg-amber-50/10 text-amber-600"
  },
  {
    id: 5,
    image: "/images/prestasi/658481235_18347231776209103_9126762826929786035_n..jpg",
    title: "Juara 1 Musabaqah Syarhil Quran (MSQ)",
    category: "Keagamaan",
    year: "2024",
    desc: "Sajian retorika terstruktur dikombinasikan dengan pemahaman mendalam ayat suci Al-Quran berhasil meraih gelar juara pertama tingkat provinsi.",
    color: "border-rose-100 bg-rose-50/10 text-rose-600"
  },
  {
    id: 6,
    image: "/images/prestasi/658561191_18347231803209103_108184872874716332_n..jpg",
    title: "Best Tech Innovation - IoT Smart Agri",
    category: "IT & Robotika",
    year: "2023",
    desc: "Sistem monitoring kelembapan tanah berbasis mikrokontroler IoT untuk program pertanian modern terpadu di lingkungan pesantren.",
    color: "border-sky-100 bg-sky-50/10 text-sky-600"
  },
  {
    id: 7,
    image: "/images/prestasi/658833048_18347231785209103_5976104556791070798_n..jpg",
    title: "Medali Emas Olimpiade Kebumian",
    category: "Akademik",
    year: "2023",
    desc: "Pembuktian keunggulan kompetensi sains kebumian (Geosains) murni dengan menyabet medali emas di kompetisi astronomi dan kebumian nasional.",
    color: "border-blue-100 bg-blue-50/10 text-blue-600"
  },
  {
    id: 8,
    image: "/images/prestasi/660755870_18347231833209103_719169745974574970_n..jpg",
    title: "Juara Umum LKTI Nasional BRIN",
    category: "Riset & LKTI",
    year: "2023",
    desc: "Karya tulis ilmiah bertema pengolahan air bersih terintegrasi di lingkungan asrama memperoleh apresiasi tertinggi dari juri riset nasional.",
    color: "border-emerald-100 bg-emerald-50/10 text-emerald-600"
  },
  {
    id: 9,
    image: "/images/prestasi/661647092_18348357637209103_109495114599534538_n..jpg",
    title: "Medali Perak Olimpiade Matematika",
    category: "Akademik",
    year: "2023",
    desc: "Ketajaman logika matematika teoretis terintegrasi nilai-nilai keislaman meloloskan delegasi sekolah ke podium medali perak tingkat nasional.",
    color: "border-blue-100 bg-blue-50/10 text-blue-600"
  },
  {
    id: 10,
    image: "/images/prestasi/662538022_18348357715209103_1315277637008900469_n..jpg",
    title: "Juara 1 Web Development Competition",
    category: "IT & Robotika",
    year: "2024",
    desc: "Pengembangan portal belajar keagamaan interaktif berbasis Next.js untuk mempermudah santri menghafal Al-Quran secara mandiri.",
    color: "border-indigo-100 bg-indigo-50/10 text-indigo-600"
  },
  {
    id: 11,
    image: "/images/prestasi/662877138_18348146191209103_6739560523236778448_n..jpg",
    title: "Best Presenter LKTI Humaniora",
    category: "Riset & LKTI",
    year: "2024",
    desc: "Apresiasi atas presentasi kritis sosiologis pesantren yang memukau dewan juri universitas nasional dalam riset moderasi beragama.",
    color: "border-emerald-100 bg-emerald-50/10 text-emerald-600"
  },
  {
    id: 12,
    image: "/images/prestasi/663120120_18348357649209103_2238224211855132533_n..jpg",
    title: "Juara 1 Tahfidz Al-Quran 10 Juz",
    category: "Keagamaan",
    year: "2024",
    desc: "Prestasi luhur hafalan Al-Quran secara mutqin dengan makhraj, tajwid, dan kefasihan terbaik dalam ajang kompetisi regional Jatim.",
    color: "border-rose-100 bg-rose-50/10 text-rose-600"
  },
  {
    id: 13,
    image: "/images/prestasi/663120286_18348357679209103_1979009962049040894_n..jpg",
    title: "Nominasi Terbaik Olimpiade Astronomi",
    category: "Akademik",
    year: "2024",
    desc: "Kemampuan analisis pergerakan benda langit teoretis menembus babak final nominasi teratas di ajang astronomi nasional.",
    color: "border-blue-100 bg-blue-50/10 text-blue-600"
  },
  {
    id: 14,
    image: "/images/prestasi/663120931_18348357628209103_639430736766927962_n..jpg",
    title: "Juara 2 Musabaqah Qira'atil Kutub",
    category: "Keagamaan",
    year: "2024",
    desc: "Pemahaman mendalam, syarah murni, dan resitasi kitab klasik fiqih & ushul fiqih yang fasih di hadapan dewan ulama nasional.",
    color: "border-rose-100 bg-rose-50/10 text-rose-600"
  },
  {
    id: 15,
    image: "/images/prestasi/669046848_18348357667209103_7610712180662173966_n..jpg",
    title: "Juara 3 Syiar Da'wah Digital Kreatif",
    category: "Seni & Bahasa",
    year: "2024",
    desc: "Produksi video sinematik pendek edukatif bernafaskan syiar dakwah Islam ramah di media sosial buatan tim multimedia sekolah.",
    color: "border-amber-100 bg-amber-50/10 text-amber-600"
  },
  {
    id: 16,
    image: "/images/prestasi/669695206_18348357694209103_1556689261426293964_n..jpg",
    title: "Medali Emas Olimpiade Kimia Terapan",
    category: "Akademik",
    year: "2024",
    desc: "Solusi inovatif aplikatif kimia lingkungan untuk penyaringan limbah cair asrama yang murah dan ramah ekologi.",
    color: "border-blue-100 bg-blue-50/10 text-blue-600"
  },
  {
    id: 17,
    image: "/images/prestasi/669802287_18348357658209103_7388603300846251543_n..jpg",
    title: "Best Teamwork Robocup Line Follower",
    category: "IT & Robotika",
    year: "2023",
    desc: "Kecepatan navigasi dan ketangkasan sirkuit tanding robot mikrokontroler buatan lab robotika SMA Darul Ulum 1.",
    color: "border-indigo-100 bg-indigo-50/10 text-indigo-600"
  },
  {
    id: 18,
    image: "/images/prestasi/685783369_18351562054209103_4049356909697660208_n..jpg",
    title: "Juara 1 Kaligrafi Kontemporer Nasional",
    category: "Seni & Bahasa",
    year: "2024",
    desc: "Lukisan dekoratif kaligrafi kontemporer bernilai estetika tinggi dengan visualisasi modern yang diakui di festival seni nasional.",
    color: "border-amber-100 bg-amber-50/10 text-amber-600"
  }
];

const categories = ["Semua", "Akademik", "Riset & LKTI", "IT & Robotika", "Keagamaan", "Seni & Bahasa"];

export default function PrestasiPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedAward, setSelectedAward] = useState<typeof prestasiData[0] | null>(null);

  const filteredAwards = activeCategory === "Semua" 
    ? prestasiData 
    : prestasiData.filter(award => award.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans relative overflow-hidden py-24">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      
      {/* Top Ambient Glow */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,202,212,0.12),transparent_60%)] pointer-events-none" />

      {/* Floating Blur Spheres */}
      <div className="absolute top-[15%] left-[-10%] w-[400px] h-[400px] bg-rose-200/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-200/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Floating Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-rose-500 font-bold text-xs uppercase tracking-widest bg-white hover:bg-rose-50 px-5 py-3 rounded-full border border-slate-100 shadow-sm transition-all hover:translate-x-[-2px]"
          >
            <IconArrowLeft size={14} /> Kembali ke Beranda
          </Link>
        </motion.div>
        
        {/* Header Block */}
        <div className="mb-16 text-left space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-black uppercase tracking-[0.25em] text-rose-500 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-flex items-center gap-1.5 shadow-sm"
          >
            <IconSparkles size={11} /> Lembaran Prestasi
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-slate-900"
          >
            Dokumentasi & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-400 to-[#FF8E9E]">
              Jejak Kemenangan.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-500 font-semibold max-w-xl leading-relaxed"
          >
            Catatan autentik dedikasi santri dan guru pembimbing, didukung fasilitas modern komando sains yang berhasil meraih penghargaan keilmuan nasional.
          </motion.p>
        </div>

        {/* Dynamic Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-slate-100"
        >
          <div className="flex items-center gap-2 text-slate-400 shrink-0 mr-2">
            <IconFilter size={16} />
            <span className="text-xs font-black uppercase tracking-wider">Kategori:</span>
          </div>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-slate-900 text-white shadow-md shadow-slate-100" 
                  : "bg-white text-slate-500 hover:text-slate-800 border border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry / Responsive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredAwards.map((award) => (
              <motion.div
                key={award.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedAward(award)}
                className="group relative bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-[380px] text-left"
              >
                {/* Image Wrap */}
                <div className="h-48 w-full overflow-hidden relative bg-slate-100">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-white/90 backdrop-blur-md border border-slate-100 text-slate-800 shadow-sm inline-block">
                    {award.category}
                  </span>
                </div>

                {/* Info Text */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold">
                      <IconCalendar size={12} />
                      <span>Tahun {award.year}</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-rose-500 transition-colors">
                      {award.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors pt-4 border-t border-slate-50">
                    <span>Lihat Dokumentasi</span>
                    <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if filtered results are empty */}
        {filteredAwards.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-slate-400 font-bold">Tidak ada dokumentasi prestasi di kategori ini.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal / Detail View */}
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
              {/* Close Button */}
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-md text-slate-500 hover:text-slate-800 rounded-full flex items-center justify-center border border-slate-100 shadow-sm hover:scale-105 hover:bg-white transition-all z-20"
              >
                <IconX size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Photo Side */}
                <div className="md:col-span-7 bg-slate-100 h-64 sm:h-96 md:h-auto relative min-h-[300px]">
                  <img
                    src={selectedAward.image}
                    alt={selectedAward.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Meta Side */}
                <div className="md:col-span-5 p-8 flex flex-col justify-between text-left h-auto md:min-h-[420px]">
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
                        <IconAward size={14} />
                        <span>Tingkat Nasional</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedAward(null)}
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Tutup Dokumentasi
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
