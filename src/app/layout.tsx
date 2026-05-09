import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | SMA Darul Ulum 1 Unggulan",
    default: "SMA Darul Ulum 1 Unggulan | Academic Excellence Profile",
  },
  description: "Portal digital resmi SMA Darul Ulum 1 Unggulan Jombang. Menggabungkan pendidikan akademik bertaraf internasional dengan nilai-nilai spiritual kepesantrenan.",
  keywords: ["SMA Darul Ulum 1", "Pondok Pesantren Darul Ulum", "Jombang", "Sekolah Unggulan", "Pendidikan Berkarakter", "NCC 13th"],
  authors: [{ name: "SMA Darul Ulum 1 Unggulan" }],
  openGraph: {
    title: "SMA Darul Ulum 1 Unggulan",
    description: "Portal digital resmi SMA Darul Ulum 1 Unggulan Jombang. Menggabungkan pendidikan akademik bertaraf internasional dengan nilai-nilai spiritual kepesantrenan.",
    url: "https://website-seko.vercel.app",
    siteName: "SMADU 1 Unggulan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523050335102-c8847976b128?q=80&w=1200&h=630&auto=format&fit=crop", // Ukuran ideal OG Image (1200x630)
        width: 1200,
        height: 630,
        alt: "Gedung SMA Darul Ulum 1 Unggulan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMA Darul Ulum 1 Unggulan",
    description: "Portal digital resmi SMA Darul Ulum 1 Unggulan Jombang.",
    images: ["https://images.unsplash.com/photo-1523050335102-c8847976b128?q=80&w=1200&h=630&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${plusJakartaSans.variable} ${playfair.variable} antialiased bg-background-light text-slate-800 selection:bg-secondary-soft/30 overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
