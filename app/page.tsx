// src/app/page.tsx
import Link from "next/link";
import { SITE_CONFIG, FEATURE_FLAGS } from "@/lib/constants";
import { ArrowRight, BookOpen, Users, Newspaper, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* SECTION: HERO */}
      <section className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent -z-10" />
        <div className="px-8 py-16 md:py-24 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950 tracking-tight leading-tight">
              Excelencia en la <span className="text-blue-600">Enfermería Escolar</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Portal oficial de la Comisión de Enfermería Escolar de la {SITE_CONFIG.province}. 
              Impulsando la salud, la prevención y el cuidado integral en el ámbito educativo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link 
                href="/quienes-somos" 
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-200 flex items-center gap-2"
              >
                Conocenos <ArrowRight size={18} />
              </Link>
              <Link 
                href="/proyectos" 
                className="bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div className="bg-blue-100 h-[400px] rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-200">
              {/* Espacio para imagen institucional de alta resolución */}
              <p className="text-blue-400 font-medium">Imagen Institucional / Fotografía Profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ACCESOS RÁPIDOS (CARDS) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card: Investigación */}
        <Link href="/investigacion" className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <BookOpen size={24} />
          </div>
          <h3 className="mt-6 text-xl font-bold text-slate-900">Investigación</h3>
          <p className="mt-3 text-slate-500 text-sm leading-relaxed">
            Acceso a papers, protocolos y estudios científicos actualizados sobre la salud escolar.
          </p>
        </Link>

        {/* Card: Actualidad */}
        <Link href="/actualidad" className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <Newspaper size={24} />
          </div>
          <h3 className="mt-6 text-xl font-bold text-slate-900">Actualidad</h3>
          <p className="mt-3 text-slate-500 text-sm leading-relaxed">
            Novedades de la Comisión, noticias del sector y actualizaciones ministeriales.
          </p>
        </Link>

        {/* Card Dinámica: Capacitaciones o Proyectos */}
        {FEATURE_FLAGS.ENABLE_CAPACITACIONES ? (
          <Link href="/capacitaciones" className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <ShieldCheck size={24} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">Capacitaciones</h3>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
              Formación continua y cursos certificados para profesionales del área.
            </p>
          </Link>
        ) : (
          <Link href="/quienes-somos" className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Users size={24} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">Institucional</h3>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
              Conoce nuestra misión, visión y los objetivos que persigue la Comisión.
            </p>
          </Link>
        )}
      </section>

      {/* SECTION: BREVE RESUMEN */}
      <section className="bg-blue-950 text-white rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Nuestra Misión</h2>
          <p className="mt-6 text-blue-100 text-lg leading-relaxed">
            Propiciamos un espacio de encuentro, debate y construcción técnica para los profesionales de enfermería que desempeñan sus tareas en instituciones educativas, garantizando el derecho a la salud de las infancias y juventudes.
          </p>
        </div>
      </section>
    </div>
  );
}