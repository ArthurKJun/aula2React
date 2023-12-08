import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='text-center'>
        <h1>Agenda</h1>
        <hr/>
        <nav>
          <Link to='/contatos/cadastrar'>Cadastro</Link> &nbsp;
          <Link to='/contatos/consultar'>Consulta</Link>
        </nav>
        <hr/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
