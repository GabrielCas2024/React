import { useState } from "react"

export const Input = ({valor,setValor}) => {
    return(
        < input value={valor} onChange={(e)=>{setValor(e.target.value)}} />
    )
}