//funcion que funciona con booleans : Cambia el mensaje del boton segun si es true o false
import { useState } from "react"

export const MostrarOcultar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Ocultar mensaje" : "Mostrar mensaje"}
            </button>
            {visible && <p>Me estás viendo!!!</p>}
        </div>
    );
};