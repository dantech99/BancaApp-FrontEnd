import React from "react";
import { Link } from "react-router-dom";
import qyr from "./qyr.png";

import "./bvpQrForm.css";

const bvpQrForm = () => {
    return (
        <>
            <div className="navbar navbar-expand-lg ms-4 me-4">
                <Link className="btn btn-lg m-2 fs-5 p-0 pb-1 pt-1 fw-bolder" id="regresar-btn" to="/qr">
                    Regresar
                </Link>
                <div className="d-grid gap-2 d-md-block ms-3 me-5">
                    <img src={qyr} width="57" height="60" alt="" />
                </div>
                <div className="d-grid btn btn-outline-primary ms-4 me-4 fw-bolder ps-5 pe-5 fs-5 mt-2 disabled" aria-disabled="true" disabled>
                    Fromulario de Peticion, Queja o Reclamo
                </div>
            </div>
            <form className="ms-5 me-5 ps-5 pe-5 mb-3">
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="tipo-documento">Tipo de Solicitud:</label>
                        <select className="form-select" id="tipo-documento">
                            <option selected>Seleccionar</option>
                            <option value="1">Solicitud n</option>
                            <option value="2">Solicitud n</option>
                            <option value="3">Solicitud n</option>
                        </select>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="n-solicitud">Fecha de Solicitud:</label>
                        <input type="date" className="form-control" id="n-solicitud"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="nombre">Nombre y apellidos:</label>
                        <input type="text" className="form-control" id="nombre"></input>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="tipo-documento">Tipo de documento:</label>
                        <select className="form-select" id="tipo-documento">
                            <option selected>Seleccionar</option>
                            <option value="1">Solicitud n</option>
                            <option value="2">Solicitud n</option>
                            <option value="3">Solicitud n</option>
                        </select>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="n-documento">Numero de documento:</label>
                        <input type="number" className="form-control" id="n-documento"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="n-cuenta">Numero de cuenta:</label>
                        <input type="number" className="form-control" id="n-cuenta"></input>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="tipo-cuenta">Tipo de cuenta:</label>
                        <select className="form-select" id="tipo-cuenta">
                            <option selected>Seleccionar</option>
                            <option value="1">Solicitud n</option>
                            <option value="2">Solicitud n</option>
                            <option value="3">Solicitud n</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="n-transaccion">Fecha de la transaccion:</label>
                        <input type="date" className="form-control" id="n-transaccion"></input>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="n-transaccion">Numero de la transaccion:</label>
                        <input type="number" className="form-control" id="n-transaccion"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="descripcion-t">Descripción de la transacción</label>
                        <textarea className="form-control" rows="5" id="descripcion-t"></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="descripcion-s">Descripción de la solicitud</label>
                        <textarea className="form-control" rows="5" id="descripcion-s"></textarea>
                    </div>
                </div>
                <div className="row">
                    <p className="fw-lighter text-center">En caso de que sea un queja por transaccion fraudulenta; digite la casilla del valor de la transaccion.</p>
                </div>
                <div className="row">
                    <Link className="btn btn-danger m-2 fs-5 p-0 pb-1 pt-1 fw-bolder" id="tramitar-btn" to="#">Tramitar</Link>
                </div>
            </form>
        </>
    );
}
export default bvpQrForm;