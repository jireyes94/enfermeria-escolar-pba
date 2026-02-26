// src/components/layout/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Capacitaciones", href: "/capacitaciones" },
    { label: "Quiénes Somos", href: "/quienes-somos" },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex flex-col group" onClick={() => setIsOpen(false)}>
            <span className="font-black text-slate-900 leading-none text-lg tracking-tighter group-hover:text-blue-600 transition-colors">
              {SITE_CONFIG.name}
            </span>
            <span className="text-blue-600 font-bold text-[10px] tracking-[0.2em] uppercase">
              {SITE_CONFIG.province}
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/capacitaciones"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-black hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 flex items-center gap-2"
            >
              Inscribirme 2026
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-slate-900 border-b border-slate-50 pb-4"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/capacitaciones"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white p-5 rounded-2xl text-center font-black text-xl flex items-center justify-center gap-3"
          >
            Inscribirme 2026
            <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </nav>
  );
}