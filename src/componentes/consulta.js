import { useEffect, useState } from 'react';
import ShowContato from './showContato';
 
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
           <div className='d-flex flex-wrap'>
            {
                contatos.map(ct => <ShowContato contato={ct}/>)
            }
            </div>
        </div>
    )
 
}