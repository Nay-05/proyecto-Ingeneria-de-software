# NubaGlow App — Subsistema de Seguridad (Prototipo)

Prototipo del subsistema de **Seguridad**: login + CRUD de usuarios, con control de
acceso por rol (RBAC), tal como pide la entrega. Cada rol entra a la parte del
sistema que le corresponde:

| Rol | A dónde entra al iniciar sesión |
|---|---|
| Administrador | `/panel` — puede crear, editar y eliminar usuarios de cualquier rol |
| Vendedor/Cajero | `/pos` — punto de venta |
| Gestor de Inventario | `/inventario` |
| Encargado de Logística | `/envios` |
| Cliente | `/catalogo` |

## Estructura

```
NubaGlow-Seguridad/
  backend/    -> API en Node.js + TypeScript + SQLite (login, CRUD de usuarios)
  frontend/   -> Next.js + TypeScript + Tailwind (login, panel admin, y el resto de pantallas)
```

## Cómo correrlo (necesitas 2 terminales abiertas a la vez)

**Terminal 1 — Backend:**
```
cd backend
npm install
npm run dev
```
Debe decir: `Backend de Seguridad corriendo en http://localhost:4000`
Al arrancar por primera vez crea sola la base de datos SQLite y un usuario administrador:
- Email: `admin@nuba.bo`
- Contraseña: `admin1234`

**Terminal 2 — Frontend:**
```
cd frontend
npm install
npm run dev
```
Abre http://localhost:3000/login e inicia sesión con el administrador de prueba.

Desde el Panel de administración puedes crear las cuentas de tus compañeras
(vendedora, almacén, logística) eligiendo su rol, y luego iniciar sesión con
cada una para ver que las lleva a su propia pantalla.

## Qué se agregó para esta entrega (Subsistema de Seguridad)

- **Backend (`backend/`)**: Node.js + TypeScript (mismo lenguaje del proyecto) +
  SQLite (`better-sqlite3`) + contraseñas cifradas con `bcryptjs` + sesión con
  JWT (`jsonwebtoken`). CRUD completo de usuarios en `/usuarios`
  (crear, listar, editar, eliminar), restringido al rol `administrador`.
- **Frontend (`frontend/`)**: pantallas nuevas `/login` y `/panel`
  (`app/login/page.tsx`, `app/panel/page.tsx`, `lib/auth.ts`), y se actualizó
  `components/NavBar.tsx` para mostrar la sesión activa. **No se tocó la
  paleta de colores ni el resto de las pantallas** — todo usa las mismas clases
  (`bg-primario`, `bg-fondoCard`, etc.) ya definidas en `app/globals.css`.

## Para la entrega

1. Sube esta carpeta a un repositorio de GitHub (solo la representante del grupo).
2. En el mensaje de entrega incluye el enlace del repo y los nombres de todas las integrantes.
3. Recuerda que `backend/nubaglow.sqlite` se genera solo al correr `npm run dev`
   por primera vez — no hace falta subir ese archivo (ya está en `.gitignore`).
