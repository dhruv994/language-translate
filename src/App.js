import './index.css'
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useState } from 'react'
import axios from 'axios'

export default function App() {
    const [books, setBooks] = useState([]);

    const handleAddBooks = async (title) => {

        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        const updateBooks = [
            ...books,
            response.data
        ];
        setBooks(updateBooks);
    }
    const handleBookDeleteById = (id) => {
        const filteredBook = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(filteredBook);

    }

    const handleBookEditById = (toEditBook) => {
        console.log("book to edit title for", toEditBook);
        const updatedBookTile = books.map((book) => {
            if (book.id === toEditBook.id) {
                return { ...book, title: toEditBook.title }
            }
            return book;

        });
        console.log("updated array", updatedBookTile)
        setBooks(updatedBookTile)
    }
    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={handleBookDeleteById} onEdit={handleBookEditById} />
            <BookCreate addBook={handleAddBooks} />
        </div>
    )
}