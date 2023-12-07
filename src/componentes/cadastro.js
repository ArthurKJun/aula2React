import { useState } from "react"

export default function Cadastro(){
   
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[fone, setFone] = useState('')

    function salvar(){

       
    	if(nome === ''){
    		alert('Informe nome')    		
    		return
    	}
       
        let obj = {nome, email, fone}

        fetch('http://localhost:8080/contatos',
        {
            method: 'post',
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify(obj)

        })
        .then(x=> alert('contato criado com sucesso'))        
    }
    return(
        <div className="container">
            
            <h2 className="text-center">Novo Contato</h2>
            
            <label className="form-label">Informe nome</label>
            <input 
                className="form-control" 
                type="text" 
                placeholder="Informe nome" 
                // value={nome}
                onChange={txt => setNome(txt.target.value)}
            />
 
            <label className="form-label">Informe email</label>
            <input 
                className="form-control" 
                type="text" 
                placeholder="Informe email" 
                // value={email}
                onChange={txt => setEmail(txt.target.value)}
            />
 
            <label className="form-label">Informe telefone</label>
            <input 
                className="form-control" 
                type="text" 
                placeholder="Informe telefone" 
                // value={fone}
                onChange={txt => setFone(txt.target.value)}
            />
 
            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar} className="btn btn-primary">Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div>
            
            {/* <ShowContato
                contato={{nome, email, fone}}
            /> */}

        </div>
    )
}