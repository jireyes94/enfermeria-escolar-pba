// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Footer from "@/components/layout/Footer";

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
       <Footer />
      </body>
    </html>
  );
}