import React from "react";
import imagen4 from "../../assets/fondo1.png";
import "../../App.css";
import imagen5 from "../../assets/fondocontent.jpg";
import imagen6 from "../../assets/fondocontent3.jpg";
import { Link } from "react-router-dom";
import Cards from "../../components/card/Cards";

const HomeFondo = () => {
  return (
    <>
      <section className="container">
        <img className="d-block w-100" src={imagen4} alt="" />
      </section>
      <section className="container p-4">
        <div className=" m-2" style={{ background: "#AED5EB" }}>
          <h1 className="text-center p-2">
            BIENVENIDO A BANCO CAJA SOCIAL TU AMIGO
          </h1>
          <p className="mt-2 text-danger p-2">
            ¿Aún no haces parte de esta gran familia?{" "}
          </p>
          <h5 className="mx-auto text-center row col-10 p-4">
            Se parte de esta gran familia, donde contarás con seguridad
            garantizada para tu dinero, empiezas a construir tu historial
            crediticio,recibes intereses por el dinero que depositas, disfrutas
            de un acceso ágil y rápido a tus recursos,obtienes un mayor control
            sobre tus finanzas.
          </h5>
          <Link
            to="/Registrarse"
            className="btn btn-danger m-4  d-flex justify-content-center"
          >
            Registrate
          </Link>
        </div>
      </section>
      <section className="container mt-4 p-4 img-fondo">
        <p className="text-center font-weight-normal">Nuestro Servicio</p>
        <h1 className="text-center m-2">PARA TI</h1>
        <Cards />
      </section>
      <section className="container">
        <div>
          <img
            className=" rounded  float-right w-50 p-4"
            src={imagen5}
            alt=""
          />
          <img className=" rounded  float-left w-50 p-4" src={imagen6} alt="" />
        </div>
      </section>
    </>
  );
};

export default HomeFondo;
