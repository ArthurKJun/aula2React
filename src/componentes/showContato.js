export default function ShowContato(props) {
    return (
       
        <div className="conatiner">
             <hr/>
            <div className="card">
                
                <div className="card-body">
                    
                    <h3 className="card-title">Contato</h3>
                    
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

                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}