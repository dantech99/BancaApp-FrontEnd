import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import imagelogo from "../../assets/logo.jpg";

const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={imagelogo} width="224" height="60" alt="" />
        </Link>

        <div>
          <Link to="/Login" className="btn btn-danger m-2">
            Login
          </Link>
<<<<<<< HEAD
          <Link to="/Registrarse" className="btn btn-danger m-2">
            Registrate
          </Link>
=======
          {/* <Link to="/Registrarse" className="btn btn-danger m-2">
            Registrate
          </Link> */}
>>>>>>> 21f54e3587b356e3df6fd93df94fece5d4ba3b35
          <Link to="/" className="btn btn-danger m-2">
            Inicio
          </Link>
        </div>
      </nav>
      <nav className="navbar navbar-primary bg-color">
        <p className="m-2">Bienvenido a la plataforma del Banco Caja Social</p>
      </nav>
    </>
  );
};

export default navbar;
