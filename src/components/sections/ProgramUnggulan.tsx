"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { StaggeredGrid } from "@/components/ui/staggered-grid";
import { 
  IconFlask, 
  IconCpu, 
  IconBook, 
  IconCode, 
  IconSparkles 
} from "@tabler/icons-react";

export const ProgramUnggulan = () => {
  // Beautiful custom headers with premium soft-SaaS glowing gradients and glass elements
  const bentoItems = [
    {
      title: "Smart Laboratory",
      description: "Fasilitas riset sains dan IoT tingkat lanjut yang dilengkapi teknologi mutakhir.",
      header: (
        <div className="flex flex-1 w-full h-[150px] min-h-[6rem] rounded-2xl bg-gradient-to-tr from-[#FFB5A7]/20 to-[#FFCAD4]/30 border border-rose-100/50 relative overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm">
            <IconFlask size={28} className="text-rose-500" />
          </div>
          <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-rose-400/20 blur-sm animate-pulse" />
        </div>
      ),
      icon: <IconFlask size={18} className="text-rose-500" />,
    },
    {
      title: "AI & Robotics Hub",
      description: "Pusat rekayasa robotika terintegrasi dengan kecerdasan buatan.",
      header: (
        <div className="w-full h-[150px] min-h-[6rem] rounded-2xl overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-500">
          <StaggeredGrid />
        </div>
      ),
      icon: <IconCpu size={18} className="text-blue-500" />,
    },
    {
      title: "Digital Library",
      description: "Akses jurnal ilmiah global, e-book, dan pustaka digital tak terbatas.",
      header: (
        <div className="flex flex-1 w-full h-[150px] min-h-[6rem] rounded-2xl bg-gradient-to-tr from-indigo-100/30 to-purple-100/30 border border-indigo-100/50 relative overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm">
            <IconBook size={28} className="text-indigo-500" />
          </div>
          <div className="absolute top-4 left-4 w-5 h-5 rounded-full bg-indigo-300/20 blur-sm" />
        </div>
      ),
      icon: <IconBook size={18} className="text-indigo-500" />,
    },
    {
      title: "Quantum Coding",
      description: "Kurikulum pengembangan perangkat lunak tingkat tinggi yang tersertifikasi industri.",
      header: (
        <div className="flex flex-1 w-full h-[150px] min-h-[6rem] rounded-2xl bg-gradient-to-tr from-sky-100/30 to-emerald-100/30 border border-emerald-100/50 relative overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm">
            <IconCode size={28} className="text-emerald-500" />
          </div>
          <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-emerald-400/20 blur-sm" />
        </div>
      ),
      icon: <IconCode size={18} className="text-emerald-500" />,
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#FAFAFA] relative z-10 font-sans border-t border-slate-100/50">
      
      {/* Soft Background Blurs */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] bg-rose-200/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-indigo-200/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center space-y-16">
        
        {/* Title and Category Header Badge */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-500 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 inline-flex items-center gap-1.5 shadow-sm">
            <IconSparkles size={11} /> Ekosistem Unggulan
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Eksplorasi Tanpa Batas
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto font-medium">
            Program penunjang terpadu yang dirancang khusus untuk memperlengkapi lulusan dengan kemampuan teknologi mutakhir.
          </p>
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
  );
};
