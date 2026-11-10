import { ContadorLikes } from "./componentes/ContadorLikes.jsx";
import { ListaDeTareas } from "./componentes/ListaDeTareas.jsx";
import { PrecioTotal } from "./componentes/PrecioTotal.jsx";
import { TarjetaAlumno } from "./componentes/TarjetaAlumno.jsx";

function App() {
  return (
    <>
      <TarjetaAlumno nombre={"Gabriel Castillo"} curso={"DAWE 2do"} />
      <ContadorLikes />
      <ListaDeTareas />
      <PrecioTotal></PrecioTotal>
    </>
  );
}

export default App
