import { useState } from 'react'
import './App.css'

function App() {
  const [tela, setTela] = useState('login')
  const trocarDeTela = (pagina) => {
    setTela(pagina)

    
  }

  return (
    <>
      <button onClick={trocarDeTela('cadastro')}>Cadastro</button>
      <button onClick={trocarDeTela('login')}>login</button>
    </>
  )
}

export default App
