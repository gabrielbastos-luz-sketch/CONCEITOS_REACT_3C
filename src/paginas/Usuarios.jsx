import { useEffect, useState } from "react"
export default function Usuarios(){
    const [usuarios, setUsuarios] = useState([])
    const [cont, setCont] = useState(0)
    const [modal, setModal] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        document.title = `count: ${cont}`
        buscarUsuarios()
    }, [cont])

    const buscarUsuarios = async ()=>{
        const resultado = await fetch("http://localhost:3000/usuarios")
        const data = await resultado.json()
        console.log(data)
        setUsuarios(data)
    }

    const editar = (usuario) => {
        console.log('editando', usuario)
        setModal(true)
        setEmail(usuario.email)
        setSenha(usuario.senha)
        setNome(usuario.nome)
        setId(usuario.id)
    }

    const confirmarEdicao = async () => {
    const resultado = await fetch(
        `http://localhost:3000/usuarios/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                nome,
                senha
            })
        }
    )

    const data = await resultado.json()

    console.log(data)

    setModal(false)

    buscarUsuarios()
}
    const deletar = async (usuario) => {
    const resultado = await fetch(
        `http://localhost:3000/usuarios/${usuario.id}`,
        {
            method: 'DELETE'
        }
    )

    console.log(resultado.status)

    buscarUsuarios()
}
    return (
        <div>
            <h1>Usuarios</h1>
            {cont}
            <button onClick={() => aumenta()}>aumenta</button>
            
            <br />
            <br />

            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nome}, 
                    {usuario.email},
                    <br />

                    STATUS: {usuario.ativo ? 'ativo' : 'inativo'}
                    <br />
                    <button onClick={() => editar(usuario)}>Editar</button>
                    <button onClick={() => deletar(usuario)}>Deletar</button>
                    <br />

                    
                    </li>
                ))}

                <li></li>
            </ul>
            

            {modal && (
                <div className="fundo-modal">
                    <div className="modal-content">
                    <h1>Editar</h1>
                    <input type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="digite o Email"
            />
            <input type="text"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="digite a Senha"
            />
            <input type="text" id="nome"
            value={nome}
            placeholder="digite seu nome"
            onChange={(e)=>setSenha(e.target.value)} />
            <button onClick={()=> setModal(false)}>fechar</button>
            <button onClick={() => confirmarEdicao()}>confirmar edição</button>

                    </div>
                </div>
            )}
           
            {}
        </div>
    )
}