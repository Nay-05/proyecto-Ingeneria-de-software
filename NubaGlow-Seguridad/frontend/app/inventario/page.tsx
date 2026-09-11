import NavBar from "@/components/NavBar";
import { productos } from "@/data/productos";

const UMBRAL_STOCK_BAJO = 5;

export default function Inventario() {
  const productosBajoStock = productos.filter((p) => p.stock <= UMBRAL_STOCK_BAJO);

  return (
    <div className="min-h-screen bg-beige">
      <NavBar />

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h1 className="text-2xl font-bold text-primario">Inventario</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Control multi-almacén y alertas de punto de reorden.
        </p>

        {productosBajoStock.length > 0 && (
          <div className="mt-5 rounded-xl bg-red-50 p-4 ring-1 ring-red-200">
            <p className="text-sm font-semibold text-red-700">
              ⚠ {productosBajoStock.length} producto(s) alcanzaron el punto de reorden
            </p>
          </div>
        )}

        <div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-primario/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-fondoCard text-primario">
              <tr>
                <th className="px-4 py-3">Producto</th>
                <th className="px-4 py-3">Marca</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Estado</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr key={p.id} className="border-t border-primario/10">
                  <td className="px-4 py-3 font-medium text-neutral-800">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.imagen}
                        alt={p.nombre}
                        className="h-10 w-10 shrink-0 rounded-lg object-cover ring-1 ring-primario/10"
                      />
                      <span>{p.nombre}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-neutral-600">{p.marca}</td>
                  <td className="px-4 py-3 text-neutral-600">{p.stock} unidades</td>
                  <td className="px-4 py-3">
                    {p.stock <= UMBRAL_STOCK_BAJO ? (
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                        Reordenar
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        Stock OK
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
