import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navegacion/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Registrarse from "./components/pages/Registrarse";
import Qr from "./components/pages/bvpQr";
import QrForm from "./components/pages/bvpQrForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/qr" element={<Qr />} />
        <Route path="/qrForm" element={<QrForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
