// Funciones para hablar con el backend de Seguridad (login y usuarios)
// y guardar la sesión del usuario logueado en el navegador.

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export type Rol = "administrador" | "vendedor" | "almacen" | "logistica" | "cliente";

export type UsuarioSesion = {
  id: number;
  nombre: string;
  email?: string;
  rol: Rol;
};

// A dónde redirigir a cada rol justo después de iniciar sesión,
// según sus funcionalidades dentro del sistema.
export const RUTA_POR_ROL: Record<Rol, string> = {
  administrador: "/panel",
  vendedor: "/pos",
  almacen: "/inventario",
  logistica: "/envios",
  cliente: "/catalogo",
};

export const NOMBRE_ROL: Record<Rol, string> = {
  administrador: "Administrador/a",
  vendedor: "Vendedor/a",
  almacen: "Gestor/a de Inventario",
  logistica: "Encargado/a de Logística",
  cliente: "Cliente",
};

export function guardarSesion(token: string, usuario: UsuarioSesion) {
  localStorage.setItem("nuba_token", token);
  localStorage.setItem("nuba_usuario", JSON.stringify(usuario));
}

export function obtenerSesion(): { token: string; usuario: UsuarioSesion } | null {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("nuba_token");
  const usuarioTexto = localStorage.getItem("nuba_usuario");
  if (!token || !usuarioTexto) return null;
  return { token, usuario: JSON.parse(usuarioTexto) };
}

export function cerrarSesion() {
  localStorage.removeItem("nuba_token");
  localStorage.removeItem("nuba_usuario");
}

export async function login(email: string, password: string) {
  const resp = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await resp.json();
  if (!resp.ok) throw new Error(data.error || "No se pudo iniciar sesión");
  return data as { token: string; usuario: UsuarioSesion };
}
