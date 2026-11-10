import { useCallback, useState } from "react"

export const ContadorCallback = () =>{
    const [contador,setContador] = useState(0);

    const incrementar = useCallback(()=>{
        setContador(c => c+1);
    },[])

    return <Hijo onIncrementar = {incrementar}/>
}
const Hijo = ({onIncrementar}
    
)=> {
    console.log("El hijo se ha renderizado");
    return <button onClick={onIncrementar}>Incrementar</button>
}