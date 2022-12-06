import { createContext, useEffect, useReducer } from "react";
import bookReducer from "../Reducer/bookReducer";

const bookList = [
  { id: 1, title: "Codigo Da Vinci", author: "Dan Brown" },
  { id: 2, title: "Harry Potter", author: "J. K. Rowling" },
  { id: 3, title: "El principito", author: "Antoine de Saint-Exupery" },
];

export const BooksContext = createContext();

function inicializacionDiferida() {
  const localData = localStorage.getItem("books");
  return localData ? JSON.parse(localData) : bookList;
}

export default function BooksContextProvider({ children }) {
  const [books, dispatch] = useReducer(bookReducer, [], inicializacionDiferida);

  useEffect(() => {
    const stringifiedBooks = JSON.stringify(books);
    localStorage.setItem("books", stringifiedBooks);
  }, [books]);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
}
