import portada from '../assets/book_cards/978958421602.webp'
function Book(){
    return(
        <div className="book">
            <img src={portada} width="300" height="300"/>
            <h3>Libro</h3>
            <p>Autor</p>
            <p>Año</p>
        </div>
    )
}
export default Book