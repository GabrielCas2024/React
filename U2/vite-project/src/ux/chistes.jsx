import { useEffect } from "react";
import { useState } from "react";

async function ObtenerChistes() {
    try {
        const chistes = await fetch("https://api.chucknorris.io/jokes/random");
        return await chistes.json();
    } catch (error) {
        console.log("Erro al obtener los datos, revisar la sintaxis")
    }
}

export const Chistes = () => {
    const [chistes, setChiste] = useState(ObtenerChistes());
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(dato => setChiste(dato.value))
    }, []
    )
    return <h1>{chistes}</h1>
}