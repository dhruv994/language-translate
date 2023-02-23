import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookShow({ book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);
    const handleDelete = () => {
        onDelete(book.id);
    }
    const handleEdit = () => {
        setShowEdit(!showEdit)
    }
    let content = showEdit ? <BookEdit book={book} onEdit={onEdit} /> : <h3>{book.title}</h3>

    return (
        <div className="book-show">
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