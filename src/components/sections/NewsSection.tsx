"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const NewsSection = () => {
  const news = [
    {
      title: "Kemenangan Gemilang di OSN 2024",
      desc: "Siswa SMA DU 1 memborong 5 medali emas dalam Olimpiade Sains Nasional bidang Astronomi dan Fisika.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      tag: "Prestasi"
    },
    {
      title: "Inovasi AI Lab Terbaru",
      desc: "Peluncuran fasilitas riset kecerdasan buatan untuk mendukung kurikulum teknologi masa depan.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      tag: "Akademik"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">LATEST CHRONICLES</h2>
            <p className="text-slate-500 font-medium italic">Tracing our journey through innovation and awards.</p>
          </div>
          <Link href="/berita" className="group flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm">
            View All News <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <CardContainer key={i} className="inter-var w-full">
              <CardBody className="bg-slate-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-3xl p-8 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-black text-primary dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-medium"
                >
                  {item.desc}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-8">
                  <img
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-2xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-12">
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest bg-secondary/10 text-secondary"
                  >
                    {item.tag}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-6 py-2 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-widest"
                  >
                    Read More
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
