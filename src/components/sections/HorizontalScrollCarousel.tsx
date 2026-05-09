"use client";
import { motion, useTransform, useScroll, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  IconX, 
  IconTrophy, 
  IconBook, 
  IconUser, 
  IconActivity,
  IconChevronRight
} from "@tabler/icons-react";

// Data diselaraskan untuk 5 Cabang Lomba NCC 13th SMA DU 1
const nccBranches = [
  { 
    id: 1, 
    title: "Olimpiade MIPA", 
    color: "bg-blue-50", 
    text: "text-blue-600", 
    desc: "Menguji ketajaman logika Matematika dan analisis Sains murni untuk mencetak ilmuwan muda berkarakter.",
    details: {
      syarat: "Siswa SMP/MTs Sederajat tingkat Nasional.",
      materi: "Matematika Analitik, Fisika Mekanika & Optik, Biologi Sel, Kimia Dasar.",
      metode: "Sistem CBT (Computer Based Test) dalam 3 Tahap: Penyisihan, Semi Final, dan Final Praktikum.",
      hadiah: "Trophy Bergilir BPPT/BRIN + Dana Pembinaan Jutaan Rupiah + Sertifikat Kemenristek."
    }
  },
  { 
    id: 2, 
    title: "Social Science", 
    color: "bg-emerald-50", 
    text: "text-emerald-600", 
    desc: "Ajang pemecahan masalah dinamika sosial, ekonomi, dan geografi masyarakat modern.",
    details: {
      syarat: "Siswa SMP/MTs Sederajat tingkat Nasional.",
      materi: "Sosiologi Kontemporer, Geografi Fisik & Sosial, Ekonomi Makro-Mikro Dasar.",
      metode: "Studi Kasus Kontekstual, Debat Solutif Isu Regional, dan Ujian Tulis Analitis.",
      hadiah: "Trophy Kehormatan Gubernur Jawa Timur + Piagam Penghargaan + Beasiswa Pendidikan."
    }
  },
  { 
    id: 3, 
    title: "LKTI Nasional", 
    color: "bg-slate-100", 
    text: "text-slate-600", 
    desc: "Lomba Karya Tulis Ilmiah tingkat nasional. Wadah inovasi riset terapan berkelanjutan.",
    details: {
      syarat: "Kelompok aktif beranggotakan maks 3 Siswa SMP/MTs Sederajat.",
      materi: "Sains Terapan, Inovasi Energi Terbarukan, Teknologi Ramah Lingkungan.",
      metode: "Seleksi Abstrak Gratis, Pengiriman Full Paper, dan Presentasi Final di hadapan Dewan Riset Terpadu.",
      hadiah: "Trophy Utama Kepala BPPT (BRIN) + Plakat Kehormatan + Medali Emas/Perak/Perunggu + Uang Pembinaan."
    }
  },
  { 
    id: 4, 
    title: "English Festival", 
    color: "bg-indigo-50", 
    text: "text-indigo-600", 
    desc: "Kompetisi Speech, Storytelling, dan Debate untuk mengasah kapabilitas diplomasi global santri.",
    details: {
      syarat: "Siswa SMP/MTs Sederajat tingkat Nasional.",
      materi: "Speech (Pidato Inspiratif), Storytelling (Folklor Nusantara), British Parliamentary Debate.",
      metode: "Penilaian langsung di panggung kehormatan oleh penutur asli (Native Speaker) & Akademisi Bahasa.",
      hadiah: "Trophy Kemenag RI + Paket Kursus Bahasa Inggris Eksklusif + Medali Penghargaan."
    }
  },
];

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Membungkus progress scroll dengan elastisitas pegas (useSpring) agar super mulus
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140, 
    damping: 35,
    mass: 0.3,
    restDelta: 0.001
  });
  
  const [scrollRange, setScrollRange] = useState(["0%", "-20%"]);
  
  useEffect(() => {
    const updateRange = () => {
      if (window.innerWidth < 1024) {
        setScrollRange(["0%", "-40%"]); // Tablet
      } else {
        setScrollRange(["0%", "-20%"]); // Desktop
      }
    };
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const x = useTransform(smoothProgress, [0, 0.75], scrollRange);
  const [selectedBranch, setSelectedBranch] = useState<typeof nccBranches[0] | null>(null);

  return (
    <section className="relative bg-[#FAFAFA] border-y border-slate-100 overflow-hidden">
      {/* Luxury Dotted Grid Pattern - Highly Optimized Pure CSS WebGL Alternative */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-60 pointer-events-none select-none" />
      
      {/* Earthy Ambient Glow Backdrops (Pastel Palette Theme) */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#1E3A1E]/3 rounded-full blur-[100px] pointer-events-none select-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#FFCAD4]/12 rounded-full blur-[130px] pointer-events-none select-none animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[40%] right-[30%] w-[350px] h-[350px] bg-[#FFB5A7]/8 rounded-full blur-[110px] pointer-events-none select-none animate-pulse" style={{ animationDuration: '12s' }} />

      {/* 💻 VERSI DESKTOP & TABLET (Menggunakan Framer Motion Smooth Horizontal Scroll) */}
      <div ref={targetRef} className="hidden md:block h-[300vh] relative z-10">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          
          {/* Header Section */}
          <div className="w-full max-w-4xl px-16 mb-16 select-none text-left relative z-10">
            <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-2 block">
              National Creativity Competition 13th
            </span>
            <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Ajang Kompetisi Cendekiawan Muda.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl font-medium">
              Menjadi bagian dari tradisi keilmuan Pondok Pesantren Darul Ulum. Siapkan delegasi terbaik sekolah Anda di 4 cabang kompetisi tingkat nasional tahun ini.
            </p>
          </div>

          {/* Rel Slide Kartu Desktop */}
          <div className="relative w-full pl-16 relative z-10">
            <motion.div 
              style={{ x }} 
              className="flex gap-8 select-none w-fit py-4"
            >
              {nccBranches.map((branch) => (
                <Card 
                  key={branch.id} 
                  card={branch} 
                  onSelect={() => setSelectedBranch(branch)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 📱 VERSI MOBILE (Menggunakan Native CSS Snap Scroll - Super Ringan!) */}
      <div className="block md:hidden relative z-10 px-6 py-20 overflow-hidden">
        <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-2 block">
          National Creativity Competition 13th
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
          Ajang Kompetisi<br/>Cendekiawan Muda.
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
          Siapkan delegasi terbaik sekolah Anda di 4 cabang kompetisi tingkat nasional tahun ini.
        </p>
        
        {/* Kontainer dengan overflow-x-auto dan snap-x */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 hide-scrollbar">
          {nccBranches.map((branch) => (
            <div key={branch.id} className="snap-center shrink-0 py-2">
              <Card 
                card={branch} 
                onSelect={() => setSelectedBranch(branch)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Beautiful Glassmorphic Detail Modal */}
      <AnimatePresence>
        {selectedBranch && (
          <Modal 
            branch={selectedBranch} 
            onClose={() => setSelectedBranch(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

interface CardProps {
  card: typeof nccBranches[0];
  onSelect: () => void;
}

const Card = ({ card, onSelect }: CardProps) => {
  return (
    <motion.div
      onClick={onSelect}
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ type: "spring", stiffness: 80, damping: 22 }}
      whileHover={{ 
        y: -10, 
        scale: 1.025,
        boxShadow: "0 25px 50px -15px rgba(0,0,0,0.05)",
        transition: { type: "spring", stiffness: 250, damping: 25 }
      }}
      className="group relative h-[380px] w-[280px] md:h-[420px] md:w-[320px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] cursor-pointer hover:border-slate-300 transition-colors duration-300 select-none flex flex-col justify-between"
    >
      {/* Decorative Hover Glow Inside Card */}
      <div className="absolute -right-16 -bottom-16 w-36 h-36 rounded-full bg-gradient-to-br from-slate-100 to-slate-200/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className={cn("mb-6 flex h-14 w-14 items-center justify-center rounded-2xl", card.color, card.text)}>
            <span className="text-xl font-black">0{card.id}</span>
          </div>
          
          <h3 className="mb-3 text-2xl font-bold text-slate-900 tracking-tight">
            {card.title}
          </h3>
          
          <p className="text-slate-500 text-sm leading-relaxed">
            {card.desc}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
          <span>Detail Cabang</span>
          <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
        </div>
      </div>
    </motion.div>
  );
};

interface ModalProps {
  branch: typeof nccBranches[0];
  onClose: () => void;
}

const Modal = ({ branch, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/45 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative bg-white/95 backdrop-blur-xl border border-slate-100 w-full max-w-2xl rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col z-10"
      >
        {/* Glow backdrop decorative */}
        <div className={cn("absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none", branch.color)} />

        {/* Header */}
        <div className="p-8 pb-4 flex items-start justify-between relative">
          <div className="flex items-center gap-4">
            <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", branch.color, branch.text)}>
              <span className="text-lg font-black">0{branch.id}</span>
            </div>
            <div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">CABANG KOMPETISI</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{branch.title}</h3>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-50 text-slate-400 hover:text-slate-600 rounded-full border border-slate-100 transition-colors"
          >
            <IconX size={16} />
          </button>
        </div>

        {/* Content body */}
        <div className="px-8 py-4 space-y-6 max-h-[60vh] overflow-y-auto relative text-left">
          <p className="text-slate-500 text-sm leading-relaxed border-b border-slate-100 pb-4">
            {branch.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {/* Syarat Peserta */}
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <IconUser size={16} className="text-slate-500" />
                <span className="text-xs font-black uppercase tracking-wider">Syarat Peserta</span>
              </div>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">{branch.details.syarat}</p>
            </div>

            {/* Hadiah / Penghargaan */}
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <IconTrophy size={16} className="text-amber-500" />
                <span className="text-xs font-black uppercase tracking-wider">Hadiah & Apresiasi</span>
              </div>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">{branch.details.hadiah}</p>
            </div>

            {/* Cakupan Materi */}
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <IconBook size={16} className="text-slate-500" />
                <span className="text-xs font-black uppercase tracking-wider">Materi Kompetisi</span>
              </div>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">{branch.details.materi}</p>
            </div>

            {/* Metode Seleksi */}
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <IconActivity size={16} className="text-slate-500" />
                <span className="text-xs font-black uppercase tracking-wider">Alur & Metode</span>
              </div>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">{branch.details.metode}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">SMA DARUL ULUM 1 PETERONGAN</span>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200/85 text-slate-600 rounded-full font-bold text-[11px] uppercase tracking-wider transition-colors"
            >
              Tutup
            </button>
            <a 
              href="/register"
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-extrabold text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md"
            >
              <span>Daftar Cabang</span>
              <IconChevronRight size={12} />
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
