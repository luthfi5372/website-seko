import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak & Lokasi",
  description: "Hubungi SMA Darul Ulum 1 Unggulan Jombang untuk informasi pendaftaran (PPDB), kemitraan, atau kunjungan sekolah.",
  openGraph: {
    title: "Kontak SMA Darul Ulum 1 Unggulan",
    description: "Hubungi kami untuk informasi pendaftaran (PPDB), kemitraan, atau kunjungan ke lingkungan pondok pesantren.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&h=630&auto=format&fit=crop", // Campus/Building contact
        width: 1200,
        height: 630,
        alt: "Gedung SMA Darul Ulum 1 Unggulan",
      },
    ],
  },
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
