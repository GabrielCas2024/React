import { useState } from "react";

export default function contador() {
    /*Mi forma de hacer la funcion*/
    /*
    const [total, setTotal] = useState(0);
    return (
        <>
            <h2>{total}</h2>
            <button onClick={() => setTotal(total + 1)}>Sumar</button>
            <button onClick={() => setTotal(total - 1)}>Restar</button>
        </>
    );
    */
   
    //Forma del profesor
    const [numero, setNumero] = useState(0);
    function aumentar() {
        setNumero(numero + 1);
    }
    function decrementar() {
        setNumero(numero - 1);
    }
    return (
        <>
            <h1>{numero}</h1>
            <button onClick={aumentar}>Suma</button>
            <button onClick={decrementar}>Resta</button>
        </>
    );
}