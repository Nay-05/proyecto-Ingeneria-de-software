"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import { productos } from "@/data/productos";

// Simulamos que el cliente ya agregó estos productos al carrito
const itemsIniciales = [
  { ...productos[0], cantidad: 1 },
  { ...productos[2], cantidad: 2 },
];

export default function Carrito() {
  const [items, setItems] = useState(itemsIniciales);
  const [pagoGenerado, setPagoGenerado] = useState(false);

  const quitarItem = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const total = items.reduce((suma, i) => suma + i.precio * i.cantidad, 0);

  return (
    <div className="min-h-screen bg-beige">
      <NavBar />

      <section className="mx-auto max-w-3xl px-5 py-10">
        <h1 className="text-2xl font-bold text-primario">Tu carrito</h1>

        {items.length === 0 ? (
          <p className="mt-6 text-neutral-600">Tu carrito está vacío.</p>
        ) : (
          <div className="mt-6 space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-primario/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-fondoCard">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">{item.nombre}</p>
                    <p className="text-sm text-neutral-500">
                      Cantidad: {item.cantidad} · Bs {item.precio} c/u
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => quitarItem(item.id)}
                  className="text-sm font-medium text-primario hover:underline"
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primario/10">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-primario">Bs {total}</span>
          </div>

          {!pagoGenerado ? (
            <button
              onClick={() => setPagoGenerado(true)}
              disabled={items.length === 0}
              className="mt-4 w-full rounded-full bg-primario py-3 font-semibold text-white transition hover:bg-primarioSuave disabled:opacity-40"
            >
              Generar QR de pago
            </button>
          ) : (
            <div className="mt-5 flex flex-col items-center gap-2 rounded-xl bg-fondoCard p-6">
              <div className="flex h-36 w-36 items-center justify-center rounded-lg bg-white text-6xl">
                📱
              </div>
              <p className="text-sm font-medium text-primario">
                QR Simple generado (simulado)
              </p>
              <p className="text-xs text-neutral-500">Válido por 5 minutos</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
