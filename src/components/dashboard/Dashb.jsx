import React from "react";
import { Link } from "react-router-dom";
import avatar from "./img/undraw_male_avatar_323b.svg";
import gestion from "./img/undraw_progressive_app_m-9-ms.svg";
import "./dash.css";

export const Dashb = () => {
  return (
    <>
      <div className="d-flex flex-row-reverse">
        <p className="bg-color p-2 text-white">Administrador</p>
      </div>
      <div className="container mx-auto">
        <div className="row p-4 mt-2 mb-2">
          <div className="btn-UI col  m-4">
            <Link className="d-flex flex-column" to="/">
              <span className="align-self-center p-2 font-weight-bold">
                Gestion de Usuarios
              </span>
              <img
                className="m-4"
                src={avatar}
                alt=""
                width="400"
                height="300"
              />
            </Link>
          </div>
          <div className="btn-UI col  m-4">
            <Link className="align-self-center p-2 d-flex flex-column" to="/">
              <span className="align-self-center p-2 font-weight-bold">
                Gestion Plataforma
              </span>
              <img
                className="m-4"
                src={gestion}
                alt=""
                width="400"
                height="300"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="cuarto-circulo d-flex flex-row-reverse"></div>
    </>
  );
};
