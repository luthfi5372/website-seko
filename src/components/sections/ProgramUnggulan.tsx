"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FlaskConical, Microchip, BookOpen, Binary } from "lucide-react";

export const ProgramUnggulan = () => {
  const bentoItems = [
    {
      title: "Smart Laboratory",
      description: "Fasilitas riset berbasis IoT dengan peralatan medis dan sains mutakhir.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100" />,
      icon: <FlaskConical className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "AI & Robotics Hub",
      description: "Pusat pengembangan kecerdasan buatan dan robotika berskala internasional.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100" />,
      icon: <Microchip className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Digital Library",
      description: "Akses tanpa batas ke ribuan jurnal dan e-book dari seluruh dunia.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100" />,
      icon: <BookOpen className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Quantum Coding",
      description: "Kurikulum pemrograman tingkat lanjut berbasis industri teknologi modern.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100" />,
      icon: <Binary className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <section className="py-32 px-6 md:px-20 bg-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">PREMIUM ECOSYSTEM</h2>
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
  );
};
