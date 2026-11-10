import { useCounter } from "../hooks/useCounter"

export const Contador = () =>{
    const {count, incrementar,decrementar,resetear} = useCounter(5);
    return(
        <>
            <h3>Valor: {count}</h3>
            <button onClick={incrementar}>➕</button>
            <button onClick={decrementar}>➖</button>      
            <button onClick={resetear}>🔁</button>
        </>
    )
}