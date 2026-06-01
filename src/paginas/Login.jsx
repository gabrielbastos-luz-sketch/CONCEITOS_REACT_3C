import { useState } from "react"

export default function Login({ navegar }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const entrar = async () => {
        const resultado = await fetch(
            'http://localhost:3000/login', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, senha })

        }
        )
        const data = await resultado.json()
        console.log(data);
        console.log(resultado.ok)
        if (!resultado.ok) {
            alert(data.error)

        } else {
            navegar('Usuarios')
        }
    }
    return (
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

            <button onClick={() => entrar()}>bomboclat</button>
        </div>
    )
}