import {useState} from 'react';
import BookDetails from "./BookDetails";

const bookList = [
    { id: 1, title:"Codigo Da Vinci", author: "Dan Brown" },
    { id: 2, title:"Harry Potter", author: "J. K. Rowling" },
    { id: 3, title:"El principito", author: "Antoine de Saint-Exupery" }
]

export default function Booklist(){

    const [ books, setBooks ] = useState(bookList)

    return(
        <div>
            <ul>
                {books.map(book => <BookDetails book={book}/>)}
            </ul>
        </div>
    )
};