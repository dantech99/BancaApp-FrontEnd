import React from 'react';
import "./CancelarFidu.css";
import ImgCancelarCuentaBVPF from './ImgCancelarCuentaBVPF.jpg';
import Lateral from "./Lateral/Lateral"


function CancelarFiducuenta () {
    return (
        <>
        <div className="paragraphs">
            <div class="row">
                <div className="tituloCan-sm-3 ">
                <div className="content-heading"><img classNameName="imagCF" src={ImgCancelarCuentaBVPF} alt="Imagen"/></div>
                    <p> Crea tu Fiducuenta​ en pocos pasos</p>
                </div>
            </div>
            </div>
        <div className="container contenedorFidu d-flex  justify-content-center align-items-center">
            <Lateral/>
            <div className="card-form-container  mb-5">
                <div className="ContenedorFidu">
                      <div className="form-input">
                      <div className="mb-3 row">
                      <label for="inputCuenta" className="col-sm-3 col-form-label">Seleccionar Cuenta:</label>
                          <div className="col-sm-9">
                          <select className="form-controlCan"> 
                            <option value="1">Opcion 1</option> 
                            <option value="2">Opcion 2</option> 
                            <option value="3">Opcion 3</option> 
                          </select>
                          </div>
                          </div>
                        <div className="mb-3 row">
                            <label for="exampleFormControlTextarea1" className="col-sm-3 col-form-label">Motivo de cancelacion:</label>
                            <div className="col-sm">
                            <textarea className="form-TextACan" id="exampleFormControlTextarea1" rows="5" placeholder="Máximo 200 palabras"></textarea>
                            </div>    
                            </div> 
                  </div>
                        <div className="form-input-item mb-4">
                              <div className="col text-center">
                                <h5>La aprobacion de su solicitud será enviada a su correo electronico.</h5> 
                                </div>
                                </div>
                                <div class="row">
                              <div class="col-md-6  form-group text-center">
                                  <button type="button" class="btn btn-danger">Aceptar</button>
                              </div>
                              <div class="col-md-6 form-group text-center">
                                  <button type="button" class="btn btn-danger">Cancelar</button>
                              </div>
                          </div>
                         </div>     
                         </div>         
        </div>
        </>
    )
}


export default CancelarFiducuenta;