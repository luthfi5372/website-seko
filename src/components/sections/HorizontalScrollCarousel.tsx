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
  { 
    id: 5, 
    title: "IT & Robotics", 
    color: "bg-orange-50", 
    text: "text-orange-600", 
    desc: "Cabang bergengsi perpaduan rekayasa perangkat lunak dan otomatisasi robot cerdas.",
    details: {
      syarat: "Kelompok beranggotakan maks 2 Siswa SMP/MTs Sederajat.",
      materi: "Line Follower Robot (Analog/Micro), Internet of Things (IoT) App, Mobile App Coding.",
      metode: "Sesi Live Coding Demo (3 Jam) & Duel Kecepatan Robot di lintasan sirkuit tanding.",
      hadiah: "Trophy Eksklusif Rektor ITS + Kit Sensor & Mikroprosesor IoT + Tabungan Juara."
    }
  },
];

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Membungkus progress scroll dengan elastisitas pegas (useSpring) agar super mulus sehalus mentega
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // Mengatur seberapa responsif tarikannya
    damping: 30,    // Mengatur agar rem motorik halus dan tidak memantul berlebih
    restDelta: 0.001
  });
  
  const [scrollRange, setScrollRange] = useState(["0%", "-65%"]);

  useEffect(() => {
    const updateRange = () => {
      if (window.innerWidth < 768) {
        // Mobile starts at ml-[100vw], requiring -115% shift to bring card 05 completely in.
        setScrollRange(["0%", "-115%"]);
      } else if (window.innerWidth < 1024) {
        // Tablets starting at ml-[40vw]
        setScrollRange(["0%", "-85%"]);
      } else {
        // Large desktops starting at ml-[40vw]
        setScrollRange(["0%", "-75%"]);
      }
    };
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const x = useTransform(smoothProgress, [0, 1], scrollRange);
  
  const [selectedBranch, setSelectedBranch] = useState<typeof nccBranches[0] | null>(null);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#FAFAFA] border-y border-slate-100">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Header Section Selaras dengan Identitas DU 1 */}
        <div className="absolute top-20 left-8 md:left-16 z-10 w-full max-w-md">
          <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-2 block">
            National Creativity Competition 13th
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
            Ajang Kompetisi <br/> Cendekiawan Muda.
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Menjadi bagian dari tradisi keilmuan Pondok Pesantren Darul Ulum. Siapkan delegasi terbaik sekolah Anda di 5 cabang kompetisi tingkat nasional tahun ini.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-8 md:px-16 mt-48 md:mt-24 ml-[100vw] md:ml-[40vw]">
          {nccBranches.map((branch) => (
            <Card 
              key={branch.id} 
              card={branch} 
              onSelect={() => setSelectedBranch(branch)}
            />
          ))}
        </motion.div>

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
    <div
      onClick={onSelect}
      className={cn(
        "group relative h-[380px] w-[280px] md:h-[420px] md:w-[320px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 cursor-pointer",
      )}
    >
      <div className={cn("mb-6 flex h-14 w-14 items-center justify-center rounded-2xl", card.color, card.text)}>
        <span className="text-xl font-black">0{card.id}</span>
      </div>
      
      <h3 className="mb-3 text-2xl font-bold text-slate-900 tracking-tight">
        {card.title}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed">
        {card.desc}
      </p>

      <div className="absolute bottom-8 left-8 flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
        <span>Detail Cabang</span>
        <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
      </div>
    </div>
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
