import { useState } from "react";

export default function BotonMostrarTexto(){
    const[mensaje,setMensaje] = useState("");
    return(
        <>
            <h1>{mensaje}</h1>
            <button onClick={()=> setMensaje("Boton presionado!!!")}>Pulsame</button>
        </>
    )
}