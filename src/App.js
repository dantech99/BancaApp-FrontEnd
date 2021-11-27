import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navegacion/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import RegistroClientes from "./components/RegistroClientes/RegistroClientes";
import AddDatosPersonales from "./components/DatosPersonalesCliente/AddDatosPersonales";
import Clientes from "./components/pages/Clientes";
import { Dashboard } from "./components/pages/Dashboard";
import UsuarioInterno from "./components/pages/UsuarioInterno";
import Qr from "./components/bvpQr/bvpQr";
import QrForm from "./components/bvpQrForm/bvpQrForm";
import BancaCard from "./components/BancaVirtualUser/BancaCard/BancaCard";
import CrearFidu from "./components/BVCCrearFiduCuenta/CrearFiducuenta";
import CerrarFidu from "./components/BVCCancelarCuenta/CancelarFiducuenta";
import TransFidu from "./components/BVCTransferir/TransfDineroFiduCuenta";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegistroClinetes" element={<RegistroClientes/>} />
        <Route path="/RegistroDatosPersonales" element={<AddDatosPersonales/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/qr" element={<Qr />} />
        <Route path="/BancaVirtual" element={<BancaCard />} />
        <Route path="/CrearCuentaFiduciaria" element={<CrearFidu />} />
        <Route path="/CerrarCuentaFiduciaria" element={<CerrarFidu />} />
        <Route path="/Transferencias" element={<TransFidu />} />
        <Route path="/QrForm" element={<QrForm />} />
        <Route path="/UsuarioInterno" element={<UsuarioInterno />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
