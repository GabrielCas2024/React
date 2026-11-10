import { useEffect, useState } from 'react'
import './App.css'
import { Input } from './components/Input';

function App() {
  const [datos, setDatos] = useState([]);
  const [buscador,setBuscador] = useState("");
  //Cargar los datos al abrirse el componente
  useEffect(()=>{
    setDatos(async () => {
      let responsive = await fetch("https://jsonplaceholder.typicode.com/posts");
      let datos = await responsive.json();
      return datos;
    })
  },[]);

  return (
    <>
    <Input valor={buscador} setValor={setBuscador} ></Input>
    </>
  )
}

export default App
