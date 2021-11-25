import React from 'react'
import imagenvigilado from "../imagenes/ImgVigilado.png";
import imagenredes from "../imagenes/Imgredessociales.png";
import"../App.css"




const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-between text-white bg-color-footer">
        <div className="row col-2">
          <p className="m-4 text-center text-justify">
            Información corporativa Acerca de nosotros Información para
            inversionistas Tasas, precios y comisiones Información adicional
          </p>
        </div>
        <div>
          <img className="m-4" src={imagenredes} alt="" />
          <img className="m-4" src={imagenvigilado} alt="" />
        </div>
        <div className="row col-2">
          <p className="m-6 text-center text-justify">
            Directorio alternos Contáctenos
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
