import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cadastro from './componentes/cadastro';
import Consulta from './componentes/consulta';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Edicao from './componentes/edicao';

const rotas = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children:[
   {
     path : "/contatos/cadastrar",
     element: <Cadastro/>,
   },
   {
     path : "/contatos/consultar",
     element: <Consulta/>,
   },
   {
     path : "/contatos/editar/:idContato",
     element: <Edicao/>,
   },
   
  ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={rotas}/>
  </React.StrictMode>
);

