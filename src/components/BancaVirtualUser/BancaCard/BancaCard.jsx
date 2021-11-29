import "./BancaCard.css"
import { Link } from "react-router-dom";
import BancaHeader from "../BancaHeader/BancaHeader";

//importacion de imagenes
import ImagenEascoger from "./ImgEscogerBancaVirtual.png";
import ImgFiducia from "./ImgFiducia.png";
import ImgExtracto from "./imgExtracto.png";
import imgQueja from "./ImgQueja.png";
import ImgFondo from "./ImgFondoBancas.jpg"

const BancaCard = () => {
    return (
        <>
        <BancaHeader/>
        <div className="container-fluid section">
            <div className="container section-body justify-content-center d-flex">
                <img src={ImagenEascoger} alt="Imagen escoger banca virtual" />
                <h3>Selecciona uno de los servicios disponibles en tu banca virtual.</h3>
            </div>

            <div className="d-flex ">

                <div>
                    <div className="d-flex card-sf ">
                        <div className="card-img">
                            <img src={ImgFiducia} alt="imagen de fiducia"  />
                        </div>
                        <div className="card-text">
                            <p>Servicios de Fiduciaria</p>
                            <ul className="flex list-group">
                                <Link to="/Fiducia">
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

                <div className="d-flex flex-column card-er ">
                    <div className="card-extracto d-flex  ">

                        <div className="card-extracto-img">
                            <img src={ImgExtracto} alt=""  />
                        </div>
                        <div className="card-extracto-text text-center">
                            <p className="text-danger m-3 me-1">Tu Extracto Bancario</p>
                           <ul>
                               <li>Generar Extracto bancario</li>
                            </ul> 
                        </div>
                    </div>

                    <div className="card-reclamo d-flex">
                        <div className="card-reclamo-img">
                        <img src={imgQueja} alt="" />
                        </div>
                        <div className="card-reclamo-text text-center">
                        <p className="text-danger m-3 me-1">Quejas y Reclamos</p>
                            <ul>
                                <Link to ="/qr">Tienes una queja o reclamo en alguno de  nuestros servicios prestados. </Link>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-end mb-3 ">
                <img src={ImgFondo} alt="" className="imgFondo mb-4" />
            </div>
          
        </div>
        
       
          
        </>
        
    )
}


export default BancaCard;