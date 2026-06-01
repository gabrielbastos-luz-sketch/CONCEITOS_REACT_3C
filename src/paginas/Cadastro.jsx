import { useState } from "react"

export default function Cadastro({Navegar}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')

    const cadastrar = async () => {
        const resultado = await fetch(
            'http://localhost:3000/usuarios',{
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email, senha, nome})
            
            }
        )
        const data = await resultado.json()
        console.log(data);
        console.log(resultado.ok)
if (!resultado.ok) {
    alert(data.error)
    
} else{
    alert('deu bom paizão')
    navegar('usuarios')
}
    }
    return(
        <div>
            <input type="text" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            />
            <input type="password" 
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            />
            <input type="text" 
            id="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="digite seu nome"
            />

            <h3>{email}</h3>
            <h3>{senha}</h3>

            <button onClick={()=>cadastrar()}>bomboclat</button>
        </div>
    )
}