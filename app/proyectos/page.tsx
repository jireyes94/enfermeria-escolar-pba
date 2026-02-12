// src/app/proyectos/page.tsx
"use client"; // Necesario para los filtros interactivos

import React, { useState } from "react";
import { Search, Filter, LayoutGrid, CheckCircle2, Clock, Calendar, MapPin } from "lucide-react";

// Definición de tipos para robustez
type Categoria = "Todas" | "Institucional" | "Salud" | "Normativa" | "Comunidad";

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: Categoria;
  estado: "completado" | "en-progreso" | "planificado";
  fecha: string;
  ubicacion: string;
}

const PROYECTOS_DATA: Proyecto[] = [
  {
    id: 1,
    titulo: "Censo Provincial de Enfermería Escolar",
    descripcion: "Relevamiento estadístico integral para diagnosticar la situación laboral y profesional en los 135 municipios.",
    categoria: "Institucional",
    estado: "en-progreso",
    fecha: "2026",
    ubicacion: "Provincia de Bs. As.",
  },
  {
    id: 2,
    titulo: "Protocolo de RCP en Entornos Educativos",
    descripcion: "Estandarización de maniobras y equipamiento necesario para la respuesta ante emergencias cardiorrespiratorias.",
    categoria: "Salud",
    estado: "completado",
    fecha: "2025",
    ubicacion: "La Plata",
  },
  {
    id: 3,
    titulo: "Actualización de la Ley de Ejercicio Profesional",
    descripcion: "Mesa de trabajo para incorporar la figura del enfermero escolar en la normativa provincial vigente.",
    categoria: "Normativa",
    estado: "en-progreso",
    fecha: "2026",
    ubicacion: "Legislatura Provincial",
  },
  {
    id: 4,
    titulo: "Talleres de Prevención de Adicciones",
    descripcion: "Programa de capacitación para enfermeros sobre cómo abordar la prevención secundaria en escuelas secundarias.",
    categoria: "Comunidad",
    estado: "planificado",
    fecha: "2026",
    ubicacion: "Regiones Sanitarias",
  },
  {
    id: 5,
    titulo: "Guía de Bioseguridad Escolar",
    descripcion: "Manual técnico sobre control de infecciones y manejo de residuos patogénicos en gabinetes escolares.",
    categoria: "Salud",
    estado: "completado",
    fecha: "2025",
    ubicacion: "Sede Central",
  }
];

const CATEGORIAS: Categoria[] = ["Todas", "Institucional", "Salud", "Normativa", "Comunidad"];

export default function ProyectosPage() {
  const [filtro, setFiltro] = useState<Categoria>("Todas");

  const proyectosFiltrados = filtro === "Todas" 
    ? PROYECTOS_DATA 
    : PROYECTOS_DATA.filter(p => p.categoria === filtro);

  return (
    <div className="flex flex-col gap-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-950">Nuestros Proyectos</h1>
          <p className="mt-2 text-slate-600">Gestión y seguimiento de iniciativas de la Comisión.</p>
        </div>
        
        {/* FILTROS */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filtro === cat 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID DE PROYECTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectosFiltrados.map((proyecto) => (
          <article 
            key={proyecto.id} 
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all flex flex-col"
          >
            {/* Cabecera de la tarjeta */}
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-1 rounded">
                  {proyecto.categoria}
                </span>
                {proyecto.estado === "completado" ? (
                  <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                    <CheckCircle2 size={14} /> Completado
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                    <Clock size={14} /> {proyecto.estado === "en-progreso" ? "En curso" : "Planificado"}
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                {proyecto.titulo}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {proyecto.descripcion}
              </p>
            </div>

            {/* Footer de la tarjeta */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {proyecto.fecha}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {proyecto.ubicacion}
                </div>
              </div>
              <button className="text-blue-600 font-bold hover:underline">
                Detalles
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* ESTADO VACÍO */}
      {proyectosFiltrados.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <LayoutGrid size={48} className="mx-auto text-slate-300 mb-4" />
          <p className="text-slate-500 font-medium">No se encontraron proyectos en esta categoría.</p>
        </div>
      )}
    </div>
  );
}