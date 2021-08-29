import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarRestante, guardarPresupuesto, actualzarPregunta}) => {

    const [ cantidad, guardarCantidad ] = useState(0);
    const [error, setError ] = useState(false);

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    const agregarPresupuesto = e => {
        e.preventDefault();

        if(cantidad < 1 || isNaN( cantidad )) {
            setError(true);
            return;
        }

        setError(false);
        actualzarPregunta(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad)
        
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje='El presupuesto es Incorrecto'/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}

Pregunta.protoTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualzarPregunta: PropTypes.func.isRequired
}
 
 
export default Pregunta;