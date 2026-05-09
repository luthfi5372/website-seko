import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akademik & Kurikulum",
  description: "Program akademik unggulan yang mengintegrasikan kurikulum nasional modern dengan pedoman spiritual Pondok Pesantren Darul Ulum.",
  openGraph: {
    title: "Akademik SMA Darul Ulum 1 Unggulan",
    description: "Program akademik unggulan yang mengintegrasikan kurikulum nasional modern dengan nilai-nilai kepesantrenan.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&h=630&auto=format&fit=crop", // Classroom/Study image
        width: 1200,
        height: 630,
        alt: "Kegiatan Akademik SMA Darul Ulum 1 Unggulan",
      },
    ],
  },
};

export default function AkademikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
