import './index.css'
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useEffect, useContext } from 'react';
import BooksContext from './context/books';


export default function App() {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        console.log('hi');
        fetchBooks();
    }, [])




    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    )
}