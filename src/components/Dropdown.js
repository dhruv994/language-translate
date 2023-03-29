import React, { useState,useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Pannel from './Pannel';


export default function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

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
        <div ref={divEl} className='w-48 relative'>
            <Pannel className='flex justify-between items-center cursor-pointer' onClick={handleClick}> 
            {value?.label || 'Select...'}
            <GoChevronDown />
            </Pannel>
            {isOpen && <Pannel className='absolute top-full'> {rendereOptions} </Pannel>}
        </div>
    )
}