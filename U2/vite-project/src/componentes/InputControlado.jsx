import { useState } from "react";

export default function InputControlado() {
    const [mensaje, setMensaje] = useState(null)

    function manejarCambio(e) {
        setMensaje(e.target.value);
    }
    return (
        <>
            <h1>{mensaje}</h1>
            <input type="text" onChange={manejarCambio}/>
        </>
    )
}