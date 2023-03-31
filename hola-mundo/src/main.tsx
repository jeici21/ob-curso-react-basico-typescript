import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
//Importante: los estilos propios, deben ir debajo del bootstrap para que no los pise
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)