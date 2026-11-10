export function InputLista(valor,setValor){
    return(
        <>
        <input value={valor} onChange={(e)=>setValor(e.target.value)} />
        </>
    )
}