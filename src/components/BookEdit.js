import { useState, useContext } from 'react';
import BookCreate from './BookCreate';
export default function BookEdit({ book, onSubmit }) {
    const { handleBookEditById } = useContext(BookCreate)
    const [title, setTitle] = useState(book.title)
    const handleEdit = (event) => {
        event.preventDefault();
        console.log("value of new title", title);
        handleBookEditById({ id: book.id, title });

    }
    const handlechange = (event) => {
        setTitle(event.target.value);
    }
    return (

        <form className='book-edit' onSubmit={handleEdit}>
            <label>  title </label>
            <input className='input' value={title} onChange={handlechange} />
            <button className='button is-primary' >
                Save
            </button>
        </form>

    )
}