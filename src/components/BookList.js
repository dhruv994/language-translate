import { useContext } from 'react';
import BooksContext from "../context/books";
import BookShow from "./BookShow";

export default function BookList({ books, onDelete, onEdit }) {
    const { count, incrementCount } = useContext(BooksContext);
    const renderbooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    });


    return (
        <div>
            {count}
            <button onClick={incrementCount}> click me!</button>
            {renderbooks}
        </div>
    )

}