// src/components/layout/Navbar.tsx (Simplificado para Conversión)

import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo con el nuevo nombre del Campus */}
          <Link href="/" className="flex flex-col">
            <span className="font-black text-slate-900 leading-none text-lg">{SITE_CONFIG.name}</span>
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">{SITE_CONFIG.province}</span>
          </Link>

          {/* Menú filtrado solo con lo importante */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* CTA Directo en el Navbar para reforzar la conversión */}
            <Link
              href="/capacitaciones"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-black hover:bg-blue-600 transition-all"
            >
              Inscribirme 2026
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}