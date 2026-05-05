function Landing(){
    return(
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bienvenido a relatos de papel</h1>
                    <p className="mb-5">
                        Somos una librería digital con un amplio catálogo de libros
                    </p>
                    <button className="btn btn-primary">Comencemos</button>
                </div>
            </div>
        </div>
    )
}
export default Landing