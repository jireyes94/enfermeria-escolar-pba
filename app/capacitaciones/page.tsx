// src/app/capacitaciones/page.tsx
"use client";

import React, { useState } from "react";
// Importaciones corregidas incluyendo Check y ShieldCheck
import { 
  Plus, 
  Minus, 
  Clock, 
  Users, 
  FileCheck, 
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Check,
  ShieldCheck,
  Calendar
} from "lucide-react";

const PROGRAMA_COMPLETO = [
  { id: 1, duracion: "1 semana", titulo: "Fundamentos de la Enfermería Escolar y Construcción del Rol Profesional", ejes: ["Paradigmas contemporáneos del cuidado aplicados en el ámbito escolar.", "Teorías de Enfermería y su adaptación en el contexto educativo.", "La escuela como sistema social complejo.", "Modelos internacionales de enfermería escolar.", "Determinantes sociales de la salud en infancia y adolescencia.", "Autoridad profesional y construcción del liderazgo dentro de la escuela.", "Funciones dentro de la institución educativa.", "Integración al Proyecto Educativo Institucional.", "Posicionamiento estratégico frente al equipo directivo."] },
  { id: 2, duracion: "1 semana", titulo: "Marco Jurídico, Bioética y Responsabilidad Profesional", ejes: ["Legislación educativa y sanitaria argentina aplicada al ámbito escolar.", "Convención sobre los Derechos del Niño en el contexto educativo.", "Responsabilidad civil y penal del profesional dentro de la escuela.", "Deber de cuidado institucional.", "Confidencialidad y autonomía progresiva en población escolar.", "Protocolos institucionales y respaldo legal.", "Gestión documental y trazabilidad de intervenciones en la escuela.", "Circuitos de actuación ante vulneración de derechos."] },
  { id: 3, duracion: "2 semanas", titulo: "Gestión Integral del Cuidado según Etapas Evolutivas", ejes: ["Evaluación integral del niño, niña y adolescente.", "Seguimiento longitudinal del desarrollo.", "Problemáticas prevalentes en cada nivel educativo.", "Gestión de patologías crónicas dentro de la escuela.", "Salud mental y neurodesarrollo en contexto escolar.", "Conductas de riesgo y detección temprana en el aula.", "Diseño del Plan Individual de Cuidado Escolar.", "Registro, indicadores y monitoreo continuo."] },
  { id: 4, duracion: "2 semanas", titulo: "Promoción de la Salud y Diseño de Programas Preventivos", ejes: ["Promoción de la salud como política institucional.", "Alfabetización sanitaria en población escolar.", "Diseño de programas preventivos adaptados al nivel educativo.", "Educación para la salud con metodologías activas.", "Planificación anual de campañas escolares.", "Evaluación de impacto de intervenciones.", "Articulación con familias desde la escuela.", "Construcción de cultura institucional del cuidado."] },
  { id: 5, duracion: "2 semanas", titulo: "Salud Mental, Clima Institucional y Cultura del Cuidado", ejes: ["Desarrollo socioemocional en contexto escolar.", "Regulación emocional y habilidades sociales.", "Prevención del bullying dentro de la escuela.", "Detección de señales de aislamiento o sufrimiento psíquico.", "Intervenciones psicoeducativas desde enfermería escolar.", "Redes de apoyo institucional.", "Cultura del cuidado como eje transversal.", "Rol del enfermero/a como referente protector."] },
  { id: 6, duracion: "2 semanas", titulo: "Vigilancia Epidemiológica y Control de Enfermedades", ejes: ["Epidemiología aplicada al entorno escolar.", "Gestión de brotes dentro de la institución educativa.", "Calendario de vacunación y seguimiento escolar.", "Protocolos de bioseguridad institucional.", "Comunicación estratégica ante situaciones sanitarias.", "Registro epidemiológico escolar.", "Planificación preventiva anual."] },
  { id: 7, duracion: "1 semana", titulo: "Gestión del Riesgo y Seguridad Institucional", ejes: ["Identificación y evaluación de riesgos físicos y psicosociales.", "Elaboración de mapas de riesgo escolar.", "Planes de contingencia y simulacro.", "Cultura organizacional preventiva."] },
  { id: 8, duracion: "2 semanas", titulo: "Urgencias y Emergencias con Enfoque de Gestión", ejes: ["Emergencias y urgencias en el contexto educativo.", "Protocolos avanzados.", "Coordinación institucional.", "Gestión del evento crítico.", "Evaluación post evento.", "RCP y uso de DEA dentro de la escuela."] },
  { id: 9, duracion: "2 semanas", titulo: "Inclusión, Diversidad y Acompañamiento Integral", ejes: ["Modelo social de la discapacidad aplicado a la escuela.", "Adecuaciones razonables dentro de la institución.", "Plan Individual de Acompañamiento Escolar.", "Trabajo interdisciplinario en la escuela.", "Inclusión, perspectiva de género y derechos.", "Eliminación de barreras actitudinales."] },
  { id: 10, duracion: "2 semanas", titulo: "Problemáticas Emergentes en la Escuela", ejes: ["Nutrición y hábitos saludables.", "Educación Sexual Integral en el ámbito escolar.", "Prevención de consumos problemáticos.", "Trastornos alimentarios en adolescentes.", "Autolesiones y conductas de riesgo.", "Intervenciones institucionales coordinadas.", "Protocolos de actuación y trabajo con familias."] },
  { id: 11, duracion: "1 semana", titulo: "Educación Sexual Integral y Salud Reproductiva", ejes: ["Marco legal ESI.", "Abordaje integral.", "Prevención ITS.", "Perspectiva de género.", "Intervención interdisciplinaria."] },
  { id: 12, duracion: "2 semanas", titulo: "Prevención de Consumos Problemáticos", ejes: ["Neurobiología de la adolescencia.", "Factores protectores.", "Programas preventivos escolares.", "Articulación comunitaria."] },
  { id: 13, duracion: "2 semanas", titulo: "Sistemas de Información y Evaluación de Calidad", ejes: ["Diseño de indicadores sanitarios escolares.", "Auditoría interna del cuidado.", "Gestión de datos sanitarios escolares.", "Informes estratégicos para equipos directivos.", "Evaluación anual del programa.", "Mejora continua basada en evidencia.", "Planificación estratégica institucional."] },
  { id: 14, duracion: "2 semanas", titulo: "Gestión Estratégica del Gabinete de Enfermería Escolar", ejes: ["Diseño y organización del gabinete.", "Gestión de insumos y recursos.", "Planificación anual del servicio.", "Gestión presupuestaria básica.", "Liderazgo organizacional dentro de la institución.", "Presentación de resultados a la dirección.", "Sostenibilidad y posicionamiento del servicio.", "Marketing profesional ético en el ámbito educativo."] }
];

