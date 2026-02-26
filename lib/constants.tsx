// src/lib/constants.ts

export const SITE_CONFIG = {
  // Nuevo nombre institucional según requerimiento 
  name: "Campus Profesional en Enfermería y Salud Escolar",
  province: "Provincia de Buenos Aires",
  // Email actualizado según el PDF [cite: 238]
  contactEmail: "enfermeriaescolarargentina@gmail.com", 
};

export const FEATURE_FLAGS = {
  ENABLE_CAPACITACIONES: true, 
};

/**
 * NAVEGACIÓN ENFOCADA A CONVERSIÓN
 * Se ocultan secciones secundarias para priorizar la venta de la formación.
 */
export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/capacitaciones", label: "Capacitaciones" }, 
];

// Rutas preservadas en el sistema pero fuera del menú visual
export const HIDDEN_LINKS = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/actualidad", label: "Actualidad" },
];