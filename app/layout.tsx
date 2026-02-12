// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import ScrollToTop from "@/components/layout/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: "Portal oficial de la Comisión de Enfermería Escolar de la Provincia de Buenos Aires. Información, investigación y proyectos.",
  keywords: ["Enfermería Escolar", "Buenos Aires", "Salud Escolar", "Capacitaciones Enfermería"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        {/* Helper de scroll */}
        <ScrollToTop />
        {/* Componente de Navegación */}
        <Navbar />

        {/* Contenedor Principal: 
            - flex-grow para empujar el footer hacia abajo si hay poco contenido.
            - pt-24 para compensar el Navbar fijo.
        */}
        <main className="flex-grow pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* Footer Básico (Podemos expandirlo luego) */}
        <footer className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">{SITE_CONFIG.name}</h3>
                <p className="text-blue-200 text-sm">
                  Trabajando por la salud y el bienestar en las comunidades educativas de la Provincia.
                </p>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li><Link href="/quienes-somos" className="hover:text-white transition-colors">Institucional</Link></li>
                  <li><Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
                  <li><Link href="/investigacion" className="hover:text-white transition-colors">Investigación</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Contacto</h4>
                <p className="text-sm text-blue-200">
                  Email: {SITE_CONFIG.contactEmail}<br />
                  La Plata, Provincia de Buenos Aires
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-blue-800 text-center text-xs text-blue-300">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}