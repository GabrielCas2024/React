import { useLocalStorage } from "../hooks/useLocalStorage"

export const LocalStorage = () => {
    const [nombre, setNombre] = useLocalStorage("nombre","");
    return(
        <>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <h2>Hola {nombre} </h2>
        </>
    )
}