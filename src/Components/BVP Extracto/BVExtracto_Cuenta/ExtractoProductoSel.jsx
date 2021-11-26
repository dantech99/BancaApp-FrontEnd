import React from 'react';
import "./EstilosCuenta.css";

export default function ExtractoProductoSel() {
    return (
        <>
            <div id="sel_container" className="container">
                <div id="sel_titulo" className="row">
                    <p>Generar Extracto del Producto Seleccionado</p>
                </div>
                <div id="sel_cuenta" className="row">
                    <p>Cuenta No: </p>
                </div>
                <div id="sel_periodo" className="row">
                    <div className="col">
                        <p>Periodo</p>
                    </div>
                    <div id="" className="col">
                        <select name="sel_dropdown" id="sel_desplegable" required="">
                        <option value="" selected disabled hidden>Seleccionar</option>
                        <option value="ejemplo">Ejemplo</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div id="sel_boton" className="col">
                        <button type="button" className="sel_boton">Cancelar</button>
                    </div>
                    <div id="sel_boton" className="col">
                    <button type="button" className="sel_boton">Consultar</button>
                    </div>
                </div>
            </div>
        </>
    );
}