import {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';

function App() {
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [error, guardarError] = useState(false);
  const {ciudad, pais } = busqueda;
  useEffect(() => {
    if(consultar){
      const consultarAPI = async () => {
        const APIkey = '85a71875990373ff5a0264fac38674d4';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIkey}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);

        if (resultado.cod === '404') {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
      consultarAPI();
    }
    // eslint-disable-next-line
  }, [consultar]);
  

  return (
    <Fragment>
      <Header
      titulo={"Clima Actual"} 
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">

            <div className="col s12 m6">
              <Form 
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
              />
            </div>

            <div className="col s12 m6">
              <Clima 
                error={error}
                resultado={resultado}
              />
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
