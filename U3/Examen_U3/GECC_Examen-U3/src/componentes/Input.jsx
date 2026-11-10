export function Input({ nombre, setNombre }) {
    return (
        <>
            <label htmlFor="nombre">Ingresa el Nombre a filtrar</label>
            <input
                id="nombre"
                type="text"
                value={nombre}
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}
            />
        </>
    );
}