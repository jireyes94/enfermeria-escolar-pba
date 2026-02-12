// src/components/layout/ScrollToTop.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Forzamos el scroll al inicio de la página cada vez que cambia la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Usamos instant para que no se vea el "desplazamiento" al cambiar de página
    });
  }, [pathname]);

  return null; // Este componente no renderiza nada visualmente
}