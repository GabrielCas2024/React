import { useState } from "react"

const Input2 = () => {
    const [valor, setValor] = useState("");
    return (
        <>
            <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
            <p>{valor}</p>
        </>
    )
}
export default Input2;