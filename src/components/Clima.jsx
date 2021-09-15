import { Fragment} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Clima = ({resultado, error}) => {
    const { name, main } = resultado;
   
    const kelvinACelsius = (temp) => {
        return parseFloat(temp - 273.15, 10).toFixed(2);
    };

    return (
        <Fragment>

            {error ? <Error mensaje="No hay resultados" /> : null}
            { !name ? null :
            <div className="card-panel transparent col s12 clima">
                <div className="black-text">
                    <h2>El clima de {name} es: </h2>
                    <p className="temperatura">{kelvinACelsius(main.temp)}<span>&#x2103;</span></p>
                    <p className="">{kelvinACelsius(main.temp_max)}<span>&#x2103;</span> Maxima</p>
                    <p className="">{kelvinACelsius(main.temp_min)}<span>&#x2103;</span> Minima</p>
                    <p>Humedad: {main.humidity}%</p>
                    <p>Presión Atmosférica: {main.pressure} hPa</p>
                    <p>Dirección del Viento: {resultado.wind.deg} Deg</p>
                    <p>Velocidad: {resultado.wind.speed} km/h</p>
                </div>
            </div>
            }
        </Fragment>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired
}

export default Clima;