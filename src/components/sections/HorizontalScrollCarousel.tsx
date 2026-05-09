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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Membungkus progress scroll dengan elastisitas pegas (useSpring) agar super mulus sehalus sutra
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140, // Lebih tangkas menyelaraskan pergerakan dengan Lenis global
    damping: 35,    // Mengerem perlahan tanpa efek memantul lambat yang mengganggu
    mass: 0.3,      // Massa ringan (0.3) agar responsif langsung saat di-scroll maupun di-drag
    restDelta: 0.001
  });
  
  const [scrollRange, setScrollRange] = useState(["0%", "-65%"]);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startScrollY = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Drag hanya dengan klik kiri mouse
    if (e.button !== 0) return;
    
    // Jangan drag jika mengklik tombol "Detail Cabang" atau tautan interaktif
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;

    // SANGAT PENTING: Mencegah browser melakukan penyorotan teks atau penyeretan gambar bawaan
    // yang dapat menyabotase dan membekukan event mousemove kita!
    e.preventDefault();

    setIsDragging(true);
    startX.current = e.clientX;
    startScrollY.current = window.scrollY;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;

    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    startScrollY.current = window.scrollY;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const dx = e.clientX - startX.current;
      // Rasio geser: 1px geser horizontal mouse = 2.5px scroll vertikal halaman
      const scrollDelta = -dx * 2.5; 
      
      window.scrollTo({
        top: startScrollY.current + scrollDelta,
        behavior: "auto"
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      
      const dx = e.touches[0].clientX - startX.current;
      const scrollDelta = -dx * 2.5;
      
      // Mencegah efek mental/pantulan (bounce) bawaan sistem ponsel saat ditarik horizontal
      if (e.cancelable) {
        e.preventDefault();
      }

      window.scrollTo({
        top: startScrollY.current + scrollDelta,
        behavior: "auto"
      });
    };

    const handleDragEnd = () => {
      if (!isDragging) return;
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleDragEnd);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleDragEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    const updateRange = () => {
      if (window.innerWidth < 768) {
        // Mobile starts at pl-8, requiring -60% shift to bring last cards in (4 cards).
        setScrollRange(["0%", "-60%"]);
      } else if (window.innerWidth < 1024) {
        // Tablets starting at pl-16
        setScrollRange(["0%", "-40%"]);
      } else {
        // Large desktops starting at pl-16
        // Shifting left by -20% aligns card 04 perfectly within the viewport on desktop.
        setScrollRange(["0%", "-20%"]);
      }
    };
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  // Animasi horizontal selesai saat progress scroll mencapai 75% (0.75), 
  // menyisakan 25% terakhir sebagai resting phase sehingga semua kartu terlihat penuh di tengah layar.
  const x = useTransform(smoothProgress, [0, 0.75], scrollRange);
  
  const [selectedBranch, setSelectedBranch] = useState<typeof nccBranches[0] | null>(null);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#FAFAFA] border-y border-slate-100 overflow-hidden">
      {/* Luxury Dotted Grid Pattern - Highly Optimized Pure CSS WebGL Alternative */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-60 pointer-events-none select-none" />
      
      {/* Earthy Ambient Glow Backdrops (Pastel Palette Theme) */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#1E3A1E]/3 rounded-full blur-[100px] pointer-events-none select-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#FFCAD4]/12 rounded-full blur-[130px] pointer-events-none select-none animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[40%] right-[30%] w-[350px] h-[350px] bg-[#FFB5A7]/8 rounded-full blur-[110px] pointer-events-none select-none animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        
        {/* Header Section Selaras dengan Identitas DU 1 - Diposisikan di Atas Slide */}
        <div className="w-full max-w-4xl px-8 md:px-16 mb-12 md:mb-16 select-none text-left relative z-10">
          <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-2 block">
            National Creativity Competition 13th
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Ajang Kompetisi Cendekiawan Muda.
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
            Menjadi bagian dari tradisi keilmuan Pondok Pesantren Darul Ulum. Siapkan delegasi terbaik sekolah Anda di 4 cabang kompetisi tingkat nasional tahun ini.
          </p>
        </div>

        {/* Rel Slide Kartu berada di bawah Teks secara leluasa */}
        <div className="relative w-full pl-8 md:pl-16 relative z-10">
          <motion.div 
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ x, cursor: isDragging ? "grabbing" : "grab" }} 
            className="flex gap-6 md:gap-8 select-none active:cursor-grabbing w-fit py-4"
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
