import React from 'react';
import BancaHeader from '../../BancaHeader/BancaHeader.jsx';
import Footer from '../../Footer/Footer.js';
import BotonRegresar from '../BotonRegresar.jsx';
import EstadoCuenta from './EstadoCuenta.jsx';

export default function BVExtractoCuentaPage() {
    return (
        <>
            <BancaHeader />
                <div id="formato_container" className="container-fluid">
                    <div id="formato_row1">
                        <BotonRegresar />
                    </div>
                    <div id="formato_row2" className="row">
                        <EstadoCuenta />
                    </div>
                </div>
            <Footer />
        </>
    );
}