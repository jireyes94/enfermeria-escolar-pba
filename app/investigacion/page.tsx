// src/app/investigacion/page.tsx
"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  Search, 
  BookOpen, 
  ExternalLink, 
  FileSpreadsheet, 
  FileCheck2,
  Filter
} from "lucide-react";

// Tipos de investigación para el repositorio
type DocType = "Todos" | "Protocolos" | "Artículos" | "Estadísticas" | "Publicaciones";

interface Documento {
  id: number;
  titulo: string;
  autores: string;
  resumen: string;
  fecha: string;
  tipo: DocType;
  formato: "PDF" | "DOCX" | "XLSX";
  tamaño: string;
}

const DOCUMENTOS_DATA: Documento[] = [
  {
    id: 1,
    titulo: "Prevalencia de Enfermedades Crónicas no Transmisibles en Edad Escolar",
    autores: "Dr. García, Lic. Martinez - Comisión Técnica",
    resumen: "Estudio descriptivo transversal realizado en instituciones públicas de la Región Sanitaria XI durante el ciclo lectivo 2025.",
    fecha: "Octubre 2025",
    tipo: "Artículos",
    formato: "PDF",
    tamaño: "2.4 MB"
  },
  {
    id: 2,
    titulo: "Guía de Actuación: Manejo de Crisis Asmáticas en el Aula",
    autores: "Subcomisión de Protocolos",
    resumen: "Documento marco que establece los pasos legales y asistenciales para el personal de enfermería ante crisis agudas.",
    fecha: "Febrero 2026",
    tipo: "Protocolos",
    formato: "PDF",
    tamaño: "1.8 MB"
  },
  {
    id: 3,
    titulo: "Relevamiento de Gabinetes de Enfermería: Infraestructura y Equipamiento",
    autores: "Observatorio de Enfermería Escolar",
    resumen: "Análisis estadístico sobre el estado edilicio y los insumos disponibles en las escuelas de la provincia.",
    fecha: "Diciembre 2025",
    tipo: "Estadísticas",
    formato: "XLSX",
    tamaño: "540 KB"
  },
  {
    id: 4,
    titulo: "La Enfermería Escolar como Eje de la Educación Sexual Integral",
    autores: "Mg. Soraire, Lic. Lopez",
    resumen: "Ensayo sobre el rol del profesional de enfermería en la implementación de talleres de ESI y consejería.",
    fecha: "Septiembre 2025",
    tipo: "Publicaciones",
    formato: "PDF",
    tamaño: "3.1 MB"
  }
];

const CATEGORIAS: DocType[] = ["Todos", "Protocolos", "Artículos", "Estadísticas", "Publicaciones"];

export default function InvestigacionPage() {
  const [filtro, setFiltro] = useState<DocType>("Todos");
  const [busqueda, setBusqueda] = useState("");

  const docsFiltrados = DOCUMENTOS_DATA.filter(doc => {
    const matchesFiltro = filtro === "Todos" || doc.tipo === filtro;
    const matchesBusqueda = doc.titulo.toLowerCase().includes(busqueda.toLowerCase()) || 
                           doc.autores.toLowerCase().includes(busqueda.toLowerCase());
    return matchesFiltro && matchesBusqueda;
  });

  return (
    <div className="flex flex-col gap-10">
      {/* CABECERA Y BUSCADOR */}
      <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Repositorio de Investigación</h1>
          <p className="text-blue-100 text-lg mb-8">
            Acceda a la base de datos científica y técnica de la Comisión. Documentación avalada para el ejercicio profesional.
          </p>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Buscar por título, autor o palabra clave..."
              className="w-full bg-white rounded-xl py-4 pl-12 pr-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all shadow-lg"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>
        <BookOpen className="absolute right-[-20px] bottom-[-20px] text-blue-800 opacity-50 w-64 h-64 -rotate-12" />
      </div>

      {/* FILTROS Y CONTENIDO */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Barra Lateral de Filtros */}
        <aside className="lg:w-64 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
            <Filter size={18} />
            <span>Categorías</span>
          </div>
          <div className="flex flex-wrap lg:flex-col gap-2">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  filtro === cat 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-100" 
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {cat}
                {filtro === cat && <FileCheck2 size={16} />}
              </button>
            ))}
          </div>
        </aside>

        {/* Listado de Documentos */}
        <div className="flex-grow flex flex-col gap-4">
          {docsFiltrados.length > 0 ? (
            docsFiltrados.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all shadow-sm hover:shadow-md group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icono de Archivo */}
                  <div className={`hidden md:flex w-16 h-16 rounded-xl items-center justify-center shrink-0 ${
                    doc.formato === 'XLSX' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {doc.formato === 'XLSX' ? <FileSpreadsheet size={32} /> : <FileText size={32} />}
                  </div>

                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {doc.tipo}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{doc.fecha}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {doc.titulo}
                    </h3>
                    
                    <p className="text-sm text-slate-500 font-medium mb-3 italic">
                      {doc.autores}
                    </p>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {doc.resumen}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-50">
                      <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                        <Download size={16} /> Descargar {doc.formato}
                      </button>
                      <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm font-bold transition-colors">
                        <ExternalLink size={16} /> Ver Online
                      </button>
                      <span className="ml-auto text-xs text-slate-400">Tamaño: {doc.tamaño}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl py-20 text-center">
              <p className="text-slate-400 font-medium">No se encontraron documentos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}