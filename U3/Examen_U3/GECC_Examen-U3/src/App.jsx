import { useEffect, useState } from 'react';
import './App.css';
import ObtenerDatos from './componentes/ObtenerDatos';
import { VisorNombres } from './componentes/VisorNombres';

function App() {
  const [datosApi, setDatosApi] = useState([]);

  useEffect(() => {
    const recoger = async () => {
      try {
        const datosJson = await ObtenerDatos();
        setDatosApi(datosJson);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        setDatosApi([]);
      }
    };

    recoger();
  }, []);

  return (
    <>
      <section>
        <VisorNombres datos_api={datosApi} />
      </section>
    </>
  );
}

export default App;
