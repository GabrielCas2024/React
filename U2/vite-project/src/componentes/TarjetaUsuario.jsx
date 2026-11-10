export function TarjetaUsuario({ nombre, edad, correo }) {
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo?.trim())
    if (correoValido) {
        return (
            <>
                <p>Tu nombre es{nombre}</p>
                <p>Tu apellido es {edad}</p>
                <p>Tu correo es: {correo}</p>
            </>
        )
    } else {
        return alert("El correo no tiene un formato válido");
    }
}