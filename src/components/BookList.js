import BookShow from "./BookShow";

export default function BookList({ books, onDelete, onEdit }) {
    const renderbooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    });


    return (
        <div>
            {renderbooks}
        </div>
    )

}