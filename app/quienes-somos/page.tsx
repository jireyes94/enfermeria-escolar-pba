// src/app/quienes-somos/page.tsx
import React from "react";
import { Metadata } from "next";
import { Target, Eye, ShieldCheck, Award, Users2, HeartPulse } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description: "Conoce la misión, visión y objetivos de la Comisión de Enfermería Escolar de la Provincia de Buenos Aires.",
};

// Componente para los items de Objetivos
const ObjectiveItem = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      
      {/* HEADER DE SECCIÓN */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6">
          Institucional
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Somos un órgano técnico y consultivo dedicado a jerarquizar el rol de la enfermería 
          en el entorno educativo de la {SITE_CONFIG.province}.
        </p>
      </section>

      {/* MISIÓN Y VISIÓN (LAYOUT ALTERNO) */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Target size={14} /> Nuestra Misión
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Impulsando el cuidado integral</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Nuestra misión es establecer estándares de excelencia en la atención de enfermería dentro de las escuelas, 
            promoviendo la salud y la prevención de enfermedades en la comunidad educativa bonaerense.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Buscamos fortalecer el vínculo entre el sistema de salud y el sistema educativo a través de intervenciones 
            profesionales basadas en evidencia científica.
          </p>
        </div>
        <div className="order-1 md:order-2 bg-slate-200 aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Aquí iría una imagen de profesionales trabajando o reunión de comisión */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium italic">
            [Imagen Institucional: Misión]
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-blue-900 aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Imagen representativa del futuro de la enfermería escolar */}
          <div className="absolute inset-0 flex items-center justify-center text-blue-300 font-medium italic">
            [Imagen Institucional: Visión]
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Eye size={14} /> Nuestra Visión
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Liderazgo en salud escolar</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Proyectamos ser el referente técnico principal en enfermería escolar a nivel nacional, 
            logrando que cada institución educativa cuente con un profesional de enfermería capacitado 
            y reconocido por su rol vital.
          </p>
          <ul className="space-y-3">
            {['Innovación constante', 'Reconocimiento profesional', 'Salud como derecho universal'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                <ShieldCheck size={18} className="text-emerald-500" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OBJETIVOS ESTRATÉGICOS */}
      <section className="bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Objetivos de la Comisión</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ObjectiveItem 
              icon={Award}
              title="Jerarquización"
              description="Promover el reconocimiento profesional y la actualización de las competencias del enfermero en el ámbito escolar."
            />
            <ObjectiveItem 
              icon={Users2}
              title="Articulación"
              description="Facilitar la comunicación entre ministerios, instituciones educativas y centros de salud de la provincia."
            />
            <ObjectiveItem 
              icon={HeartPulse}
              title="Protocolización"
              description="Elaborar guías de actuación y protocolos unificados para el manejo de urgencias y prevención en las escuelas."
            />
            <ObjectiveItem 
              icon={ShieldCheck}
              title="Asesoría Técnica"
              description="Brindar apoyo técnico y legal sobre las responsabilidades y alcances del ejercicio profesional en la escuela."
            />
            <ObjectiveItem 
              icon={Target}
              title="Capacitación Continua"
              description="Identificar necesidades formativas y proponer programas de actualización basados en las demandas actuales."
            />
            <ObjectiveItem 
              icon={Eye}
              title="Vigilancia Epidemiológica"
              description="Contribuir al monitoreo de la salud escolar para la detección temprana de problemáticas comunitarias."
            />
          </div>
        </div>
      </section>

    </div>
  );
}