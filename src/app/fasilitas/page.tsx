"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FlaskConical, Library, Microchip, Trophy, Wifi, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { NAV_ITEMS } from "@/lib/constants";

export default function FasilitasPage() {
  const dockItems = NAV_ITEMS.map(item => ({
    ...item,
    icon: <item.icon className="w-4 h-4" />
  }));

  const facilities = [
    {
      title: "Smart Laboratory",
      icon: <FlaskConical className="w-8 h-8 text-primary" />,
      desc: "Integrated labs with IoT sensors and VR simulations for immersive STEM learning.",
      img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Digital Library 24/7",
      icon: <Library className="w-8 h-8 text-accent" />,
      desc: "24/7 access to millions of international journals and e-books via our digital ecosystem.",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop"
    },
    {
      title: "Robotics & AI Center",
      icon: <Microchip className="w-8 h-8 text-primary" />,
      desc: "Advanced robotics hub featuring the latest DJI, Arduino, and Raspberry Pi technology.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Sport & Wellness Arena",
      icon: <Trophy className="w-8 h-8 text-accent" />,
      desc: "Olympic-standard athletic facilities including aquatic centers and professional gyms.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "High-Speed Campus Wifi",
      icon: <Wifi className="w-8 h-8 text-primary" />,
      desc: "Ultra-fast 1Gbps fiber-optic network covering the entire campus infrastructure.",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Eco-Friendly Cafe",
      icon: <Coffee className="w-8 h-8 text-accent" />,
      desc: "Comfortable breakout spaces with healthy dining and integrated cashless systems.",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
    }
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <section className="relative h-[50vh] overflow-hidden">
        <WavyBackground speed="slow" containerClassName="h-full">
          <h1 className="text-5xl md:text-7xl font-black text-primary text-center px-6">
            WORLD-CLASS <span className="text-secondary">FACILITIES</span>
          </h1>
        </WavyBackground>
      </section>

      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <LiquidGlassCard className="h-full group hover:border-secondary/50 transition-colors">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-primary/5 shadow-sm">
                  <img src={fac.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-lg">
                    {fac.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-primary mb-3">{fac.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-serif">
                  {fac.desc}
                </p>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-10 inset-x-0 z-[100] flex justify-center">
        <FloatingDock items={dockItems} />
      </div>
    </main>
  );
}
