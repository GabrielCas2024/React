import { useFetch } from "../hooks/useFetch"

export const File = () => {
    const { datos, carga, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (carga) return <h2>Cargando....</h2>

    if (error) return <h2>{error.message}</h2>
    
    return (
        <ul>
            {datos.map(usuario => (
                <li key={usuario.id}>{usuario.name}</li>
            ))}
        </ul>
    )
}