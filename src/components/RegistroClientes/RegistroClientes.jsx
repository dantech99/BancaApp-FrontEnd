import React from "react";
import './registro.css'
import Boton from "./boton/Boton";
import { Link } from "react-router-dom";


export default function RegistroClientes() {
    const Usuario = "Usuario";
    const Password = "Contraseña";
    const ConfirmP = "Confirmar contraseña";
    return (
        <div className="container contenedor d-flex  justify-content-center align-items-center">
            <div className="card-form-container-One mb-5">
                <div className="card-form-btn">
                <Link to="/RegistroCliente"><button className="btn form-btn">Resgistro Usuarios</button></Link>
                <Link to="/RegistroDatosPersonales"><button className="btn form-btn" >Ingreso Datos personales</button></Link>
                </div>
                <div className="card-form-body">
                    <h4>Registro de Usuarios</h4>
                    <div className="info-card-container">
                        <div className="info-card">
                            <p>Registrarte es muy sencillo, solo sigue los pasos: </p>
                            <ol>
                                <li>Digita tus datos de usuario , una vez tengas los campos diligenciados; dale Click en el  boton Registrar.</li>
                                <li>Una vez hecho el paso 1, dale siguiente para ingresar tus datos Personales y Listo.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="form-input me-5  mt-5">
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-3 col-form-label">{Usuario}</label>
                            <input type="text" className="form-control  w-50"></input>
                        </div>

                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-3 col-form-label">{Password}</label>
                            <input type="password" className="form-control  w-50"></input>
                        </div>

                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-3 col-form-label">{ConfirmP}</label>
                            <input type="password" className="form-control  w-50"></input>
                        </div>

                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-3 col-form-label">Tipo de Usuario</label>
                            <select className="form-select form-control  w-50" aria-label="Default select example">
                                <option selected>Selecciona el tipo de usuario</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                    </div>

                    <div className="botones">
                        <div class="container">
                            <div class="row">
                                <div class="col">

                                </div>
                                <div class="col-md-auto">
                                    <Boton name="Registrarse" />
                                </div>
                                <div class="col">
                                    <div className="d-flex justify-content-end mt-3 icon-text mt-3">
                                    <Link to="/RegistroDatosPersonales"><a href="..."className=" text-danger me-4 " >Siguiente</a></Link>
                                       
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


