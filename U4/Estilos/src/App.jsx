import { useState } from 'react'
import { Button } from './components/Button'
import './App.css'
import { Card } from './components/Card'
import {BotonStyleGrande} from './components/BotonStyled.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button></Button>
    <Card></Card>
    <BotonStyleGrande></BotonStyleGrande>
    </>
  )
}

export default App
