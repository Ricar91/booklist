export default function BookDetails({ book }){
    return(
          <li style={{ padding: '1rem' }}>
              <div>
                  <span style={{ fontWeight: 'bold', marginRight: 10 }}>Libro: </span>
                  <span style={{ fontStyle: 'italic' }}>{book.title}</span>
              </div>
              <div>
                  <span style={{ fontWeight: 'bold', marginRight: 10 }}>Autor:</span>
                  <span style={{ fontStyle: 'italic' }}>{book.author}</span>
              </div>
          </li>
    )
};