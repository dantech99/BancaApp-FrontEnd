import React from 'react'
import"../App.css"
import fiducia from "../imagenes/ImgFiducia.png";




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
                        <div class="list text-capitalize text-black">
                            <p>Solicitar Fiducuenta</p>
                            <p>Transferir dinero a otra Fiducuenta</p>
                            <p>Cancelar Fiducuenta</p>

                        </div>
                    </div>
                </div>      
            </div>
      </>
    );
  };
export default Lateral