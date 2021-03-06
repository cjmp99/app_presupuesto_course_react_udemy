import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarPregunta, actualzarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ crearGasto, setGasto ] = useState(false);

  useEffect(() => {
    if(crearGasto){

      //new pre
      guardarGastos([
        ...gastos,
        gasto
      ]);

      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)

      setGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante])


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">
            {mostrarPregunta ? (
              <Pregunta 
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualzarPregunta={actualzarPregunta}
            />
            ) : (
              <div className="row">
                <div className="one-half column">
                    <Formulario
                      guardarGasto={guardarGasto}
                      setGasto={setGasto}
                    />
                </div>

                <div className="one-half column">
                    <Listado 
                      gastos={gastos}
                    />

                    <ControlPresupuesto
                      presupuesto={presupuesto}
                      restante={restante}
                    />
                </div>
              </div>
            ) }
            

            
          </div>
      </header>
    </div>
  );
}

export default App;
