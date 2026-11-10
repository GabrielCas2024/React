export default function MiComponente() {
  const [dato, setDato] = useState(null);
  //Montaje + Actualizacion
  useEffect(() => {
    console.log("Montado o actualizado");
    //Desmontaje (cleanup)
    return () => {
      console.log("Componente desmontado");
    };
  }, [])//[] => significa que solo se ejecuta al montar y desmontar
  return <h1>Hola</h1>
}