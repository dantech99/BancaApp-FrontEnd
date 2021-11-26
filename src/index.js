import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BotonRegresar from './Components/BVP Extracto/BotonRegresar.jsx'
import DetalleProducto from './Components/BVP Extracto/BVExtracto/DetalleProducto.jsx'
import GenerarExtractoTitulo from './Components/BVP Extracto/GenerarExtractoTitulo.jsx'
import RectanguloGenerarExtracto from './Components/BVP Extracto/RectanguloGenerarExtracto.jsx'
import ExtractoProductoSel from './Components/BVP Extracto/BVExtracto_Cuenta/ExtractoProductoSel.jsx'
import EstadoCuenta from './Components/BVP Extracto/BVExtracto_Formato/EstadoCuenta.jsx'
import BancaHeader from './Components/BancaHeader/BancaHeader.jsx'
import Footer from './Components/Footer/Footer.js'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BancaHeader />
    <BotonRegresar />
    <EstadoCuenta />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
