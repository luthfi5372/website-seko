"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ProgramUnggulan } from "@/components/sections/ProgramUnggulan";
import { StatsSection } from "@/components/sections/StatsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="bg-background text-primary overflow-x-hidden">
      <HeroSection />
      <EventsSection />
      <ProgramUnggulan />
      <NewsSection />
      <StatsSection />
      <CallToAction />
    </main>
  );
}
