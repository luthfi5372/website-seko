import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestasi & Penghargaan",
  description: "Deretan pencapaian gemilang santri SMA Darul Ulum 1 Unggulan di tingkat nasional maupun internasional dalam bidang akademik dan non-akademik.",
  openGraph: {
    title: "Prestasi SMA Darul Ulum 1 Unggulan",
    description: "Deretan pencapaian gemilang santri SMA Darul Ulum 1 Unggulan di tingkat nasional maupun internasional.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&h=630&auto=format&fit=crop", // Trophy/Success image
        width: 1200,
        height: 630,
        alt: "Prestasi Santri SMA Darul Ulum 1 Unggulan",
      },
    ],
  },
};

export default function PrestasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
