import {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({guardarBusqueda, busqueda, guardarConsultar}) => {
    const [error, guardarError] = useState(false);

    const {ciudad, pais} = busqueda;

    const handleChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pais.trim() === '' || ciudad.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsultar(true);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input
                type="text" 
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select name="pais" id="pais" value={pais} onChange={handleChange}>
                    <option value="" >Elige un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>
            <button type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4">BUSCAR CLIMA</button>
        </form>
     );
}

Form.propTypes = {
    guardarBusqueda: PropTypes.func.isRequired,
    busqueda: PropTypes.object.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}
 
export default Form;