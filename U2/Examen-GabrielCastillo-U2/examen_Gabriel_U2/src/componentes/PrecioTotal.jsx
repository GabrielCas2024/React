export function PrecioTotal() {
    const productos = [
        { nombre: "Cuaderno", precio: 3 },
        { nombre: "Bolígrafo", precio: 2 },
        { nombre: "Mochila", precio: 20 }
    ];

    const CalcularPrecio = (productos) => {
        return productos.reduce((total, producto) => {
            return total += producto.precio
        }, 0)
    }
    return (
        <p>Precio total : {CalcularPrecio(productos)}</p>
    )
}