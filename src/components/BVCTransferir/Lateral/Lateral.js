import React from 'react'
import"./App.css"
import fiducia from "./ImgFiducia.png";
import { Link } from "react-router-dom";




const Lateral = () => {
    
    return (
        <>
            <div className=" col-2 ">
                <div class="border-rounded  ">
                    <div class="p-2 m-3 sidebar-heading border-bottom bg-color-Lateral rounded-3 ">
                        <div className="">
                            <div className=" col-3 justify-content-between">
                                <img className=" img-fluid " src={fiducia} alt="" />
                            </div>
                            <p className="text-danger col-1"> Servicios de Fiduciaria </p>
                        </div>
                        <ul className="flex list-group">
                                <Link to="/CrearCuentaFiduciaria">
                                    Solicitar Fiducuenta.
                                </Link>
                            
                                <Link to="/Transferencias">
                                    Transferir dinero a otra fiducuenta.
                                    </Link>
                                <Link to="/CerrarCuentaFiduciaria ">
                                    CanceLar Fiducuenta.
                                    </Link>
                            </ul>
                    </div>
                </div>      
            </div>
      </>
    );
  };
export default Lateral
