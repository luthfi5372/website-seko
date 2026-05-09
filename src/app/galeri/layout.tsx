import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri & Arsip",
  description: "Eksplorasi momen-momen bersejarah, prestasi menginspirasi, dan dokumentasi fasilitas berkelas di SMA Darul Ulum 1 Unggulan.",
  openGraph: {
    title: "Galeri SMA Darul Ulum 1 Unggulan",
    description: "Eksplorasi momen-momen bersejarah dan fasilitas berkelas di SMA Darul Ulum 1 Unggulan.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&h=630&auto=format&fit=crop", // Gambar contoh momen kelulusan/acara akademik
        width: 1200,
        height: 630,
        alt: "Galeri SMA Darul Ulum 1 Unggulan",
      },
    ],
  },
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
