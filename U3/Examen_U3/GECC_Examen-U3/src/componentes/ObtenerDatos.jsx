//Variable que contiene la url

export async function ObtenerDatos(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await response.json();
    return datos;
}
export default ObtenerDatos;