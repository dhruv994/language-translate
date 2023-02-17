import { useState } from 'react';

export default function BookCreate({ addBook }) {
    const [value, setValue] = useState('');

    const handleBookAdd = (event) => {
        event.preventDefault();
        addBook(value);
        setValue('');
    }
    const handleChange = (event) => {
       
        setValue(event.target.value)

    }

    return (
        <div className='book-create'>
            <h3>Add a book</h3>
            <form onSubmit={handleBookAdd}>
                <label>Title </label>
                <input value={value} onChange={handleChange} />
                <button className='button'>create book!</button>
            </form>
        </div>
    )

}