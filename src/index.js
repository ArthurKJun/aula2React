import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cadastro from './componentes/cadastro';
import Consulta from './componentes/consulta';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
   
  ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={rotas}/>
  </React.StrictMode>
);

