"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import { login, guardarSesion, RUTA_POR_ROL } from "@/lib/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setCargando(true);
    try {
      const { token, usuario } = await login(email, password);
      guardarSesion(token, usuario);
      router.push(RUTA_POR_ROL[usuario.rol]);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al iniciar sesión");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-beige">
      <NavBar />

      <section className="mx-auto flex max-w-md flex-col px-5 py-16">
        <h1 className="text-2xl font-bold text-primario">Iniciar sesión</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Cada rol entra a la parte del sistema que le corresponde.
        </p>

        <form
          onSubmit={manejarEnvio}
          className="mt-6 space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primario/10"
        >
          <div>
            <label className="text-sm font-medium text-neutral-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg bg-fondoCard px-3 py-2 text-sm outline-none"
              placeholder="tunombre@nuba.bo"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg bg-fondoCard px-3 py-2 text-sm outline-none"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={cargando}
            className="w-full rounded-full bg-primario py-2.5 font-semibold text-white transition hover:bg-primarioSuave disabled:opacity-50"
          >
            {cargando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-4 text-xs text-neutral-500">
          Usuario administrador de prueba: <b>admin@nuba.bo</b> / <b>admin1234</b>
        </p>
      </section>
    </div>
  );
}
