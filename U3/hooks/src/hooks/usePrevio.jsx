import { useEffect, useRef } from "react"

export const usePrevio = (valor) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = valor;
    }, [valor])

    return ref.current;
}