"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import {
  API_URL,
  NOMBRE_ROL,
  Rol,
  obtenerSesion,
} from "@/lib/auth";

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  rol: Rol;
  creadoEn: string;
};

const rolesDisponibles: Rol[] = [
  "administrador",
  "vendedor",
  "almacen",
  "logistica",
  "cliente",
];

const formularioVacio = { nombre: "", email: "", password: "", rol: "vendedor" as Rol };

export default function PanelUsuarios() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [form, setForm] = useState(formularioVacio);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  // Solo administradores pueden ver este panel
  useEffect(() => {
    const sesion = obtenerSesion();
    if (!sesion || sesion.usuario.rol !== "administrador") {
      router.push("/login");
      return;
    }
    setToken(sesion.token);
  }, [router]);

  const cargarUsuarios = async (tok: string) => {
    setCargando(true);
    const resp = await fetch(`${API_URL}/usuarios`, {
      headers: { Authorization: `Bearer ${tok}` },
    });
    if (resp.status === 401 || resp.status === 403) {
      router.push("/login");
      return;
    }
    const data = await resp.json();
    setUsuarios(data.usuarios);
    setCargando(false);
  };

  useEffect(() => {
    if (token) cargarUsuarios(token);
  }, [token]);

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setError("");

    try {
      if (editandoId) {
        const resp = await fetch(`${API_URL}/usuarios/${editandoId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ nombre: form.nombre, email: form.email, rol: form.rol }),
        });
        if (!resp.ok) throw new Error((await resp.json()).error);
      } else {
        const resp = await fetch(`${API_URL}/usuarios`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        });
        if (!resp.ok) throw new Error((await resp.json()).error);
      }
      setForm(formularioVacio);
      setEditandoId(null);
      cargarUsuarios(token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error");
    }
  };

  const editar = (usuario: Usuario) => {
    setEditandoId(usuario.id);
    setForm({ nombre: usuario.nombre, email: usuario.email, password: "", rol: usuario.rol });
  };

  const eliminar = async (id: number) => {
    if (!token) return;
    if (!confirm("¿Eliminar este usuario?")) return;
    await fetch(`${API_URL}/usuarios/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    cargarUsuarios(token);
  };

  if (!token) return null;

  return (
    <div className="min-h-screen bg-beige">
      <NavBar />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="text-2xl font-bold text-primario">Panel de administración</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Crea y gestiona las cuentas de cada integrante del sistema (RF-15: control por rol).
        </p>

        <form
          onSubmit={manejarEnvio}
          className="mt-6 grid grid-cols-1 gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-primario/10 sm:grid-cols-2 lg:grid-cols-5"
        >
          <input
            required
            placeholder="Nombre"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="rounded-lg bg-fondoCard px-3 py-2 text-sm outline-none"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-lg bg-fondoCard px-3 py-2 text-sm outline-none"
          />
          {!editandoId && (
            <input
              required
              type="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="rounded-lg bg-fondoCard px-3 py-2 text-sm outline-none"
            />
          )}
          <select
            value={form.rol}
            onChange={(e) => setForm({ ...form, rol: e.target.value as Rol })}
            className="rounded-lg bg-fondoCard px-3 py-2 text-sm outline-none"
          >
            {rolesDisponibles.map((r) => (
              <option key={r} value={r}>
                {NOMBRE_ROL[r]}
              </option>
            ))}
          </select>
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 rounded-full bg-primario py-2 text-sm font-semibold text-white transition hover:bg-primarioSuave"
            >
              {editandoId ? "Guardar cambios" : "Crear usuario"}
            </button>
            {editandoId && (
              <button
                type="button"
                onClick={() => {
                  setEditandoId(null);
                  setForm(formularioVacio);
                }}
                className="rounded-full bg-neutral-200 px-3 text-sm text-neutral-700"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        {error && (
          <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
        )}

        <div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-primario/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-fondoCard text-primario">
              <tr>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Rol</th>
                <th className="px-4 py-3">Creado</th>
                <th className="px-4 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr>
                  <td className="px-4 py-4 text-neutral-500" colSpan={5}>
                    Cargando...
                  </td>
                </tr>
              ) : (
                usuarios.map((u) => (
                  <tr key={u.id} className="border-t border-primario/10">
                    <td className="px-4 py-3 font-medium text-neutral-800">{u.nombre}</td>
                    <td className="px-4 py-3 text-neutral-600">{u.email}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-fondoCard px-3 py-1 text-xs font-medium text-primario">
                        {NOMBRE_ROL[u.rol]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-500">{u.creadoEn}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => editar(u)}
                        className="mr-3 text-primario hover:underline"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminar(u.id)}
                        className="text-red-600 hover:underline"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
