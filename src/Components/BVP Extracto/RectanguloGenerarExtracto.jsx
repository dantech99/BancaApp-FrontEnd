import React from 'react';
import "./Estilos.css";
import rectangle from './Rectangle 26.png';

export default function RectanguloGenerarExtracto() {
    return (
        <>
            <div className="rect_gnr_ext">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div>
                                <img className="bvp_imagen" src={rectangle} alt="" />
                            </div>
                        </div>
                        <div className="col">   
                            <div className="tu_ext_bnc">
                                <p>Tu Extracto Bancario</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="gnr_ext_bnc">
                            <a href="">Generar Extracto Bancario</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}