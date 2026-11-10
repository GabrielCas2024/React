import { useEffect, useState } from "react"

export const useLocalStorage = (key, v_Inicial) => {
    const [valor, setValor] = useState(() => {
        const guardado = localStorage.getItem(key);
        return guardado ? JSON.parse(guardado) : v_Inicial;
    })

    useEffect (()=>{
        localStorage.setItem(key,JSON.stringify(valor))
    },[key,valor])

    return[valor,setValor];
}