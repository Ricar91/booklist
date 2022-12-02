import { useContext } from "react";
import { BooksContext } from "../Context/BooksContext";
import BookDetails from "./BookDetails";

export default function Booklist() {
  const { books } = useContext(BooksContext);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <BookDetails book={book} />
        ))}
      </ul>
    </div>
  );
}
