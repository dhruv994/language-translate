import React from 'react';
import classNames from 'classnames';
export default function Pannel({ children, className, ...rest }) {
    const finalClassNames = classNames(
        className,
        'border rounded p-3 shadow bg-white w-full'
    )
    return <div {...rest} className={finalClassNames}>{children}</div>
}