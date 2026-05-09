"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const NewsSection = () => {
  const news = [
    {
      title: "Kemenangan Gemilang di OSN 2024",
      desc: "Siswa SMA Darul Ulum 1 Unggulan memborong 5 medali emas dalam Olimpiade Sains Nasional bidang Astronomi dan Fisika.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      tag: "Prestasi"
    },
    {
      title: "Inovasi AI Lab Terbaru",
      desc: "Peluncuran fasilitas riset kecerdasan buatan untuk mendukung kurikulum pemrograman dan teknologi masa depan.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      tag: "Akademik"
    }
  ];

  return (
    <section className="py-24 px-8 bg-[#FAFAFA] relative z-10 font-sans border-t border-slate-100/50">
      
      {/* Decorative Pastel Glow Background Ornaments */}
      <div className="absolute top-[30%] left-[-5%] w-[350px] h-[350px] bg-rose-100/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-5%] w-[400px] h-[400px] bg-blue-100/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 text-left">
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-rose-500 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-flex items-center gap-1.5 shadow-sm">
              <IconSparkles size={11} /> Berita & Kabar Terkini
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Kabar Terbaru Sekolah
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-xl font-medium">
              Ikuti kabar perkembangan prestasi, riset teknologi terbaru, dan kegiatan-kegiatan di lingkungan SMA Darul Ulum 1.
            </p>
          </div>
          <Link 
            href="/berita" 
            className="group flex items-center gap-2 text-rose-500 font-extrabold uppercase tracking-widest text-xs border border-rose-100/60 bg-white hover:bg-rose-50 px-6 py-3.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            <span>Lihat Semua Berita</span> 
            <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3D-Card Containers updated to use high-fidelity translucent Liquid Glass cardbody style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <CardContainer key={i} className="inter-var w-full">
              <CardBody className="bg-white/60 backdrop-blur-xl relative group/card border border-slate-200/50 hover:border-rose-400/30 w-full h-auto rounded-[2.5rem] p-8 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.03)] transition-all duration-300">
                
                {/* Glossy top edge glass reflection */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                <CardItem
                  translateZ="40"
                  className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="50"
                  className="text-slate-400 text-xs md:text-sm mt-3 font-semibold leading-relaxed"
                >
                  {item.desc}
                </CardItem>
                <CardItem translateZ="80" className="w-full mt-8 overflow-hidden rounded-2xl border border-slate-100 shadow-sm relative">
                  <Image
                    src={item.image}
                    height={600}
                    width={1000}
                    className="h-60 w-full object-cover rounded-2xl group-hover/card:scale-[1.03] transition-transform duration-500"
                    alt="thumbnail"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Glass shimmer overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </CardItem>
                
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={30}
                    className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider bg-rose-50 border border-rose-100/60 text-rose-500 shadow-sm"
                  >
                    {item.tag}
                  </CardItem>
                  <CardItem
                    translateZ={30}
                    as="button"
                    className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-rose-500 text-[10px] font-black uppercase tracking-wider transition-all shadow-sm hover:shadow active:scale-95"
                  >
                    Baca Selengkapnya
                  </CardItem>
                </div>
                
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
