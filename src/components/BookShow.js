import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

export default function BookShow({ book }) {
    const {  handleBookDeleteById } = useContext(BooksContext);

    const [showEdit, setShowEdit] = useState(false);
    const handleDelete = () => {
        handleBookDeleteById(book.id);
    }
    const handleEdit = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = () => {
       // onEdit(book);
        setShowEdit(false);
    }
    let content = showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : <h3>{book.title}</h3>

    return (
        <div className="book-show">
            <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button className='edit' onClick={handleEdit}>
                    Edit
                </button>
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}