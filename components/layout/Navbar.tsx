// src/components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Formación", href: "/capacitaciones" },
    { label: "Nosotros", href: "/quienes-somos" },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-white/70 backdrop-blur-xl border-b border-slate-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)]" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* BRANDING: EQUILIBRIO Y AIRE */}
          <Link href="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image 
                src="/sin-fondo.png" 
                alt="Logo Campus"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col border-l border-slate-200 pl-4">
              <span className="font-bold text-slate-900 leading-none text-sm md:text-base tracking-[0.05em] uppercase">
                {SITE_CONFIG.name}
              </span>
              <span className="text-slate-400 font-medium text-[9px] md:text-[10px] tracking-[0.25em] uppercase mt-1">
                Salud & Educación
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV: REFINAMIENTO TIPOGRÁFICO */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[10px] font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-[0.2em] group/link"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover/link:w-full" />
                </Link>
              ))}
            </div>
            
            {/* WHATSAPP MODESTO PERO PREMIUM */}
            <Link
              href="https://wa.me/542215522315"
              target="_blank"
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-all duration-300 shadow-sm group"
            >
              <MessageCircle size={16} className="text-emerald-400 group-hover:text-white transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Consultas</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE (Círculo sutil) */}
          <button 
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 text-slate-900 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU: ELEGANCIA MINIMALISTA */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-white z-[120] p-8 flex flex-col justify-center animate-in fade-in zoom-in-95 duration-300">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-slate-50"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col gap-8">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-tighter"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100">
            <Link
              href="https://wa.me/542215522315"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-6 bg-slate-900 text-white rounded-[2rem]"
            >
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Contacto Directo</span>
                <span className="text-xl font-bold italic">Asesoría vía WhatsApp</span>
              </div>
              <MessageCircle size={32} className="text-emerald-400" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}