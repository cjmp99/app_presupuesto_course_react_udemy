import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';


const Formulario = ({guardarGasto, setGasto}) => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true)
            return;
        }

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        guardarGasto(gasto)
        setGasto(true)
        setError(false)
        guardarNombre('')
        guardarCantidad(0)

    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error 
            mensaje="Ningun campo puede ir vacio o presupuesto invalido"/> : null}

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ejemplo Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ejemplo 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
     );
}

Formulario.protoTypes = {
    guardarGasto: PropTypes.func.isRequired,
    setGasto: PropTypes.func.isRequired
}
 
export default Formulario;