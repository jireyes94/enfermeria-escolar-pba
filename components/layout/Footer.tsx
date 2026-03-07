// src/components/layout/Footer.tsx
import React from 'react';
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-black text-slate-900 leading-none text-lg uppercase tracking-tighter">
                Campus Profesional
              </span>
              <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
                Enfermería y Salud Escolar
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Formación estratégica y liderazgo sanitario para la transformación de la comunidad educativa argentina.
            </p>
          </div>

          {/* Columna 2: EL GANCHO DE WHATSAPP (REDISEÑADO) */}
          <div className="space-y-6">
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em]">Asesoría Académica</h4>
              <div className="space-y-4">
              {/* Opción Email 
              <a 
                href={`mailto:${SITE_CONFIG.contactEmail}`} 
                className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <div className="bg-white p-2 rounded-lg border border-slate-200 group-hover:border-blue-200 shadow-sm">
                  <Mail size={16} className="text-blue-500" />
                </div>
                <span className="text-sm font-bold tracking-tight">{SITE_CONFIG.contactEmail}</span>
              </a> 
              */}

              {/* GANCHO VISUAL WHATSAPP */}
              <a 
                href="https://wa.me/542215522315" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-2 bg-white p-4 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <MessageCircle size={20} fill="currentColor" className="opacity-20" />
                    <span className="text-xs font-black uppercase tracking-widest">Chat en vivo</span>
                  </div>
                </div>
                <div>
                  <p className="text-slate-900 font-black text-base">¿Tenés dudas sobre el programa?</p>
                  <p className="text-slate-500 text-xs font-medium">Hablá directamente con un asesor académico.</p>
                </div>
                {/* Indicador de "En línea" */}
                <div className="absolute top-4 right-4 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
              </a>
            </div>
          </div>

          {/* Columna 3: Información Legal */}
          <div className="space-y-4">
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em]">Respaldo Académico</h4>
            <div className="flex items-start gap-3 bg-blue-100/30 p-4 rounded-2xl border border-blue-100">
              <ShieldCheck size={20} className="text-blue-600 shrink-0" />
              <p className="text-[11px] text-blue-800 leading-tight font-medium">
                Contenidos y certificaciones de carácter privado profesional orientados a la especialización técnica bajo normativa vigente.
              </p>
            </div>
          </div>

        </div>

        {/* Línea final */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Campus Profesional | Titular: Natalia Soledad Spallino
          </p>
          <div className="flex gap-6">
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Liderazgo · Gestión · Innovación</span>
          </div>
        </div>
      </div>
    </footer>
  );
}