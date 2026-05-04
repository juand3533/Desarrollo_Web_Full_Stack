import portada from '../assets/book_cards/978958421602.webp'
function Book(){
    return(
        <div className="card card-side bg-base-50 w-64 shadow-sm border-2">
            <figure>
                <img className="align-middle"
                    src= {portada}
                    alt="Book" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">Nuevo libro disponible</h2>
                <p>El perfume.</p>
                <p>Patrcik Süskind</p>
                <p>1985</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}
export default Book