import { useEffect, useState } from "react"
export default function Usuarios(){
    const [usuarios, setUsuarios] = useState(0)
    const [cont, setCont] = useState(0)

    const aumenta = () => {
        setCont(cont + 1)
    }

    useEffect(() => {
        document.title = `count: ${cont}`

        const buscarUsuarios = async ()=>{
            const resposta = await fetch('http://localhost:3000/usuarios')
            const usuarios = await resposta.json()
            console.log(usuarios)
        }
        buscarUsuarios()
    }, [cont])


    return (
        <div>
            <h1>Usuarios</h1>
            {cont}
            <button onClick={() => aumenta()}>aumenta</button>
            
            {}
        </div>
    )
}