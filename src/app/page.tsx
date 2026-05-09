"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import dynamic from "next/dynamic";

const HorizontalScrollCarousel = dynamic(
  () => import("@/components/sections/HorizontalScrollCarousel").then((mod) => mod.HorizontalScrollCarousel),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 w-full flex items-center justify-center bg-[#FAFAFA] text-slate-400">
        <span className="animate-pulse text-sm font-bold uppercase tracking-widest">Memuat Cabang Lomba...</span>
      </div>
    ),
  }
);
import { FacilityGallery } from "@/components/sections/FacilityGallery";
import { PrestasiHighlights } from "@/components/sections/PrestasiHighlights";
import { EventsSection } from "@/components/sections/EventsSection";
import { ProgramUnggulan } from "@/components/sections/ProgramUnggulan";
import { NewsSection } from "@/components/sections/NewsSection";
import { VisionAndStats } from "@/components/sections/VisionAndStats";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="bg-background text-primary overflow-x-hidden">
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <HorizontalScrollCarousel />
      <FacilityGallery />
      <PrestasiHighlights />
      <EventsSection />
      <ProgramUnggulan />
      <NewsSection />
      <VisionAndStats />
      <CallToAction />
    </main>
  );
}
