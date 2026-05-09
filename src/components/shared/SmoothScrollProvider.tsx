"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inisialisasi Lenis Smooth Scroll dengan parameter inersia premium
    const lenis = new Lenis({
      duration: 1.3, // Kecepatan luncuran inersia (memberikan efek lambat yang sangat sinematik)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Kurva eksponensial Apple-style
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0, // Responsivitas roda mouse fisik
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    // Daftarkan ke Loop requestAnimationFrame untuk performa GPU 60fps/120fps penuh
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Menjamin ketika pindah halaman Next.js, scroll otomatis di-reset ke paling atas
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
};
