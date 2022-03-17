import React from 'react';
import PropTypes from 'prop-types'
 

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{saludo} !!!</h1>
            <p>{subtitulo}</p>
        </>
    );
}

//! proptypes sirve para validad las propiedades que llegan a los componentes
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//! defaultProps estableces valores por defecto si no vienes en las props
PrimeraApp.defaultProps = {
    subtitulo: 'Mi primera app'
}
 
export default PrimeraApp