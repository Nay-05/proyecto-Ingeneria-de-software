import Link from "next/link";
import NavBar from "@/components/NavBar";
import { productos } from "@/data/productos";

const modulosGestion = [
  {
    href: "/catalogo",
    titulo: "Catálogo Completo",
    desc: "Explora cosméticos y dermocuidado filtrados por tipo de piel y categoría.",
    badge: "E-Commerce",
    icon: (
      <svg className="h-6 w-6 text-primario" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    href: "/pos",
    titulo: "Punto de Venta (POS)",
    desc: "Registra ventas en mostrador físico, calcula totales y cobra con efectivo o QR.",
    badge: "Tienda",
    icon: (
      <svg className="h-6 w-6 text-primario" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: "/inventario",
    titulo: "Control de Inventario",
    desc: "Supervisa existencias, alertas automáticas de reorden y estado multi-almacén.",
    badge: "Stock",
    icon: (
      <svg className="h-6 w-6 text-primario" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    href: "/envios",
    titulo: "Tracking de Envíos",
    desc: "Sigue el recorrido de cada despacho en tiempo real desde bodega hasta entrega.",
    badge: "Despacho",
    icon: (
      <svg className="h-6 w-6 text-primario" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    href: "/carrito",
    titulo: "Carrito & Checkout",
    desc: "Gestión de compras del cliente con simulación de pago QR Simple Bolivia.",
    badge: "Cobros",
    icon: (
      <svg className="h-6 w-6 text-primario" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    href: "/chatbot",
    titulo: "Asistente IA",
    desc: "Dermoconsultora virtual con Inteligencia Artificial para asesoría personalizada.",
    badge: "IA Nuba",
    icon: (
      <svg className="h-6 w-6 text-primario" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
];

const beneficios = [
  {
    titulo: "Envíos Nacionales",
    desc: "Cobertura en Santa Cruz, La Paz, Cbba y Sucre",
    icono: "🚚",
  },
  {
    titulo: "Pago Seguro QR",
    desc: "Cobro instantáneo vía QR Simple",
    icono: "📲",
  },
  {
    titulo: "Cosmética Certificada",
    desc: "Fórmulas dermatológicamente testeadas",
    icono: "✨",
  },
  {
    titulo: "Dermoconsultora IA",
    desc: "Rutinas a medida según tu tipo de piel",
    icono: "🌸",
  },
];

export default function Home() {
  const productosDestacados = productos.slice(0, 3);
  const heroProducto = productos[0];

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <NavBar />

      {/* Hero Principal */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primario via-primario to-[#7e254c] text-white">
        {/* Luces sutiles de fondo */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primarioSuave/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-fondoCard/20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-14 lg:grid-cols-12 lg:py-20">
          <div className="text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-fondoCard animate-pulse" />
              NUEVA COLECCIÓN BEAUTY & SKINCARE
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-tight">
              Realza tu brillo <br />
              <span className="text-fondoCard">natural cada día</span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">
              E-commerce y gestión operativa para <strong>Nuba Beauty</strong>: fórmulas de alta gama para cada tipo de piel, logística en tiempo real y asesoramiento personalizado con IA.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/catalogo"
                className="rounded-full bg-white px-7 py-3 text-sm font-bold text-primario shadow-lg shadow-black/10 transition hover:bg-fondoCard hover:scale-105"
              >
                Explorar Catálogo →
              </Link>
              <Link
                href="/chatbot"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm ring-1 ring-white/30 transition hover:bg-white/25"
              >
                <span>✨</span> Hablar con Dermoconsultora IA
              </Link>
            </div>

            {/* Micro métricas */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-center lg:text-left">
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-white/70">Original y seguro</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24-48h</p>
                <p className="text-xs text-white/70">Tiempo de despacho</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">QR Simple</p>
                <p className="text-xs text-white/70">Pago sin fricción</p>
              </div>
            </div>
          </div>

          {/* Tarjeta Visual Destacada (Hero showcase) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-3xl bg-white p-5 text-neutral-900 shadow-2xl ring-1 ring-white/30">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-fondoCard px-3 py-1 text-xs font-bold text-primario">
                  ★ Bestseller Nuba
                </span>
                <span className="text-xs font-semibold text-primarioSuave">
                  {heroProducto.marca}
                </span>
              </div>

              <div className="mt-4 h-64 w-full overflow-hidden rounded-2xl bg-fondoCard">
                <img
                  src={heroProducto.imagen}
                  alt={heroProducto.nombre}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {heroProducto.categoria} · Piel {heroProducto.tipoPiel}
                </p>
                <h3 className="mt-1 text-lg font-bold text-neutral-900">
                  {heroProducto.nombre}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-neutral-500">Precio exclusivo</span>
                    <p className="text-2xl font-extrabold text-primario">
                      Bs {heroProducto.precio}
                    </p>
                  </div>
                  <Link
                    href="/catalogo"
                    className="rounded-full bg-primario px-4 py-2 text-xs font-bold text-white transition hover:bg-primarioSuave"
                  >
                    Ver en tienda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de Beneficios */}
      <section className="border-b border-primario/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-8 md:grid-cols-4">
          {beneficios.map((b) => (
            <div key={b.titulo} className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-fondoCard/60 text-2xl">
                {b.icono}
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-800">{b.titulo}</h4>
                <p className="text-xs text-neutral-500">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vitrina de Productos Populares */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primarioSuave">
              Lo más pedido
            </span>
            <h2 className="mt-1 text-2xl font-bold text-neutral-900 sm:text-3xl">
              Favoritos de la temporada
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="text-sm font-semibold text-primario hover:underline"
          >
            Ver todos los cosméticos →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productosDestacados.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-primario/15 transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-52 w-full overflow-hidden rounded-xl bg-fondoCard">
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <span className="text-xs uppercase tracking-wider text-primarioSuave font-medium">
                  {p.marca}
                </span>
                <h3 className="mt-1 font-semibold text-neutral-800">{p.nombre}</h3>
                <div className="mt-auto pt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-primario">
                    Bs {p.precio}
                  </span>
                  <Link
                    href="/catalogo"
                    className="rounded-full bg-fondoCard/80 px-3.5 py-1.5 text-xs font-bold text-primario transition hover:bg-primario hover:text-white"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner interactivo: Asistente IA */}
      <section className="mx-auto max-w-6xl px-5 py-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primario via-primario to-primarioSuave p-8 text-white shadow-lg sm:p-12">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              ✨ Asesoría Personalizada 24/7
            </span>
            <h2 className="mt-3 text-2xl font-bold sm:text-4xl">
              ¿No sabes qué rutina necesita tu piel?
            </h2>
            <p className="mt-3 text-sm text-white/90 sm:text-base">
              Nuestra dermoconsultora con Inteligencia Artificial analiza tus necesidades (grasa, seca, mixta o sensible) y te sugiere productos formulados para ti en segundos.
            </p>
            <div className="mt-6">
              <Link
                href="/chatbot"
                className="inline-block rounded-full bg-white px-6 py-3 text-sm font-bold text-primario shadow transition hover:bg-fondoCard"
              >
                Iniciar consulta con IA →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos de Operación & Plataforma */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primarioSuave">
            Plataforma Integral
          </span>
          <h2 className="mt-1 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Módulos del Sistema NubaGlow
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-600">
            Accede rápidamente a las herramientas de venta, inventario, logística y servicio al cliente.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modulosGestion.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="group flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primario/15 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-primario/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fondoCard/50 transition group-hover:bg-fondoCard">
                    {m.icon}
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600 transition group-hover:bg-primario group-hover:text-white">
                    {m.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-neutral-900 group-hover:text-primario transition">
                  {m.titulo}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primario">
                <span>Ingresar al módulo</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer elegante */}
      <footer className="border-t border-primario/15 bg-white py-8 text-center text-xs text-neutral-500">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-semibold tracking-wider text-primario">
            NUBA<span className="font-light">Glow</span> · Cosmética y Cuidado de la Piel
          </p>
          <p className="mt-1 text-neutral-400">
            Desarrollado para Nuba Beauty · Santa Cruz, Bolivia
          </p>
        </div>
      </footer>
    </div>
  );
}
