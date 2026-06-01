import { useState } from 'react'
import './App.css'
import Login from './paginas/Login'
import Cadastro from './paginas/Cadastro'
import Usuarios from './paginas/Usuarios'


function App() {
  const [tela, setTela] = useState('login')
  const trocarDeTela = (pagina) => {
    setTela(pagina)
  }

  const renderizar = ()=>{
    if(tela === 'Login'){
      return <Login navegar = {trocarDeTela}/>
      } else if(tela === 'Cadastro'){
        return <Cadastro navegar = {trocarDeTela}/>
      } else if (tela === 'Usuarios'){
        return <Usuarios navegar = {trocarDeTela}/>
      } else {
        return <Login navegar = {trocarDeTela}/>
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
