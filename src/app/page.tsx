import { LinkPreview } from "@/components/ui/link-preview";
import { ArrowRight, ShieldCheck, Zap, Users, Globe, BookOpen, Award } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F8FAFC] text-[#023047] selection:bg-[#FFB703]/20">
      {/* Hero Section - Clean & Fast */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Enrollment Open 2024/2025
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              FUTURE-READY <br />
              <span className="text-secondary">EXCELLENCE.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg font-medium leading-relaxed">
              Empowering the next generation through a unique blend of high-tech innovation and spiritual foundation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/ppdb" className="px-8 py-4 bg-[#023047] text-white rounded-xl font-bold hover:bg-[#219EBC] transition-colors shadow-lg shadow-navy/10 flex items-center gap-2 group">
                Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/fasilitas" className="px-8 py-4 bg-white border border-slate-200 text-[#023047] rounded-xl font-bold hover:bg-slate-50 transition-colors">
                Explore Campus
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1523050335102-c8847976b128?q=80&w=2070&auto=format&fit=crop" 
                alt="Campus Excellence" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <Award className="w-6 h-6" />
                </div>
                <span className="font-bold">Accredited A+</span>
              </div>
              <p className="text-xs text-slate-500">Recognized as the leading Islamic institution for digital innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats - No animations for speed */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Students", val: "1.2k+", icon: Users },
            { label: "Success Rate", val: "98%", icon: Zap },
            { label: "Global Partners", val: "15+", icon: Globe },
            { label: "Awards", val: "150+", icon: Award }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <stat.icon className="w-6 h-6 mx-auto text-secondary mb-4" />
              <h3 className="text-4xl font-black tracking-tighter">{stat.val}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section - Clean Cards */}
      <section className="py-32 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">OUR ECOSYSTEM</h2>
            <p className="text-slate-500 max-w-xl font-medium">Built on a foundation of faith, driven by modern technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Smart Campus", desc: "Integrated IoT infrastructure supporting high-performance learning.", icon: Zap },
              { title: "Spiritual Core", desc: "Developing strong character through deep Islamic values.", icon: ShieldCheck },
              { title: "Digital Library", desc: "Instant access to global research and educational resources.", icon: BookOpen }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-secondary transition-colors group cursor-default">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Simple & Strong */}
      <section className="py-40 px-6 md:px-20 text-center bg-[#023047] text-white">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          SHAPE YOUR <br />
          <span className="text-secondary italic">LEGACY.</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
          Registration for the 2024 academic year is now open. Begin your journey toward global excellence today.
        </p>
        <Link href="/ppdb" className="inline-block px-12 py-6 bg-accent text-[#023047] rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-accent/20 uppercase tracking-widest">
          Enroll Now
        </Link>
      </section>

      {/* Footer - Minimalist */}
      <footer className="py-20 bg-white px-6 md:px-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-black text-2xl tracking-tighter">SMADU 1 UNGGULAN</h4>
            <p className="text-slate-400 text-sm mt-2">Jl. Rejoso, Peterongan, Jombang, Jawa Timur.</p>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <Link href="/akademik" className="hover:text-secondary">Academic</Link>
            <Link href="/prestasi" className="hover:text-secondary">Awards</Link>
            <Link href="/kontak" className="hover:text-secondary">Contact</Link>
          </div>
          <p className="text-slate-300 text-xs uppercase tracking-widest">© 2024 All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}
