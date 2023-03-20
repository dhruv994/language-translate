import React, { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';


export default function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleOptionClose = (option) => {
        setIsOpen(false);
        onChange(option)
    }

    const rendereOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 rounded cusrsor-pointer p-1' key={option.value} onClick={() => handleOptionClose(option)}>
            {option.label}
        </div>
    });

    return (
        <div className='w-48 relative'>
            <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}> 
            {value?.label || 'Select...'}
            <GoChevronDown />
            </div>
            {isOpen && <div className='absolute top-full border rounder p-3  shadowbg-white w-full'> {rendereOptions} </div>}
        </div>
    )
}