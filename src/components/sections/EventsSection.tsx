"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Trophy, Globe, Cpu } from "lucide-react";

export const EventsSection = () => {
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
        <div className="h-full w-full flex items-center justify-center text-white">
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

  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Focus & Events</h2>
      </div>
      <StickyScroll content={stickyContent} />
    </section>
  );
};
