import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Navbar } from "@/components/ui/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SMA Darul Ulum 1 Unggulan | Futuristic Education",
  description: "Official Website of SMA Darul Ulum 1 Unggulan. Experience futuristic education with global standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased bg-slate-950 text-slate-50 selection:bg-amber-500/30 overflow-x-hidden`}
      >
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
