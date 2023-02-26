import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Cadastro from './components/funcionario/cadastra';
// import Table from './components/tables';
// import Listagem from './components/funcionario/exibe'
// import Atualiza from './components/funcionario/atualiza';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import  Listar  from "./components/funcionario/lista";
import  Cadastra  from "./components/funcionario/cadastra";
import  Atualiza  from "./components/funcionario/atualiza";
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/lista',
        element: <Listar />,
      },
      {
        path: '/cadastra',
        element: <Cadastra />,
      },
      {
        path: '/atualiza/:uuid',
        element: <Atualiza />,
      },
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);

