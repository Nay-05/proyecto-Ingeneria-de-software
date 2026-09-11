"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cerrarSesion, obtenerSesion, NOMBRE_ROL, UsuarioSesion } from "@/lib/auth";

const enlaces = [
  { href: "/catalogo", texto: "Catálogo" },
  { href: "/carrito", texto: "Carrito" },
  { href: "/pos", texto: "POS" },
  { href: "/inventario", texto: "Inventario" },
  { href: "/envios", texto: "Envíos" },
  { href: "/chatbot", texto: "Asistente IA" },
];

export default function NavBar() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<UsuarioSesion | null>(null);

  useEffect(() => {
    setUsuario(obtenerSesion()?.usuario ?? null);
  }, []);

  const salir = () => {
    cerrarSesion();
    setUsuario(null);
    router.push("/login");
  };

  return (
    <header className="bg-primario text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link href="/" className="text-xl font-bold tracking-wide">
          NUBA<span className="font-light">Glow</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="rounded-full px-3 py-1 transition hover:bg-white/20"
            >
              {enlace.texto}
            </Link>
          ))}

          {usuario?.rol === "administrador" && (
            <Link href="/panel" className="rounded-full px-3 py-1 transition hover:bg-white/20">
              Panel Admin
            </Link>
          )}

          {usuario ? (
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
              <span className="text-xs">
                {usuario.nombre} · {NOMBRE_ROL[usuario.rol]}
              </span>
              <button onClick={salir} className="text-xs font-semibold underline">
                Salir
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-white px-3 py-1 text-primario transition hover:bg-white/90"
            >
              Iniciar sesión
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
