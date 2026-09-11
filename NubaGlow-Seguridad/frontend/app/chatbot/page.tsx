"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import { conversacionInicial, type MensajeChat } from "@/data/productos";

// Respuesta "de mentira": en la fase funcional esto se reemplaza
// por una llamada real a la API de Gemini (o el modelo que elijan).
const respuestaSimulada =
  "Gracias por contarme 💕 Basándome en eso te recomendaría revisar el Sérum de Ácido Hialurónico y el Protector Solar FPS 50 en el catálogo.";

export default function Chatbot() {
  const [mensajes, setMensajes] = useState<MensajeChat[]>(conversacionInicial);
  const [texto, setTexto] = useState("");

  const enviar = () => {
    if (!texto.trim()) return;
    setMensajes((actual) => [
      ...actual,
      { autor: "usuario", texto },
      { autor: "bot", texto: respuestaSimulada },
    ]);
    setTexto("");
  };

  return (
    <div className="min-h-screen bg-beige">
      <NavBar />

      <section className="mx-auto max-w-2xl px-5 py-10">
        <h1 className="text-2xl font-bold text-primario">Asistente IA · Dermoconsultora</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Interfaz simulada — en la fase funcional se conecta a un modelo de IA real.
        </p>

        <div className="mt-6 flex h-[420px] flex-col rounded-2xl bg-white shadow-sm ring-1 ring-primario/10">
          <div className="flex-1 space-y-3 overflow-y-auto p-5">
            {mensajes.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.autor === "usuario" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    m.autor === "usuario"
                      ? "bg-primario text-white"
                      : "bg-fondoCard text-neutral-800"
                  }`}
                >
                  {m.texto}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t border-primario/10 p-3">
            <input
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviar()}
              placeholder="Escribe tu consulta de belleza..."
              className="flex-1 rounded-full bg-fondoCard px-4 py-2 text-sm outline-none placeholder:text-neutral-400"
            />
            <button
              onClick={enviar}
              className="rounded-full bg-primario px-5 py-2 text-sm font-semibold text-white transition hover:bg-primarioSuave"
            >
              Enviar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
