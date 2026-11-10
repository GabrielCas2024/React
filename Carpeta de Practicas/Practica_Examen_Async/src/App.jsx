import { useEffect, useState } from 'react';
import './App.css'

import GetUsers from './componentes/GetUsers';
import { MostrarUsers } from './componentes/MostrarUsers';
const url = "https://jsonplaceholder.typicode.com/users";
let users = [];
function App() {
  //Primero es Crear las variables donde se almacenara el dato final
  const [datos_api, setDatos_api] = useState([]);//[] => Los datos de las Api son array con objetos

  useEffect(() => {
    async function cargarUsuarios() {
      const usuarios = await GetUsers(url);
      setDatos_api(usuarios);
    }

    cargarUsuarios();
  }, []);

  
  return (
    <>
      <MostrarUsers datos_api={datos_api}></MostrarUsers>
    </>
  )
}

export default App
