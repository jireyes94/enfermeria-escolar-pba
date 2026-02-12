// src/app/actualidad/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Share2, Bookmark } from "lucide-react";

interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  fecha: string;
  lectura: string;
  categoria: string;
  esDestacada?: boolean;
  imagenPlaceholder: string;
}

const NOTICIAS_DATA: Noticia[] = [
  {
    id: 1,
    titulo: "Histórico: Se aprueba la reglamentación de la Enfermería Escolar en la Provincia",
    resumen: "Tras meses de gestión, la Comisión celebra la firma del decreto que formaliza las funciones y competencias del rol dentro del sistema educativo bonaerense.",
    fecha: "10 Feb 2026",
    lectura: "5 min",
    categoria: "Institucional",
    esDestacada: true,
    imagenPlaceholder: "bg-blue-600"
  },
  {
    id: 2,
    titulo: "Nuevas pautas para la Campaña de Vacunación Antigripal 2026",
    resumen: "Cronograma y logística para la aplicación de dosis en escuelas primarias de los 135 municipios.",
    fecha: "08 Feb 2026",
    lectura: "3 min",
    categoria: "Salud Pública",
    imagenPlaceholder: "bg-emerald-500"
  },
  {
    id: 3,
    titulo: "Encuentro Regional de Enfermeros Escolares en Bahía Blanca",
    resumen: "Más de 200 profesionales se reunieron para debatir sobre protocolos de bioseguridad y salud mental post-pandemia.",
    fecha: "05 Feb 2026",
    lectura: "4 min",
    categoria: "Eventos",
    imagenPlaceholder: "bg-amber-500"
  },
  {
    id: 4,
    titulo: "Lanzamiento del Programa de Salud Bucal en Jardines de Infantes",
    resumen: "Iniciativa conjunta entre la Comisión y el Ministerio de Salud para fortalecer la prevención desde la primera infancia.",
    fecha: "01 Feb 2026",
    lectura: "2 min",
    categoria: "Comunidad",
    imagenPlaceholder: "bg-purple-500"
  }
];

export default function ActualidadPage() {
  const noticiaPrincipal = NOTICIAS_DATA.find(n => n.esDestacada);
  const noticiasSecundarias = NOTICIAS_DATA.filter(n => !n.esDestacada);

  return (
    <div className="flex flex-col gap-12">
      {/* HEADER */}
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-black text-blue-950 tracking-tight">Actualidad</h1>
        <p className="text-slate-500 mt-2 text-lg font-medium">Noticias, comunicados y novedades de la Comisión.</p>
      </div>

      {/* NOTICIA DESTACADA */}
      {noticiaPrincipal && (
        <section className="group cursor-pointer">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className={`${noticiaPrincipal.imagenPlaceholder} h-64 lg:h-full min-h-[300px] flex items-center justify-center text-white/50 italic`}>
              [Imagen Destacada: {noticiaPrincipal.titulo}]
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase mb-6 w-fit">
                {noticiaPrincipal.categoria}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 group-hover:text-blue-700 transition-colors">
                {noticiaPrincipal.titulo}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {noticiaPrincipal.resumen}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Calendar size={16}/> {noticiaPrincipal.fecha}</span>
                  <span className="flex items-center gap-1"><Clock size={16}/> {noticiaPrincipal.lectura}</span>
                </div>
                <Link href={`/actualidad/${noticiaPrincipal.id}`} className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Leer más <ArrowRight size={18}/>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GRID DE NOTICIAS SECUNDARIAS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticiasSecundarias.map((noticia) => (
          <article key={noticia.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all flex flex-col group">
            <div className={`${noticia.imagenPlaceholder} h-48 flex items-center justify-center text-white/40 text-xs italic`}>
              [Imagen: {noticia.categoria}]
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{noticia.categoria}</span>
                <div className="flex gap-2">
                    <button className="text-slate-400 hover:text-blue-600"><Bookmark size={16}/></button>
                    <button className="text-slate-400 hover:text-blue-600"><Share2 size={16}/></button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                {noticia.titulo}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {noticia.resumen}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50 text-xs font-bold">
                <span className="text-slate-400 uppercase tracking-tighter">{noticia.fecha}</span>
                <Link href={`/actualidad/${noticia.id}`} className="text-blue-600 hover:underline flex items-center gap-1">
                  VER NOTA <ArrowRight size={14}/>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* NEWSLETTER / SUSCRIPCIÓN */}
      <section className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center text-white mt-12">
        <h3 className="text-2xl font-bold mb-4">Reciba las novedades en su email</h3>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">Boletín informativo mensual con todas las gestiones y noticias de la enfermería escolar.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="tu@email.com" 
            className="flex-grow bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/50">
            Suscribirme
          </button>
        </form>
      </section>
    </div>
  );
}