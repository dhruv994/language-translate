import './index.css'
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useState } from 'react'
export default function App() {
    const [books, setBooks] = useState([]);

    const handleAddBooks = (title) => {
        const updateBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 999),
                title
            }
        ];
        setBooks(updateBooks);
    }
    const handleBookDeleteById = (id) => {
        const filteredBook = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(filteredBook);

    }
    return (
        <div className='app'>
            {books.length}
            <BookList books={books} onDelete={handleBookDeleteById} />
            <BookCreate addBook={handleAddBooks} />
        </div>
    )
}