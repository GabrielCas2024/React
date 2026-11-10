export function Input(valor, setValor) {
    return (
        <div>
            <label></label>
            <input type="text" value={valor} onChange={(e) => { setValor(e.target.value) }} />
        </div>
    )
}