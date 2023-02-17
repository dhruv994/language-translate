import './index.css'
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useState } from 'react'
export default function App() {
    const [books, setBooks] = useState([]);

    const handleAddBooks = (book) => {
        console.log("book is being added=>",book);
    }

    return (
        <div>
            <BookCreate addBook={handleAddBooks} />
            <BookList />
        </div>
    )
}