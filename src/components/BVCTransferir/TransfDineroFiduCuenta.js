import React from 'react';
import "./TransfCuenta.css";
import ImgTransDineroBVPF from './ImgTransDineroBVPF.jpg';
import Lateral from "./Lateral/Lateral"


function TransfDineroFiduCuenta () {
    return (
        <>
        <div className="paragraphs">
            <div class="row">
                <div className="tituloTrans-sm-3 ">
                <div className="content-heading"><img classNameName="imagCF" src={ImgTransDineroBVPF} alt="Imagen"/></div>
                <p>Transfiere dinero entre cuentas</p>
                </div>
            </div>
            </div>
        <div className="container contenedorFidu d-flex  justify-content-center align-items-center">
            <Lateral/>
            <div className="card-form-container  mb-5">
                <div className="ContenedorFiduT">
                      <div className="form-input">
                      <div className="mb-3 row">
                      <label for="inputCuenta" className="col-sm-3 col-form-label">Selecciona Cuenta de Origen:</label>
                          <div className="col-sm-9">
                          <select className="form-controlTrs"> 
                            <option value="1">Opcion 1</option> 
                            <option value="2">Opcion 2</option> 
                            <option value="3">Opcion 3</option> 
                          </select>
                          </div>
                      <div className="form-input-item mb-4">
                          <label for="inputCuenta" className="col-sm-3 col-form-label">Monto a Transferir: </label>
                          <input type="text" className="form-controlTrs"></input>
                          </div> 
                          <div className="form-input">
                      <div className="mb-3 row">
                      <label for="inputCuenta" className="col-sm-3 col-form-label">Selecciona Cuenta Destino:</label>
                          <div className="col-sm-9">
                          <select className="form-controlTrs"> 
                            <option value="1">Opcion 1</option> 
                            <option value="2">Opcion 2</option> 
                            <option value="3">Opcion 3</option> 
                          </select>
                          </div>
                          </div>
                          </div>
                  </div>
                        <div className="form-input-item mb-4">
                            <div className="row">
                                <div className="col"> 
                                </div>
                                <div className="form-input-item mb-4">
                                <div className="col text-center">
                                <h5>La transferencia tiene costo del 1% sobre el monto a transferir.</h5> 
                                </div>
                                </div> 
                                <div class="row">
                                  <div class="col-md-6  form-group text-center">
                                      <button type="button" class="btn btn-danger">Enviar Transferencia</button>
                                  </div>
                                  <div class="col-md-6 form-group text-center">
                                      <button type="button" class="btn btn-danger">Cancelar</button>
                                  </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        </div>
            </div>
        </div>
        </>
    )
}


export default TransfDineroFiduCuenta;