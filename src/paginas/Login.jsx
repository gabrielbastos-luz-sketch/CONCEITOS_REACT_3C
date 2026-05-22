import { useState } from "react"

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

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

            <h3>{email}</h3>
            <h3>{senha}</h3>
        </div>
    )
}