import './index.css'
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log('hi');
        fetchBooks();
    },[])

    const fetchBooks = async () => {
        const result = await axios.get('http://localhost:3001/books');
        setBooks(result.data);
    }

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
    const handleBookDeleteById = async(id) => {

        const result = await axios.delete('http://localhost:3001/books/'+id);
        const filteredBook = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(filteredBook);

    }

    const handleBookEditById = async(toEditBook) => {
        console.log("book to edit title for", toEditBook);
        const result = await axios.put('http://localhost:3001/books/'+toEditBook.id,{title:toEditBook.title});
        console.log("RESULT>DATA",result.data);
        const updatedBookTile = books.map((book) => {
            if (book.id === result.data.id) {
                return { ...book, ...result.data }
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