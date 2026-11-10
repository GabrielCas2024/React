import { useEffect, useState } from "react"

export const reloj = () => {
    const [time, setTime] = useState
    useEffect(() => {
        const intervalo = setInterval(()=> setTime(t=> t+1),1000);
        return ()=> clearInterval(intervalo);
    },[]

    );
    return <p>Tiempo:{timepo}</p>
}