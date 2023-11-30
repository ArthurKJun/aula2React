import { useState } from "react"

export default function Cadastro(){
   
    const[nome, setNome] = useState('Maria')
    const[email, setEmail] = useState('maria@gmail.com')
    const[fone, setFone] = useState('47 99987-5214')

    return(
        <div className="container">
            
            <h2 className="text-center">Novo Contato</h2>
            
            <label className="form-label">Informe nome</label>
            <input className="form-control" type="text" placeholder="Informe nome" value={nome}></input>
 
            <label className="form-label">Informe email</label>
            <input className="form-control" type="text" placeholder="Informe nome" value={email}></input>
 
            <label className="form-label">Informe telefone</label>
            <input className="form-control" type="text" placeholder="Informe nome" value={fone}></input>
 
            <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-primary">Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div>

        </div>
    )
}