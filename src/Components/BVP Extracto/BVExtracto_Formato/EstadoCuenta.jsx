import React from 'react';
import "./EstilosFormato.css"

export default function EstadoCuenta() {
    return(
        <>
            <div id="estado_cuenta" className="container">
                <div id="cuenta_titulo" className="row">
                    <p>Estado de Cuenta</p>
                </div>
                <div className="row">
                    <div id="cuenta_cliente" className="col-5">
                        <p>Nombre Cliente: </p>
                        <p>Dirección: </p>
                    </div>
                    <div id="cuenta_numero" className="col-5">
                        <p>Desde: Hasta:</p>
                        <p>TIPO DE CUENTA: </p>
                        <p>Número: </p>
                    </div>
                </div>
                <div id="cuenta_tabla" className="row">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">FECHA</th>
                                <th scope="col">DESCRIPCIÓN</th>
                                <th scope="col">VALOR</th>
                                <th scope="col">SALDO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}