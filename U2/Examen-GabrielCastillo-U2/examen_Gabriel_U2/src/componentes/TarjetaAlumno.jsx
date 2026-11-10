/*Muy fácil — <TarjetaAlumno /> · 2 puntos
Crea un componente que reciba estas props:
nombre
curso*/
export function TarjetaAlumno({ nombre, curso }) {
    return (
        <div>
            <h1 id="titulo-bienvenida">BIENVENIDO {nombre.toUpperCase()}</h1>
            <p>curso: {curso}</p>
        </div>
    );
}