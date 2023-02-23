export default function BookShow({ book, onDelete }) {
    const handleDelete = () => {
        onDelete(book.id);
    }

    return (
        <div className="book-show">
            {book.title} - {book.id}
            <div className="actions">
                <button className="delete" onClick={handleDelete}>
                    delete
                </button>
            </div>
        </div>
    )
}