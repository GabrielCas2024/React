import { useState } from "react"
import { usePrevio } from "../hooks/usePrevio";
import { useCounter } from "../hooks/useCounter.jsx";

export const Previo = () => {
    
    const { count, incrementar } = useCounter(0);
    const previo = usePrevio(count);

    return (
        <>
            <h2>Actual: {count}, Anterior: {previo}</h2>
            <button onClick={incrementar}>➕</button>
        </>
    )
}