import { useState } from 'react'
import './App.css'
import Login from './paginas/Login'
import Cadastro from './paginas/cadastro'
import Usuarios from './paginas/Usuarios'


function App() {
  const [tela, setTela] = useState('login')
  const trocarDeTela = (pagina) => {
    setTela(pagina)
  }

  const renderizar = ()=>{
    if(tela === 'Login'){
      return <Login/>
      } else if(tela === 'Cadastro'){
        return <Cadastro/>
      } else if (tela === 'Usuarios'){
        return <Usuarios/>
      } else {
        return <Login/>
      }
      }
    
  
    return(
      <>
      <button onClick={() => trocarDeTela('Cadastro')}>Cadastro</button>
      <button onClick={() => trocarDeTela('Login')}>Login</button>
      <button onClick={() => trocarDeTela('Usuarios')}>Usuários</button>
      <hr />
      {renderizar()}
      </>
      
    )
  }

export default App
