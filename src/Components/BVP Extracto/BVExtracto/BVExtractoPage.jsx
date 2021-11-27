import React from 'react';
import BancaHeader from '../../BancaHeader/BancaHeader.jsx'
import Footer from '../../Footer/Footer.js'
import BotonRegresar from '../BotonRegresar.jsx'
import GenerarExtractoTitulo from '../GenerarExtractoTitulo.jsx'
import RectanguloGenerarExtracto from '../RectanguloGenerarExtracto.jsx'
import DetalleProducto from './DetalleProducto.jsx'

export default function BVExtractoPage() {
    return (
        <>
            <BancaHeader />
                <div id="extracto_page">
                    <div id="extracto_container1" className="container">
                        <div id="extracto_row1">
                            <BotonRegresar />
                        </div>
                        <div id="extracto_row2">
                            <RectanguloGenerarExtracto />
                        </div>
                    </div>
                    <div className="container">
                        <div id="extracto_row3">
                            <GenerarExtractoTitulo />
                        </div>
                        <div id="extracto_row4">
                            <DetalleProducto />
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}