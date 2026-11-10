import { useState } from "react";

const productosCatalogo = [
  { id: 101, nombre: "Portátil Pro", categoria: "Electrónica", precio: 1200 },
  { id: 102, nombre: "Silla de Oficina", categoria: "Mobiliario", precio: 150 },
  { id: 103, nombre: "Teclado Mecánico", categoria: "Electrónica", precio: 90 },
  { id: 104, nombre: "Mesa Elevable", categoria: "Mobiliario", precio: 300 },
];

export default function FiltroYListaProductos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  const productosFiltrados = productosCatalogo
    .filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()),
    )
    .filter((producto) => categoria === "" || producto.categoria === categoria);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto"
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

      <select
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option value="">Todas las categorías</option>
        <option value="Electrónica">Electrónica</option>
        <option value="Mobiliario">Mobiliario</option>
      </select>

      {productosFiltrados.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <ul>
          {productosFiltrados.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - {producto.categoria} - {producto.precio} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}