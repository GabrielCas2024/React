import { useState } from 'react'
import Mensaje from './componentes/Mensaje.jsx';
import MiComponente from './componentes/MiComponente.jsx';
import { TarjetaUsuario } from './componentes/TarjetaUsuario';
import { InputExample } from './componentes/InputExample.jsx';
import BotonMostrarTexto from './componentes/BotonMostrarTexto.jsx';
import Contador from './componentes/Contador.jsx';
import InputControlado from './componentes/InputControlado.jsx';
/*Importes de la clase dia 8 de Octubre*/
import { MostrarOcultar } from './ux/MostrarOcultar.jsx';
import { Chistes } from './ux/chistes.jsx';
import './App.css';
/*Importes de la clase dia 13 de Octubre*/
import NumerosPrimos_UseMemo from './componentes/NumerosPrimos_UseMemo.jsx';
import CalcularFactorial from './componentes/CalcularFactorial.jsx';

/*function App() {
  //return <h1 className='title'>Hola Mundo</h1>
  //return <a href="#">tipos</a>;
  //return <img src={heroImg} alt='Logo'/>
  const [contador, setContador] = useState(0);
  return (
    <button ClassName='centro' onClick={()=> setContador(contador+1)}>{contador}</button>
  )
}*/

export function Bienvenida({ color }) {
  const [titulo, setTitulo] = useState('white')

  return (
    <>
      <h1 style={{ color: titulo }}>Bienvenida</h1>
      <button onClick={() => setTitulo(color)}>cambiar color</button>
    </>
  )
}


function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      {/*<MostrarOcultar/>
        <Chistes />
        <NumerosPrimos_UseMemo numero={5} />
      */}
      <CalcularFactorial text={"hola"} numero={5} />
    </>
  )
}

export default App
//#########################################################
//Uso de UseMemo
/*Funcion para realizar un calculo*/
/*
useMemo(()=>{
return resultado;
},[dependencias]
);
###########################################################
*/

