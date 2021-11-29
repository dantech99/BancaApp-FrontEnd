import React from "react";
import { Link } from "react-router-dom";
import qyr from "./qyr.png";

import "./bvpQr.css";

const bvpQr = () => {
    return (
        <>
            <div className="navbar ms-4 me-4">
                <Link className="btn btn-lg m-2 fs-5 p-0 pb-1 pt-1 fw-bolder" id="regresar-btn" to="/">
                    Regresar
                </Link>
                <div className="d-grid gap-2 d-md-block">
                    <img src={qyr} width="57" height="60" alt="" />
                    <Link className="fs-5 fw-bolder text-decoration-none ms-3" to="/qr">
                        ATENCION DE QUEJAS Y RECLAMOS
                    </Link>
                </div>
                <Link className="btn btn-lg m-2 fw-bolder" id="btn-registrarPQyR" to="/qrForm">
                    Registrar Fromulario de Peticion, Queja o Reclamo
                </Link>
            </div>
            <div className="d-grid btn btn-outline-primary ms-4 me-4 fw-bolder fs-5 mt-2 text-start disabled" aria-disabled="true" disabled>
                Conceptos Basicos de PQR
            </div>
            <div className="row justify-content-around ms-4 me-4 mt-3">
                <p className="col"><strong className="texto-strong-blue">PQR:</strong>Peticiones, Quejas y Reclamos.</p>
                <p className="col"><strong className="texto-strong-blue">Peticiones:</strong>Son aquellas solicitudes que nuestros consumidores financieros presentan ante el Banco con el fin de resolver una inquietud o una necesidad de carácter individual o colectivo.</p>
                <div class="w-100"></div>
                <p className="col"><strong className="texto-strong-blue">Queja:</strong>Hace referencia a toda inconformidad o situación reportada por nuestro consumidores financieros con relación a una conducta irregular presentada por uno o varios colaboradores, relativa a la calidad en la prestación de los servicios a cargo del Banco.</p>
                <p className="col"><strong className="texto-strong-blue">Reclamo:</strong>Manifestación de inconformidad expresada por un consumidor financiero respecto de un producto o servicio adquirido, ofrecido o prestado por el Banco.</p>
            </div>
            <div className="d-grid btn btn-outline-primary ms-4 me-4 fw-bolder fs-5 text-start disabled" aria-disabled="true" disabled>
                Procedimiento  de atención PQR
            </div>
            <div className="row justify-content-around ms-4 me-4 mt-3">
                <div className="col">
                    <ul>
                        <li>Nombre e identificación del reclamante.</li>
                        <li>Dirección, teléfono, fax, e- mail, número de celular.</li>
                        <li>Descripción de la reclamación.</li>
                        <li>Lugar, fecha y firma de la presentación de la reclamación.</li>
                        <li>Pruebas documentales soportes de la reclamación.</li>
                        <li>Nota: Para las Peticiones, Quejas y/o Reclamos los clientes cuentan con un plazo máximo de 120 días posteriores a la fecha de la transacción para radicar su reclamo.</li>
                    </ul>
                </div>
                <div className="col">
                    <table className="table table-striped table-hover table-borderless">
                        <thead >
                            <tr>
                                <th scope="col" className="text-white" id="th-color-red">Tiempo de queja</th>
                                <th scope="col" className="text-white" id="th-color-blue">Tiempo de respuesta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Solicitud</td>
                                <td>8 dias habiles</td>
                            </tr>
                            <tr>
                                <td>Queja y Reclamo</td>
                                <td>15 dias habiles</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default bvpQr;