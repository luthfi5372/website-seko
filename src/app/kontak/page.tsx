"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { Phone, Globe, Zap, Mail, MapPin, Layout, Smartphone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { NAV_ITEMS } from "@/lib/constants";

export default function KontakPage() {
  const dockItems = NAV_ITEMS.map(item => ({
    ...item,
    icon: <item.icon className="w-4 h-4" />
  }));

  return (
    <main className="relative min-h-screen bg-background flex flex-col items-center py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter">HUBUNGI <span className="text-secondary">KAMI</span></h1>
        <p className="text-slate-600 font-serif italic text-lg max-w-2xl mx-auto">
          Terhubung dengan pusat informasi SMA Darul Ulum 1 Unggulan untuk konsultasi pendaftaran dan informasi akademik lainnya.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full">
        {/* Contact Info */}
        <div className="space-y-8">
          <LiquidGlassCard className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 text-primary shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Alamat Kampus</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-serif">
                  Kompleks Pondok Pesantren Darul Ulum, Rejoso, Peterongan, Jombang, Jawa Timur 61481
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="p-4 bg-secondary/10 rounded-2xl border border-secondary/20 text-primary shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Telepon / WhatsApp</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-serif">
                  +62 (321) 866166 | +62 812-3456-7890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 text-primary shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-serif">
                  info@smadu1-unggul.sch.id
                </p>
              </div>
            </div>
          </LiquidGlassCard>

          <div className="flex gap-4">
            {[Layout, Smartphone, Send].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 bg-white border border-primary/10 rounded-2xl text-primary hover:bg-slate-50 transition-colors shadow-sm"
                href="#"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Form Placeholder */}
        <LiquidGlassCard>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-widest opacity-60">Nama Lengkap</label>
                <input type="text" className="w-full bg-slate-50 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary/50 text-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-widest opacity-60">Email</label>
                <input type="email" className="w-full bg-slate-50 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary/50 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest opacity-60">Pesan</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary/50 text-primary"></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-white font-black rounded-xl hover:bg-primary-light transition-all uppercase tracking-widest shadow-lg shadow-primary/20">
              Kirim Pesan
            </button>
          </form>
        </LiquidGlassCard>
      </div>

      <div className="fixed bottom-10 inset-x-0 z-[100] flex justify-center">
        <FloatingDock items={dockItems} />
      </div>
    </main>
  );
}
