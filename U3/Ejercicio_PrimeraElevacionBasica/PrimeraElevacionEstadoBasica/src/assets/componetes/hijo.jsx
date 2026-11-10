import { useState } from "react";

export function hijo() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    return (
        <>
            <div>
                <label>Ingresa el nombre</label>
                <input type="text" onChange={(e) => {
                    setNombre(e.target.value)
                }} />
            </div>
            <div>
                <label>Apellido</label>
                <input type="text"onChange={(e)=>{
                    setApellido(e.target.value)
                }} />
            </div>
            <p>{nombre} {apellido}</p>
        </>
    )
}

export default hijo;