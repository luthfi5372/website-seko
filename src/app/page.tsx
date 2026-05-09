"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HorizontalScrollCarousel } from "@/components/sections/HorizontalScrollCarousel";
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
