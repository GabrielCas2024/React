import { useState } from "react";
import {Input} from "./Input";
export function Padre() {
    const[nombre,setNombre]= useState("");
    const[apellido,setApellido]= useState("");
    return (
        <>
            <div>
                <label>Nombre</label>
                <Input valor={nombre} setValor={setNombre}></Input>
            </div>
            <div>
                <label>Apellido</label>
                <Input valor={apellido} setValor={setApellido}></Input>
            </div>

            <p>{nombre} {apellido}</p>
        </>
    )
}
export default Padre;