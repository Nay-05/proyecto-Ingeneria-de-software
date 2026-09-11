import NavBar from "@/components/NavBar";
import { pedidos } from "@/data/productos";

const pasos = ["Pendiente", "En preparación", "En tránsito", "Entregado"] as const;

const colorEstado: Record<string, string> = {
  Pendiente: "bg-neutral-100 text-neutral-600",
  "En preparación": "bg-yellow-100 text-yellow-700",
  "En tránsito": "bg-blue-100 text-blue-700",
  Entregado: "bg-green-100 text-green-700",
};

export default function Envios() {
  return (
    <div className="min-h-screen bg-beige">
      <NavBar />

      <section className="mx-auto max-w-4xl px-5 py-10">
        <h1 className="text-2xl font-bold text-primario">Envíos y logística</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Sigue el estado de cada pedido desde el despacho hasta la entrega.
        </p>

        <div className="mt-6 space-y-4">
          {pedidos.map((pedido) => {
            const pasoActual = pasos.indexOf(pedido.estado);
            return (
              <div
                key={pedido.id}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-primario/10"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-neutral-800">
                      {pedido.id} · {pedido.cliente}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {pedido.ciudad} · Bs {pedido.total} · {pedido.fecha}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${colorEstado[pedido.estado]}`}
                  >
                    {pedido.estado}
                  </span>
                </div>

                <div className="mt-4 flex items-center">
                  {pasos.map((paso, i) => (
                    <div key={paso} className="flex flex-1 items-center">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          i <= pasoActual ? "bg-primario" : "bg-neutral-200"
                        }`}
                      />
                      {i < pasos.length - 1 && (
                        <div
                          className={`h-0.5 flex-1 ${
                            i < pasoActual ? "bg-primario" : "bg-neutral-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-1 flex justify-between text-[10px] text-neutral-500">
                  {pasos.map((paso) => (
                    <span key={paso}>{paso}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
