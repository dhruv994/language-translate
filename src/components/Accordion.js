import React, { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export default function Accordion({ items }) {
    const [expendedIndex, setExpendedIndex] = useState(0);
   const  handleClick = (nextIndex) => {
        if (nextIndex === expendedIndex)
            setExpendedIndex(-1)
        else
            setExpendedIndex(nextIndex)

    }
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expendedIndex;
        const icon = <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />} </span>
        return (
            <div key={item.id}>
                <div className='flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })
    return < div className='border-x border-t rounded'>
        {renderedItems}
    </div>

}