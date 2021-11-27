//header de la interfaz banca virtual por usuario

import "./BancaHeader.css";
import imagelogo from "../../Assets/logo.jpg";

export default function BancaHeader() {
    return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid p-3 d-flex">
                    <img className="m-4" src={imagelogo} alt="" />
                    <button type="button" class="btn btn-danger p-2 w-25 btn-v">Banca Virtual Persona</button>
                </div>
                <div className="container-fluid bg-danger p-1 ">
                    <a className="navbar-brand text-light m-1" href="...">Bienvenido a la Banca Virtual  de tu Banco Caja Social,tu banco amigo.  </a>
                    <a className="navbar-brand text-light" href="...">Salir de la Sesion</a>
                </div>
            </nav>
    )
}
