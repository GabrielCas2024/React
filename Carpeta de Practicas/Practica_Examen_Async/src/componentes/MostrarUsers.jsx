//Parte 2 = Trataremos los datos de la funcion para poder mostrarlos
export function MostrarUsers({datos_api}) {
    const UsersHtml = datos_api.map((user) => {
        return (
            //La key es necesaria ya que esamos devolviendo un array, con el id
            //es mas facil realizar una busqueda en un futuro.
            <div key={user.id}>
                <h2>Nombre del Usuario: {user.name}</h2>
            </div>
        )
    })

    return UsersHtml;
}