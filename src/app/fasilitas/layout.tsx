import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fasilitas Kampus",
  description: "Jelajahi infrastruktur kelas dunia di SMA Darul Ulum 1 Unggulan. Dilengkapi Smart Laboratory, Digital Library, hingga Robotics & AI Center.",
  openGraph: {
    title: "Fasilitas Kampus - SMA Darul Ulum 1 Unggulan",
    description: "Jelajahi infrastruktur kelas dunia di SMA Darul Ulum 1 Unggulan. Dilengkapi Smart Laboratory, Digital Library, hingga Robotics & AI Center.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1200&h=630&auto=format&fit=crop", // Smart lab image
        width: 1200,
        height: 630,
        alt: "Fasilitas Lab SMA Darul Ulum 1 Unggulan",
      },
    ],
  },
};

export default function FasilitasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
