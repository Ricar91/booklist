
export default function Navbar(){

    const books = [ {}, {}, {} ]

    return(
        <div>
            <h1>Lista de Lectura</h1>
            <p>Hoy, tu tienes {books.length} libros por leer</p>
        </div>
    )
};