import BookShow from "./BookShow";

export default function BookList({ books }) {
    const sendBooks = () => {
        const multibook = books && books.map((book) => {
            return <BookShow key={book.id} book={book} />
        });
        return multibook;

    }
    return (
        <div>
            {sendBooks()}
        </div>
    )

}