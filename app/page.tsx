// src/app/page.tsx
"use client";

import React from "react";
import Link from "next/link";
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
      
      {/* 1. HERO DE CONVERSIÓN: IMPACTO INMEDIATO */}
      <section className="relative pt-12 md:pt-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-6">
            <Star size={14} fill="currentColor" />
            Lanzamiento Ciclo Académico 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
            Liderá el cambio sanitario en las <span className="text-blue-600">instituciones educativas.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed mb-10">
            Formación estratégica para enfermeros que buscan transformar la salud escolar en la Provincia de Buenos Aires y el país.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/capacitaciones" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 group"
            >
              Ver Formación Profesional 2026
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/quienes-somos" 
              className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-8 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center"
            >
              Conocer el Campus
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS / TRUST BAR: AUTORIDAD RÁPIDA */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-slate-100 py-12">
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h3 className="font-black text-slate-900 uppercase text-sm tracking-tight">Respaldo Profesional</h3>
            <p className="text-slate-500 text-sm">Contenidos basados en normativa legal vigente.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
            <GraduationCap size={28} />
          </div>
          <div>
            <h3 className="font-black text-slate-900 uppercase text-sm tracking-tight">Título Privado</h3>
            <p className="text-slate-500 text-sm">Certificación de especialización por el Campus.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
            <Users size={28} />
          </div>
          <div>
            <h3 className="font-black text-slate-900 uppercase text-sm tracking-tight">Comunidad Activa</h3>
            <p className="text-slate-500 text-sm">Red de enfermeros escolares de toda la provincia.</p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE PRODUCTO: EL "GANCHO" HACIA EL CURSO */}
      <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
        {/* Decoración sutil */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-20" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-400 font-black uppercase tracking-widest text-sm">Nuestra Formación Estrella</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 leading-tight">
              Especialización en Enfermería y Salud Escolar
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              No es un curso asistencial. Es un programa de gestión diseñado para que puedas implementar gabinetes, diseñar protocolos y liderar equipos en escuelas.
            </p>
            <ul className="space-y-4 mb-10">
              {["6 meses de cursada híbrida", "18 módulos técnicos exhaustivos", "Trabajo final de implementación real"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-slate-200">
                  <div className="bg-blue-500 rounded-full p-1"><ChevronRight size={14} className="text-white"/></div>
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              href="/capacitaciones" 
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-black hover:bg-blue-50 transition-colors"
            >
              Explorar Programa Completo
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
                <div className="pb-6 border-b border-white/10">
                    <p className="text-blue-400 font-black text-xs uppercase tracking-widest mb-2">Próxima Cohorte</p>
                    <p className="text-2xl font-bold italic">Lunes 6 de Abril, 2026</p>
                </div>
                <div className="space-y-4">
                    <p className="text-slate-400 text-sm">Esta formación está diseñada para responder a las nuevas problemáticas escolares: salud mental, ESI e inclusión social.</p>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Inscripciones abiertas con beneficio anticipado
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CIERRE: LLAMADO A LA ACCIÓN FINAL */}
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-black text-slate-900">¿Listo para dar el siguiente paso en tu carrera profesional?</h2>
        <p className="text-slate-500 text-lg">
          Unite al Campus Profesional y formá parte de la elite de enfermería que está redefiniendo el cuidado en el ámbito educativo argentino.
        </p>
        <Link 
          href="/capacitaciones" 
          className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-lg"
        >
          Inscribirme ahora
        </Link>
      </section>

    </div>
  );
}