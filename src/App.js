import React, { useState } from 'react';
import DropDown from './components/Dropdown';

export default function App() {
    const [selection, setSelection] = useState(null);
    const handleSelect = (option) => {
        setSelection(option);
    }
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ]
    return (<>
        <DropDown options={options} selection={selection} onSelect={handleSelect} />

    </>)
}