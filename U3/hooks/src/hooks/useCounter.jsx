import { useState } from "react"

export const useCounter = (inicial = 0) => {
    const [count, setCount] = useState(inicial);

    const incrementar = () => setCount(c => c + 1);
    const decrementar = () => setCount(count - 1);
    const resetear = () => setCount(inicial);

    return { count, incrementar, decrementar, resetear };
}