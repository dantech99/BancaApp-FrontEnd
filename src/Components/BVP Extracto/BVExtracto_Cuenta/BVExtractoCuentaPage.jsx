import React from 'react';
import BancaHeader from '../../BancaHeader/BancaHeader.jsx'
import Footer from '../../Footer/Footer.js'
import BotonRegresar from '../BotonRegresar.jsx'
import GenerarExtractoTitulo from '../GenerarExtractoTitulo.jsx'
import RectanguloGenerarExtracto from '../RectanguloGenerarExtracto.jsx'
import ExtractoProductoSel from './ExtractoProductoSel.jsx'

export default function BVExtractoCuentaPage() {
    return (
        <>
            <BancaHeader />
                <div id="cuenta_page">
                    <div id="cuenta_container1" className="container">
                        <div id="cuenta_row1">
                            <BotonRegresar />
                        </div>
                        <div id="cuenta_row2">
                            <RectanguloGenerarExtracto />
                        </div>
                    </div>
                    <div className="container">
                        <div id="cuenta_row3">
                            <GenerarExtractoTitulo />
                        </div>
                        <div id="cuenta_row4">
                            <ExtractoProductoSel />
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}