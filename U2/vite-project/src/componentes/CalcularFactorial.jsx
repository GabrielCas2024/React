import { useState } from "react";

export default function CalcularFactorial({ text }, { numero }) {
    const [texto, setTexto] = useState("");
    const [numero, setNumero] = useState(5);
    const factorial = (num) => {
        let resultado = num;
        for (let i = 1; i <= num; i++) {
            resultado *= i;
        }
        return resultado;
    }
    const valor = useMemo(() => factorial(numero), [numero]);
    return (
        <>
        <input type="number" onChange={(e)=> setNumero(e.target.value)}/>
        <input type="text" onChange={(e) => setTexto(e.target.value)} />
        <p> Factorial de {numero} es {valor}</p>
        </>
    )
}