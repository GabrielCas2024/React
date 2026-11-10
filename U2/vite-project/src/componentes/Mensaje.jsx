
export default function Mensaje(tipo) {

  let colorLetra = "green"
  if (tipo === "error") {
    colorLetra = "red"
  }
  return (
    <p style={{ color: colorLetra }}>mi mensaje</p>
  )

}