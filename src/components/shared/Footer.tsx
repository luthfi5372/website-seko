import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-20 bg-white px-6 md:px-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="font-black text-2xl tracking-tighter uppercase text-primary">SMADU 1 UNGGULAN</h4>
          <p className="text-slate-400 text-sm mt-2">Jl. Rejoso, Peterongan, Jombang, Jawa Timur.</p>
        </div>
        <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link href="/akademik" className="hover:text-secondary transition-colors">Academic</Link>
          <Link href="/prestasi" className="hover:text-secondary transition-colors">Awards</Link>
          <Link href="/kontak" className="hover:text-secondary transition-colors">Contact</Link>
        </div>
        <p className="text-slate-300 text-xs uppercase tracking-widest">© 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};
