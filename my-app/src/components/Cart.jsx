import icon from "../assets/util/icons/images.png"
function Cart(){
    return(
        <button className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">

                <path d="M3 4h2l2.2 10.5a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L21 7H7" />
                <path d="M9 20a1 1 0 1 0 0.001 0" />
                <path d="M18 20a1 1 0 1 0 0.001 0" />

            </svg>
            Carrito
        </button>
    )
}
export default Cart