export default function CapacitacionesPage() {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  return (
    <div className="flex flex-col gap-20 pb-24">
      
      {/* SECCIÓN 1: IDENTIDAD Y HERO */}
      <section className="bg-white border-b border-slate-200 pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Campus Profesional</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-6 leading-tight">
            Formación Profesional en <br className="hidden md:block"/> Enfermería y Salud Escolar
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium italic mb-12">
            "Liderazgo, Gestión del Cuidado y Transformación en la Comunidad Educativa"
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-y border-slate-100 py-10">
            <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Duración</p>
                <p className="text-lg font-bold text-slate-800">6 Meses</p>
            </div>
            <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Carga Horaria</p>
                <p className="text-lg font-bold text-slate-800">120 Horas</p>
            </div>
            <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Modalidad</p>
                <p className="text-lg font-bold text-slate-800">Híbrida</p>
            </div>
            <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Inicio</p>
                <p className="text-lg font-bold text-slate-800">6 de Abril</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: LA PROPUESTA DE VALOR */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
        <div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">La Enfermería Escolar no es asistencia. Es liderazgo sanitario.</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>La realidad educativa exige profesionales capaces de intervenir en salud mental, inclusión, emergencias y diseño de políticas de cuidado.</p>
                <p className="font-bold text-slate-900">Esta formación te prepara para crear el rol, proponer el servicio y liderar proyectos estratégicos.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3">
                {["Diseñar gabinetes de enfermería escolar", "Elaborar protocolos institucionales completos", "Liderar equipos interdisciplinarios", "Gestionar emergencias con enfoque organizacional"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <ChevronRight className="text-blue-600" size={16}/> {item}
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-blue-900 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Diferencial Profesional</h3>
            <ul className="space-y-6">
                <li className="flex gap-4">
                    <div className="bg-blue-600/30 p-2 rounded-lg h-fit"><FileCheck size={20}/></div>
                    <div>
                        <p className="font-bold">Marco Jurídico Argentino Aplicado</p>
                        <p className="text-sm text-blue-200/70">Legislación educativa y sanitaria vigente para el respaldo legal del profesional.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="bg-blue-600/30 p-2 rounded-lg h-fit"><GraduationCap size={20}/></div>
                    <div>
                        <p className="font-bold">Trabajo Final con Proyecto Real</p>
                        <p className="text-sm text-blue-200/70">Diseño completo de un gabinete e implementación estratégica.</p>
                    </div>
                </li>
            </ul>
        </div>
      </section>

      {/* SECCIÓN 3: PROGRAMA ACADÉMICO DETALLADO */}
      <section className="bg-slate-50 py-24 -mx-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Programa Académico</h2>
            <p className="text-slate-500 font-medium">Cronograma detallado de formación especializada</p>
          </div>

          <div className="space-y-3">
            {PROGRAMA_COMPLETO.map((modulo) => (
              <div 
                key={modulo.id} 
                className={`bg-white rounded-xl border transition-all duration-200 ${activeTab === modulo.id ? 'border-blue-500 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <button 
                  onClick={() => setActiveTab(activeTab === modulo.id ? null : modulo.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-blue-600 font-black text-sm whitespace-nowrap">
                      MÓDULO {modulo.id}
                    </span>
                    <h3 className={`text-base md:text-lg font-bold transition-colors ${activeTab === modulo.id ? 'text-blue-900' : 'text-slate-700'}`}>
                      {modulo.titulo}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <span className="hidden md:block text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                      {modulo.duracion}
                    </span>
                    {activeTab === modulo.id ? <Minus size={18} className="text-blue-600"/> : <Plus size={18} className="text-slate-400"/>}
                  </div>
                </button>

                {activeTab === modulo.id && (
                  <div className="px-6 pb-8 pt-0 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="mb-4 flex items-center gap-2 md:hidden">
                        <Clock size={12} className="text-slate-400"/>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duración: {modulo.duracion}</span>
                    </div>
                    <div className="h-px bg-slate-50 mb-5" />
                    <ul className="grid grid-cols-1 gap-y-3">
                      {modulo.ejes.map((eje, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 shrink-0" />
                          {eje}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CIERRE Y CONVERSIÓN (REDISEÑADA) */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="relative group">
          
          <div className="relative bg-slate-900 rounded-[3rem] p-8 md:p-20 overflow-hidden border border-slate-800 shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight max-w-3xl">
                Convertite en referente en un <span className="text-blue-400">campo emergente</span>
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
                La tendencia internacional muestra que la Enfermería Escolar es clave. Quienes se formen hoy serán los profesionales preparados cuando la demanda se consolide en Argentina.
              </p>

              <div className="w-full max-w-2xl bg-gradient-to-b from-slate-800/50 to-slate-800/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-inner">
                <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
                  Inversión Profesional
                </div>
                
                <div className="flex flex-col items-center gap-2 mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl md:text-3xl font-light text-slate-500">$</span>
                    <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">75.000</span>
                  </div>
                  <p className="text-blue-400 font-bold text-lg uppercase tracking-tight">6 Cuotas Fijas de Abril a Septiembre</p>
                  <div className="mt-4 flex items-center gap-2 text-emerald-400 font-bold bg-emerald-400/10 px-4 py-2 rounded-lg border border-emerald-400/20 text-sm">
                    <Check size={16} /> 30% OFF Inscripción Anticipada
                  </div>
                </div>

                <button className="w-full group/btn relative bg-blue-600 hover:bg-blue-500 text-white py-6 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] flex items-center justify-center gap-4 active:scale-[0.98] overflow-hidden">
                  <span className="relative z-10">Quiero inscribirme ahora</span>
                  <ArrowRight size={28} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                </button>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-[10px] md:text-xs font-black text-slate-500 tracking-[0.15em] uppercase border-t border-white/5 pt-8">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-blue-500" />
                    CIERRE: 6 de Abril 2026
                  </div>
                  <div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full" />
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-blue-500" />
                    Cupos Limitados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}