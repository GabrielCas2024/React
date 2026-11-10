import { useState } from "react";
import { listaPersonajes } from "../listaPersonajes";
import { Card } from "./Card";



export const MostrarComponentes = () => {
    const [busqueda, setBusqueda] = useState("");

    const filtrarNombre = listaPersonajes.filter((personaje) => {
        return personaje.name.toUpperCase().includes(busqueda.toUpperCase())
    })
    const mostrar=filtrarNombre.map((personaje)=>{
        
    });

    return (
        <div className="card">
            <Card nombre={{filtrarNombre.map()}}></Card>
        </div>
    );
};