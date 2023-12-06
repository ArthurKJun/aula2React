import { useEffect, useState } from 'react';
 
export default function Consulta(){
    const [contatos, setContatos] = useState([])
  function Consultar(){
    fetch("http://localhost:8080/contatos")
    .then(data => data.json())
    .then(response => setContatos(response))
  }
    useEffect(Consultar,[])
 
    return(
        <div>
            <h2>Consulta de Contatos</h2>
            {
                contatos.map(ct => <p>{ct.nome}</p>)
            }
        </div>
    )
 
}