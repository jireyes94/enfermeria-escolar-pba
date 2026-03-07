// src/app/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  ChevronRight,
  Star
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      
      {/* 1. HERO DE CONVERSIÓN CON BACKGROUND DE ALTO IMPACTO */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        {/* Imagen de Stock de fondo (Sugerencia: Una enfermera profesional en entorno educativo) */}
        <div className="absolute inset-0 z-0">
          {/* Overlay de degradado para asegurar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        {/* Marca de agua del Logo gigante de fondo */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none select-none">
          <Image
            src="/sin-fondo.png"
            alt="Marca de agua Campus"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-6">
              <Star size={14} fill="currentColor" />
              Lanzamiento Ciclo Académico 2026
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
              Liderá el cambio sanitario en las <span className="text-blue-600">instituciones educativas.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-500 max-w-3xl leading-relaxed mb-10 font-medium">
              Formación estratégica para enfermeros que buscan transformar la salud escolar en la Provincia de Buenos Aires y el país.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/capacitaciones" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 group"
              >
                Ver Formación Profesional 2026
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link 
                href="/quienes-somos" 
                className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-10 py-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center"
              >
                Conocer el Campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS / TRUST BAR: AUTORIDAD RÁPIDA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-slate-100 py-16">
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shadow-sm border border-blue-100">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-1">Respaldo Profesional</h3>
              <p className="text-slate-500 text-sm leading-relaxed text-">Contenidos basados en normativa legal vigente.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shadow-sm border border-blue-100">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-1">Título Privado</h3>
              <p className="text-slate-500 text-sm leading-relaxed text-">Certificación de especialización por el Campus.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shadow-sm border border-blue-100">
              <Users size={32} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-1">Comunidad Activa</h3>
              <p className="text-slate-500 text-sm leading-relaxed text-">Red de enfermeros escolares de toda la provincia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE PRODUCTO: EL "GANCHO" HACIA EL CURSO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-slate-900 rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Decoración sutil */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-20" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs">Nuestra Formación Estrella</span>
              <h2 className="text-4xl md:text-6xl font-black mt-6 mb-8 leading-tight tracking-tighter">
                Especialización en Enfermería y Salud Escolar
              </h2>
              <p className="text-slate-400 text-xl mb-10 leading-relaxed font-medium">
                No es un curso asistencial. Es un programa de gestión diseñado para que puedas implementar gabinetes, diseñar protocolos y liderar equipos en escuelas.
              </p>
              <ul className="space-y-6 mb-12 text-">
                {["6 meses de cursada híbrida", "18 módulos técnicos exhaustivos", "Trabajo final de implementación real"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold text-slate-200 text-lg">
                    <div className="bg-blue-600 rounded-full p-1.5 shadow-lg shadow-blue-500/20"><ChevronRight size={18} className="text-white"/></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/capacitaciones" 
                className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl"
              >
                Explorar Programa Completo
                <ArrowRight size={24} />
              </Link>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 shadow-2xl">
              <div className="space-y-8">
                  <div className="pb-8 border-b border-white/10 text-">
                      <p className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-3">Próxima Cohorte</p>
                      <p className="text-4xl font-black italic tracking-tighter">Lunes 6 de Abril, 2026</p>
                  </div>
                  <div className="space-y-6 text-">
                      <p className="text-slate-300 text-lg leading-relaxed">Esta formación está diseñada para responder a las nuevas problemáticas escolares: salud mental, ESI e inclusión social.</p>
                      <div className="flex items-center gap-4 bg-emerald-500/10 text-emerald-400 p-4 rounded-2xl border border-emerald-500/20 font-black uppercase text-xs tracking-widest">
                          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                          Inscripciones abiertas con beneficio anticipado
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CIERRE: LLAMADO A LA ACCIÓN FINAL */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-12 py-20">
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">¿Listo para dar el siguiente paso en tu carrera?</h2>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
          Unite al Campus Profesional y formá parte de la elite de enfermería que está redefiniendo el cuidado en el ámbito educativo argentino.
        </p>
        <Link 
          href="/capacitaciones" 
          className="inline-block bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-2xl hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 hover:shadow-blue-200 hover:-translate-y-1"
        >
          Inscribirme ahora
        </Link>
      </section>

    </div>
  );
}