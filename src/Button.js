import className from 'classnames';

const finalClassName = className({

})

export default function Button({ children,
    primary,
    secondary,
    success,
    danger,
    outline,
    rounded, warning }) {

    const classes = className('px-3 py-1.5 border', {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-red-500 bg-red-500 text-white': danger,
        'border-yellow-400 bg-yellow-500 text-white': warning,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-red-500': outline && danger,
        'text-yellow-400': outline && warning,




    });
    return <button className={classes}>{children}</button>
}

Button.propTypes = {
    checkVariationValue: (props) => {
        console.log(props)

    }
}