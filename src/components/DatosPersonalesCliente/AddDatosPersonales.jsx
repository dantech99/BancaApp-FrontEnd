import React from "react"
import './DatosPC.css'
import Boton from "../RegistroClientes/boton/Boton"
import { Link } from "react-router-dom";



export default function  AddDatosPersonales() {
    const Nombres =   "Nombres:";
    const Apellidos = "Apellidos:";
    const Documento = "Tipo de documento de identidad:";
    const NumID = "Numero de Identificacion:";
    const FechaN = "Fecha de nacimiento";
    const FExpedicion = "Fecha de expedición del documento:";
    const email = "Dirección de correo electrónico";
    const DF = "Dirección física: ";
    const city = "Ciudad";
    const Number = "Numero"
    return (
        <div className="container contenedor d-flex  justify-content-center align-items-center mt-3 mb-3">
            <div className="card-form-container  mb-5">
                <div className="card-form-btn">
                <Link to="/RegistroCliente"><button className="btn form-btn">Registro Usuarios</button></Link>
                <Link to="/RegistroDatosPersonales"><button className="btn form-btn" >Ingreso Datos personales</button></Link>
                </div>
                <div className="card-form-body">
                <h4>Datos personales del Cliente</h4>

                    <div className="form-input">
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-2 col-form-label">{Nombres}</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-2 col-form-label">{Apellidos}</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-form-label ms-4">{Documento}</label>
                            <div class="form-check form-check-inline d-flex">
                                <label className="form-check-label ms-3" for="inlineCheckbox1" >CC</label>
                                <input className="form-check-input ms-5 me-5" type="checkbox" id="inlineCheckbox1" value="option1" />
                            </div>
                            <div className="form-check form-check-inline  d-flex">
                                <label className="form-check-label me-5" for="inlineCheckbox2">Pasaporte</label>
                                <input className="form-check-input me-5" type="checkbox" id="inlineCheckbox2" value="option2" />
                                
                            </div>
                            <div className="form-check form-check-inline  d-flex">
                                <label class="form-check-label me-5" for="inlineCheckbox3">CE</label>
                                <input className="form-check-input me-5" type="checkbox" id="inlineCheckbox3" value="option3"/>
                                
                            </div>
                        </div>
                        <div className="form-input-item mb-4 ">
                            <label for="staticEmail" className="col-sm-2 col-form-label">{NumID}</label>
                            <input type="number" className="form-control w-50"></input>

                            <label for="staticEmail" className="col-sm-3 col-form-label">{FechaN}</label>
                            <input type="date" className="form-control me-5 w-25"></input>
                        </div>
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-2 me-4 col-form-label">{FExpedicion}</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-2 me-4 col-form-label">{email}</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="form-input-item mb-4 ">
                        <label for="staticEmail" className="col-sm-2 col-form-label">{DF}</label>
                            <label for="staticEmail" className="col-sm-2 col-form-label">{city}</label>
                            <input type="text" className="form-control w-25"></input>

                            <label for="staticEmail" className="col-sm-1 col-form-label">{Number}</label>
                            <input type="number" className="form-control me-5 w-50"></input>
                        </div>

                       

                    </div>
                        <div className="container d-flex justify-content-center">
                            <Boton name="Finalizar registro"/>
                        </div>
                </div>
            </div>
        </div>
    )
}