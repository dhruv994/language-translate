import React, { useState } from 'react';

export default function DropDown({ options, selection, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleOptionClose = (option) => {
        setIsOpen(false);
        onSelect(option)
    }

    const rendereOptions = options.map((option) => {
        return <div key={option.value} onClick={() => handleOptionClose(option)}>
            {option.label}
        </div>
    });

    return (
        <>
            <div onClick={handleClick}> {selection?.label || 'Select...'}</div>
            {isOpen && rendereOptions}
        </>
    )
}