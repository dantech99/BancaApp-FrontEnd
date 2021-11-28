import React from 'react';
import "./BVCliente.css";
import ImgCelFBVPF from './ImgCelFBVPF.jpg';
import { Link } from "react-router-dom";
import Lateral from "./Lateral/Lateral"


function BVCliente () {
    return (
        <>
        <div className="container contenedorBVCliente d-flex  justify-content-center align-items-center">
        <Lateral/>
        <div className="paragraphs">
                <div class="row">
                    <div className="titulo-sm-3 ">
                    <p> Invierte tu dinero en FIDUCUENTA​</p>
                    </div>
                    <div className="paragraphs">
                        <div className="row">
                            <h7> Invierte desde $50.000.​</h7>
                            <h7>Tú decides el tiempo, puedes retirar el dinero cuando desees sin plazo de permanencia.​</h7>
                            <h7>Por internet desde la Sucursal Virtual Personas.</h7>
                            <h7>Fácil y en pocos clics.​</h7>
                        </div> 
                       
                        <div class="row">
                              <div class="col-md-6  form-group text-center">
                                  <h5 >Horario de apertura en la Sucursal Virtual</h5>
                                  <h5 >Personas de lunes a viernes de 6:00 a.m a 9:00 p.m</h5>
                              </div>
                              <div class="col-md-6 form-group text-center">
                              <div className="content-heading"><img classNameName="imagBVC" src={ImgCelFBVPF} alt="Imagen"/></div>
                              </div>
                              </div> 
                              <div class="row">
                              <div class="col-md-6  form-group text-center">
                              <Link class="btn btn-danger" to="/CrearCuentaFiduciaria">Solicitalo Aquí</Link> 
                              </div>
                              <div class="col-md-6 form-group text-center">
                              <h5 >Hazlo fácil y en menos de 5 minutos</h5>
                              </div>
                              </div>   
                    </div>
                </div>
        </div>
        </div>
        </>
    )
}
        
export default BVCliente;