// src/app/quienes-somos/page.tsx
"use client";

import React from "react";
import { 
  Users2, 
  Handshake, 
  MessagesSquare, 
  Sparkles, 
  ArrowUpRight,
  HeartHandshake
} from "lucide-react";
import Link from "next/link";

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      
      {/* 1. HERO: ENFOQUE EN EL VÍNCULO */}
      <section className="max-w-4xl mx-auto text-center pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-8">
          <HeartHandshake size={14} />
          Más que una institución, una comunidad
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
          Acompañamos tu crecimiento <br />
          <span className="text-blue-600 font-serif italic font-medium">paso a paso.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          En el Campus, la distancia entre educador y estudiante desaparece para dar lugar a una construcción conjunta del conocimiento.
        </p>
      </section>

      {/* 2. EL VALOR DE LA CERCANÍA: DISEÑO DE TARJETAS ORGÁNICAS */}
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-colors" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Un Campus de puertas abiertas.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Creemos en un modelo donde el docente es un mentor y el estudiante un protagonista activo. Nuestra formación híbrida está diseñada para que nunca te sientas solo en el proceso.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-4 text-blue-400 font-bold">
            <MessagesSquare size={24} />
            <span>Soporte y tutoría constante</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-[3rem] p-10 md:p-16 border border-blue-100 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Users2 className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Tu experiencia es nuestro motor.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Valoramos el conocimiento previo de cada enfermero. En el Campus, fomentamos el intercambio de realidades territoriales para enriquecer la formación técnica.
            </p>
          </div>
          <Link href="/capacitaciones" className="mt-8 inline-flex items-center gap-2 font-black text-blue-600 uppercase tracking-widest text-sm hover:gap-4 transition-all">
            Conocé nuestra comunidad <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      {/* 3. COMPROMISO EDUCATIVO (TEXTO DEL REQUERIMIENTO) */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="border-t border-slate-100 pt-20 grid lg:grid-cols-3 gap-12">
            <div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Cercanía Real</h3>
                <p className="text-slate-500 leading-relaxed">
                    No somos una plataforma masiva. Mantenemos cupos limitados para garantizar que el diálogo entre educador y estudiante sea fluido y personalizado.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Conocimiento Aplicado</h3>
                <p className="text-slate-500 leading-relaxed">
                    Cada módulo está pensado desde la realidad del aula. Traducimos la teoría compleja en herramientas simples para tu día a día profesional.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Crecimiento Conjunto</h3>
                <p className="text-slate-500 leading-relaxed">
                    Al ingresar al Campus, pasás a formar parte de una red de colegas que comparten el mismo objetivo: liderar la salud escolar en Argentina.
                </p>
            </div>
        </div>
      </section>

      {/* 4. CIERRE: IMPACTO HUMANO */}
      <section className="bg-white border-2 border-slate-900 rounded-[3rem] p-10 md:p-20 mx-4 max-w-6xl md:mx-auto relative overflow-hidden text-center">
        <div className="absolute top-10 left-10 opacity-10">
            <Sparkles size={120} className="text-blue-600" />
        </div>
        <div className="relative z-10">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Hacia un nuevo paradigma</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                Juntos, redefinimos <br /> el cuidado escolar.
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
                Nuestra meta es que al finalizar, no solo tengas un certificado, sino la seguridad de pertenecer a una elite profesional que sabe cómo transformar su entorno.
            </p>
            <div className="flex justify-center">
                <Link 
                    href="/capacitaciones" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-100 flex items-center gap-3"
                >
                    Iniciá tu camino hoy
                    <Handshake size={24} />
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
}