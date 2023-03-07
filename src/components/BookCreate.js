import { useState, useContext } from 'react';
import BooksContext from '../context/books';

export default function BookCreate() {
    const [value, setValue] = useState('');
    const { handleAddBooks } = useContext(BooksContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddBooks(value);
        setValue('');
    }
    const handleChange = (event) => {

        setValue(event.target.value)

    }

    return (
        <div className='book-create'>
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title </label>
                <input value={value} onChange={handleChange} />
                <button className='button'>create book!</button>
            </form>
        </div>
    )

}