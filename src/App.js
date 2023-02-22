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
                id: Math.round(Math.random()*999),
                title
            }
        ];
        setBooks(updateBooks);
    }

    return (
        <div>
            {books.length}
            <BookCreate addBook={handleAddBooks} />
            <BookList books={books}/>
        </div>
    )
}