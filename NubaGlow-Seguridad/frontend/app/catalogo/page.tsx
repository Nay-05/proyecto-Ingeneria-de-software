"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import { productos } from "@/data/productos";

const tiposPiel = ["Todos", "Seca", "Grasa", "Mixta", "Sensible", "Todo tipo"];

export default function Catalogo() {
  const [filtro, setFiltro] = useState("Todos");

  const productosFiltrados =
    filtro === "Todos"
      ? productos
      : productos.filter((p) => p.tipoPiel === filtro);

  return (
    <div className="min-h-screen bg-beige">
      <NavBar />

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h1 className="text-2xl font-bold text-primario">Catálogo</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Filtra por tipo de piel para encontrar tu producto ideal.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tiposPiel.map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltro(tipo)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filtro === tipo
                  ? "bg-primario text-white"
                  : "bg-white text-primario ring-1 ring-primario/30 hover:bg-fondoCard"
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productosFiltrados.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-primario/10"
            >
              <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl bg-fondoCard">
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-wide text-primarioSuave">
                {p.marca}
              </p>
              <h2 className="font-semibold text-neutral-800">{p.nombre}</h2>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-primario">
                  Bs {p.precio}
                </span>
                {p.stock <= 5 ? (
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">
                    Últimas unidades
                  </span>
                ) : (
                  <span className="text-xs text-neutral-500">
                    Stock: {p.stock}
                  </span>
                )}
              </div>
              <button className="mt-4 w-full rounded-full bg-primario py-2 text-sm font-semibold text-white transition hover:bg-primarioSuave">
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
