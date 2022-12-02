import "./App.css";
import Booklist from "./Components/Booklist";
import Navbar from "./Components/Navbar";
import NewBookForm from "./Components/NewBookForm";
import BooksContextProvider from "./Context/BooksContext";

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar />
        <Booklist />
        <NewBookForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
