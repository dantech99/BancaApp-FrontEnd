import React from 'react';
import "./EstilosExtracto.css";

export default function DetalleProducto() {
    return(
        <>
            <div id="detalle_producto" className="container">
                <div id="detalle_titulo" className="row">
                    <p>Detalle del Producto:</p>
                </div>
                <div className="row">
                    <div id="detalle_cuenta" className="col-9">
                        <p>Cuenta No: </p>
                        <p>Tipo de Cuenta: </p>
                        <p> Saldo Disponible: </p>
                    </div>
                    <div id="detalle_boton" className="col-3">
                        <button type="button">Ver Extracto</button>
                    </div>
                </div>
            </div>
        </>
    );
}