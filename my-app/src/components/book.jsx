import portada from '../assets/book_cards/sample.avif'
import mock from "../assets/util/Mock/booksMock.js"
function Book(){


    return(
        mock.map((mock) => (
            <div key={mock.id} className="card card-side bg-base-50 w-64 shadow-sm border-2 flex flex-col">
                <figure className="">
                    <img
                        src= {portada}
                        alt="Book" />
                </figure>
                <div className="card-body text-left">
                    <p>{mock.titulo}</p>
                    <p>{mock.autor}</p>
                    <p>{mock.stock}</p>
                    <div className="card-actions felx justify-center">
                        <button className="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        )
        )
    )
}
export default Book