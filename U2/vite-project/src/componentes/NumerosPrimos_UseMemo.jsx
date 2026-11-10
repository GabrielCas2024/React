import { useMemo } from "react";

export default function NumerosPrimos_UseMemo({ numero }) {
    const esPrimo = (n) => {
        console.log("Calculando...")
        for (let index = 2; index < n; index++) {
            if (n % index === 0) return false;
        }
        return n > 1;
    };

    const valor = useMemo(() => esPrimo(numero), [numero]);

    return <h3>{numero} {valor ? "Es primo " : "No es primo"}</h3>
}