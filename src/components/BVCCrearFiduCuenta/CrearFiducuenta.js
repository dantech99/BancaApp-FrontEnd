import React from 'react';
import "./CrearFidu.css";
import Lateral from "./Lateral/Lateral"


function CrearFiduCuenta () {
    return (
        <>
        <div>
        <div className="paragraphs">
            <div class="row">
                <div className="titulo-sm-3 ">
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
                      <label for="inputCuenta" className="col-sm-3 col-form-label">Selecciona tu Fondo de Inversion:</label>
                          <div className="col-sm-9">
                          <select className="form-controlS"> 
                            <option value="1">Opcion 1</option> 
                            <option value="2">Opcion 2</option> 
                            <option value="3">Opcion 3</option> 
                          </select>
                          </div>
                          <div className="form-input-item mb-4">
                          <label for="inputCuenta" className="col-sm-3 col-form-label">Producto Origen: </label>
                          <input type="text" className="form-controlS"></input>
                      </div>
                      <div className="form-input-item mb-4">
                          <label for="inputCuenta" className="col-sm-3 col-form-label">Valor: </label>
                          <input type="text" className="form-controlS"placeholder="Monto Minimo $50.000"></input>
                          </div> 
                  </div>
                        <div className="form-input-item mb-4">
                            <div className="row">
                                <div className="col"> 
                                </div>
                                <div class="container">
                              <div className="col-auto">
                              <div className="col text-center">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" for="autoSizingCheck">Acepto términos y condiciones</label>
                              </div>
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
                        </div>
                </div>
           
            </div> 
        </div>
        
        </>
    )
}


export default CrearFiduCuenta;