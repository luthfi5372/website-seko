import { Home, BookOpen, Award, Users, Phone, Globe, Zap, Image as ImageIcon } from "lucide-react";

export const NAV_ITEMS = [
  { title: "Beranda", icon: Home, href: "/" },
  { title: "Pendaftaran", icon: Zap, href: "/ppdb" },
  { title: "Akademik", icon: BookOpen, href: "/akademik" },
  { title: "Prestasi", icon: Award, href: "/prestasi" },
  { title: "Galeri", icon: ImageIcon, href: "/galeri" },
  { title: "Fasilitas", icon: Globe, href: "/fasilitas" },
  { title: "Kontak", icon: Phone, href: "/kontak" },
];
