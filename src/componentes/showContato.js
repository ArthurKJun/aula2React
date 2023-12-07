export default function ShowContato(props) {
    
    function excluir(){
        fetch(`http://localhost:8080/contatos/${props.contato.id}`,
        {
            method: 'DELETE'
        })
        .then(x => alert('contato excluido com sucesso'))
    }
    
    return (
       
        <div className="conatiner">
             <hr/>
            <div className="card col-md-4">
                
                <div className="card-body">
                    
                    <h3 className="card-title">Contato</h3>

                    <img src="https://th.bing.com/th?id=ORMS.a785723db1ece20078fe273732e99bf0&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0" 
                    className="card-img-top" alt="..."></img>
                    
                    <div className="card-text" >
                        <span className="fw-bold">Nome: </span>
                        <span className="">{props.contato.nome}</span>
                    </div>

                    <div className="card-text" >
                        <span className="fw-bold">Email: </span>
                        <span>{props.contato.email}</span>
                    </div>

                    <div className="card-text" >
                        <span className="fw-bold">Fone: </span>
                        <span>{props.contato.fone}</span>
                    </div>

                    <div className="mt-3 d-flex justify-content-between">
                        <button
                            className="btn btn-outline-primary"
                        >Editar</button>

                        <button
                            onClick={excluir}
                            className="btn btn-outline-primary"
                        >Excluir</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}