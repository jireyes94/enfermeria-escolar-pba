// src/lib/constants.ts

export const SITE_CONFIG = {
  name: "Comisión Enfermería Escolar",
  province: "Provincia de Buenos Aires",
  contactEmail: "contacto@enfermeriaescolar.pba.gov.ar",
};

export const FEATURE_FLAGS = {
  // Cambiar a true para habilitar la sección de Capacitaciones en el menú y rutas
  ENABLE_CAPACITACIONES: false,
};

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  ...(FEATURE_FLAGS.ENABLE_CAPACITACIONES 
    ? [{ href: "/capacitaciones", label: "Capacitaciones" }] 
    : []),
  { href: "/proyectos", label: "Proyectos" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/actualidad", label: "Actualidad" },
];