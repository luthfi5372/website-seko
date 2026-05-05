"use client";

import { Users, Zap, Globe, Award } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    { label: "Students", val: "1.2k+", icon: Users },
    { label: "Success Rate", val: "98%", icon: Zap },
    { label: "Global Partners", val: "15+", icon: Globe },
    { label: "Awards", val: "150+", icon: Award }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white border-y border-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center space-y-2">
            <stat.icon className="w-6 h-6 mx-auto text-secondary mb-4" />
            <h3 className="text-4xl font-black tracking-tighter">{stat.val}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
