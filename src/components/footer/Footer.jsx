import React from "react";
import "./InstitutionalFooter.css";
import imagensocial from "./redessocialesfooter.png";
import imagenvigilado from "./vigiladofooter.png";

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
          <img className="m-4" src={imagensocial} alt="" />
          <img className="m-4" src={imagenvigilado} alt="" />
        </div>
        <div className="row col-2">
          <p className="mt-4 text-center text-justify">
            Directorio alternos Contáctenos
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
