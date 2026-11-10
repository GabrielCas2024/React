import { useState } from "react";

/*
Fácil — <ContadorLikes /> · 3 puntos
Crea un contador que:
Empiece en 0.
Muestre el número de likes.
Tenga un botón “Me gusta” que sume uno al pulsarlo.
Muestre el mensaje “¡Ya tienes muchos likes!” cuando el contador llegue a 5 o más.
Usa useState y un evento onClick.
*/
export function ContadorLikes() {
    const [contador, setContador] = useState(0);

    const aumentar = () => {
        setContador((actual) => actual + 1);
    };

    return (
        <div>
            <p>Número de likes: {contador}</p>
            <button onClick={aumentar}>Me gusta</button>
            {contador >= 5 && <p>¡Ya tienes muchos likes!</p>}
        </div>
    );
}
