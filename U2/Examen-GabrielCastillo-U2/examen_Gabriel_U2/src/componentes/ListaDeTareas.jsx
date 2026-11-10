import { useState } from "react";

export function ListaDeTareas() {
    const tareasIniciales = [
        { id: 1, titulo: "Repasar JSX", completada: true },
        { id: 2, titulo: "Practicar useState", completada: false },
        { id: 3, titulo: "Hacer ejercicios de React", completada: false }
    ];

    const [busqueda, setBusqueda] = useState("");

    const tareasFiltradas = tareasIniciales.filter((tarea) =>
        tarea.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            
            <input
                type="text"
                name="busqueda"
                id="busqueda"
                value={busqueda}
                onChange={(event) => setBusqueda(event.target.value)}//texto actual del campo
                placeholder="Introduce el título"
            />

            {tareasFiltradas.length === 0 ? (
                <p>No se encontraron tareas</p>
            ) : (
                <ul>
                    {tareasFiltradas.map((tarea) => (
                        <li key={tarea.id}>
                            {tarea.titulo} - {tarea.completada ? "Completada" : "Pendiente"}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}