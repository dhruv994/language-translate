import PropTypes from 'prop-types';

export default function Button ({children,
primary,
secondary,
success,
danger,
outline,
rounded}){
    return <button>{children}</button>
}

Button.propTypes = {
    checkVariationValue : (props) =>{
        console.log(props)

    }
}