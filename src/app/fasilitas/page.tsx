import { FlaskConical, Library, Microchip, Trophy, Wifi, Coffee, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FasilitasPage() {
  const facilities = [
    {
      title: "Smart Laboratory",
      icon: <FlaskConical className="w-8 h-8 text-secondary" />,
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
      icon: <Microchip className="w-8 h-8 text-secondary" />,
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
      icon: <Wifi className="w-8 h-8 text-secondary" />,
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
    <main className="min-h-screen bg-white text-[#023047]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary mb-12 font-bold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">CAMPUS FACILITIES</h1>
          <p className="text-xl text-slate-500 font-medium">World-class infrastructure for a world-class education.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {facilities.map((fac, idx) => (
            <div key={idx} className="group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-100 relative shadow-sm">
                <Image 
                  src={fac.img} 
                  alt={fac.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 p-3 bg-white rounded-xl shadow-lg">
                  {fac.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-3">{fac.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
