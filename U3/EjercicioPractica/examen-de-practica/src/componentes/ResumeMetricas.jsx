import { useEffect } from "react";

export function ResumenMetricas() {
    const ventas = [
        { id: 1, cliente: "Ana Lopez", monto: 350, estado: 'completado' },
        { id: 2, cliente: "Carlos Ruiz", monto: 120, estado: 'pendiente' },
        { id: 3, cliente: "Lucia Gomez", monto: 750, estado: 'completado' },
        { id: 4, cliente: "Marcos Sanz", monto: 200, estado: 'completado' }
    ];

    const ingresoTotal = ventas.reduce(
        (acc, venta) => venta.estado === "completado" ? acc + venta.monto : acc,0
    );
    const totalTransacciones = ventas.length;

    useEffect(() => {
        if (ingresoTotal > 1000) {
            alert("Los ingresos totales acumulados se han superado");
        }
    }, [ingresoTotal]);

    return (
        <>
            <p>Ingresos completados: {ingresoTotal}</p>
            <p>Nro total de transacciones: {totalTransacciones}</p>
        </>
    );
}