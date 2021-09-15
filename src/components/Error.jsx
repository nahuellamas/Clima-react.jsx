import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return ( 
        <p className="error red darken-4 white-text">{mensaje}</p>
     );
}
 
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;