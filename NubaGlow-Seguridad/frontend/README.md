# NubaGlow App — Interfaz (no funcional)

Interfaz de la app de e-commerce para Nuba Beauty, hecha con Next.js + TypeScript + Tailwind CSS, siguiendo la paleta rosa de la marca. Por ahora usa datos "de mentira" (mock data) en vez de un backend real.

## Cómo abrirlo

1. Instala Node.js (LTS) desde nodejs.org si no lo tienes.
2. Abre esta carpeta en VS Code.
3. En la terminal, dentro de esta carpeta:
   ```
   npm install
   npm run dev
   ```
4. Abre http://localhost:3000 en tu navegador.

## Estructura

```
app/
  page.tsx          -> inicio
  catalogo/         -> catálogo con filtro por tipo de piel
  carrito/          -> carrito + simulación de pago QR
  pos/               -> punto de venta (ventas presenciales)
  inventario/        -> control de stock y alertas de reorden
  envios/            -> tracking de pedidos
  chatbot/           -> asistente IA (dermoconsultora), simulado
data/
  productos.ts       -> productos, pedidos y conversación de ejemplo (mock data)
components/
  NavBar.tsx          -> barra de navegación compartida
```

## Paleta de colores (definida en app/globals.css)

- `primario`: #9B3160 — magenta oscuro / ciruela (navbar, títulos, botones principales, precios)
- `primarioSuave`: #D46C8C — rosa frambuesa medio (hover, estados secundarios, tags)
- `fondoCard`: #FBB3BB — rosa pastel suave (tarjetas de producto, avatares, chat)
- `beige` / fondo: #FFFFFF — fondo blanco general

## Siguiente fase (funcional)

Cuando toque conectar el backend real:
- Reemplazar `data/productos.ts` por llamadas a la API (NestJS o FastAPI).
- Conectar el chatbot a la API de Gemini (o el modelo que elijan) en vez de la respuesta simulada de `app/chatbot/page.tsx`.
- Conectar el pago QR a la pasarela real de QR Simple Bolivia.
