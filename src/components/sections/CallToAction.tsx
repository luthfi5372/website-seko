"use client";

import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="py-40 px-6 md:px-20 text-center bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent blur-3xl" />
      <h2 className="relative z-10 text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
        SHAPE YOUR <br />
        <span className="text-secondary italic">LEGACY.</span>
      </h2>
      <p className="relative z-10 text-slate-400 max-w-xl mx-auto mb-12 text-lg">
        Registration for the 2024 academic year is now open. Begin your journey toward global excellence today.
      </p>
      <Link href="/ppdb" className="relative z-10 inline-block px-12 py-6 bg-accent text-primary rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-accent/20 uppercase tracking-widest">
        Enroll Now
      </Link>
    </section>
  );
};
