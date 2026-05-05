import { ArrowLeft, Award, Trophy, Star } from "lucide-react";
import Link from "next/link";

export default function PrestasiPage() {
  const awards = [
    {
      year: "2024",
      title: "Juara Umum Olimpiade Sains Nasional",
      category: "Akademik",
      desc: "Menyabet 5 medali emas dalam ajang OSN tingkat nasional tahun 2024.",
      icon: <Trophy className="w-6 h-6 text-secondary" />
    },
    {
      year: "2023",
      title: "Gold Medal International Robotics Expo",
      category: "Teknologi",
      desc: "Inovasi robot penyelamat berbasis AI yang diakui secara global.",
      icon: <Award className="w-6 h-6 text-accent" />
    },
    {
      year: "2023",
      title: "Best Islamic School of the Year",
      category: "Institusi",
      desc: "Penghargaan atas integrasi pendidikan modern dan nilai-nilai luhur.",
      icon: <Star className="w-6 h-6 text-secondary" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#023047]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary mb-12 font-bold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="mb-24">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4">OUR LEGACY</h1>
          <p className="text-xl text-slate-500 font-medium">Tracing our journey of global recognition and excellence.</p>
        </div>

        <div className="space-y-16">
          {awards.map((award, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-black text-secondary">{award.year}</div>
                <div className="w-px flex-1 bg-slate-200 my-4" />
              </div>
              <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex-1 hover:border-secondary transition-colors">
                <div className="mb-6">{award.icon}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{award.category}</div>
                <h3 className="text-3xl font-black mb-4">{award.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
