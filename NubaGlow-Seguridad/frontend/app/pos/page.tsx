"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import { productos } from "@/data/productos";

type LineaVenta = { id: string; nombre: string; precio: number; cantidad: number };

export default function Pos() {
  const [venta, setVenta] = useState<LineaVenta[]>([]);
  const [metodoPago, setMetodoPago] = useState<"Efectivo" | "QR">("Efectivo");
  const [ventaConfirmada, setVentaConfirmada] = useState(false);

  const agregarProducto = (id: string) => {
    const producto = productos.find((p) => p.id === id)!;
    setVentaConfirmada(false);
    setVenta((actual) => {
      const existe = actual.find((l) => l.id === id);
      if (existe) {
        return actual.map((l) =>
          l.id === id ? { ...l, cantidad: l.cantidad + 1 } : l
        );
      }
      return [...actual, { id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 }];
    });
  };

  const total = venta.reduce((s, l) => s + l.precio * l.cantidad, 0);

  return (
    <div className="min-h-screen bg-beige">
      <NavBar />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-primario">Punto de venta</h1>
          <p className="mt-1 text-sm text-neutral-600">
            Toca un producto para agregarlo a la venta actual.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {productos.map((p) => (
              <button
                key={p.id}
                onClick={() => agregarProducto(p.id)}
                className="rounded-xl bg-white p-3 text-left shadow-sm ring-1 ring-primario/10 transition hover:ring-primario/30"
              >
                <div className="h-28 w-full overflow-hidden rounded-lg bg-fondoCard">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-800 line-clamp-1">{p.nombre}</p>
                <p className="text-sm font-semibold text-primario">Bs {p.precio}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-primario/10">
          <h2 className="font-semibold text-neutral-800">Venta actual</h2>

          {venta.length === 0 ? (
            <p className="mt-4 text-sm text-neutral-500">Aún no agregaste productos.</p>
          ) : (
            <ul className="mt-4 space-y-2 text-sm">
              {venta.map((l) => (
                <li key={l.id} className="flex justify-between">
                  <span>{l.cantidad}× {l.nombre}</span>
                  <span className="text-neutral-600">Bs {l.precio * l.cantidad}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex justify-between border-t border-primario/10 pt-3 font-semibold">
            <span>Total</span>
            <span className="text-primario">Bs {total}</span>
          </div>

          <div className="mt-4 flex gap-2">
            {(["Efectivo", "QR"] as const).map((metodo) => (
              <button
                key={metodo}
                onClick={() => setMetodoPago(metodo)}
                className={`flex-1 rounded-full py-1.5 text-sm font-medium transition ${
                  metodoPago === metodo
                    ? "bg-primario text-white"
                    : "bg-fondoCard text-primario"
                }`}
              >
                {metodo}
              </button>
            ))}
          </div>

          <button
            onClick={() => setVentaConfirmada(true)}
            disabled={venta.length === 0}
            className="mt-4 w-full rounded-full bg-primario py-2.5 font-semibold text-white transition hover:bg-primarioSuave disabled:opacity-40"
          >
            Cobrar venta
          </button>

          {ventaConfirmada && (
            <p className="mt-3 rounded-lg bg-fondoCard p-3 text-center text-sm font-medium text-primario">
              ✅ Venta registrada con {metodoPago}. Comprobante emitido.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
