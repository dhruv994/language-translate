import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

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
    const handleBookDeleteById = async (id) => {

        const result = await axios.delete('http://localhost:3001/books/' + id);
        const filteredBook = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(filteredBook);

    }

    const handleBookEditById = async (toEditBook) => {
        console.log("book to edit title for", toEditBook);
        const result = await axios.put('http://localhost:3001/books/' + toEditBook.id, { title: toEditBook.title });
        console.log("RESULT>DATA", result.data);
        const updatedBookTile = books.map((book) => {
            if (book.id === result.data.id) {
                return { ...book, ...result.data }
            }
            return book;

        });
        console.log("updated array", updatedBookTile)
        setBooks(updatedBookTile)
    }
    const valuesToShare = {
        books,
        handleBookEditById,
        handleAddBooks,
        handleBookDeleteById,fetchBooks

    }
    return (
        <BooksContext.Provider value={valuesToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;