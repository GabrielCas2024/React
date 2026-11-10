export function InputExample() {
    function manejarCambio(evento){
        console.log('Nuevo valor:', evento.target.value);
    }
    return <input type="text" onChange={manejarCambio}/>
}