import '../styles/HomePage.css'

const HomePage = (props) => {
    return (
<article id="fondo">
        <main className="holder">
            <div className="Titulo de bienvenida">
                <h2>Las consolas y los videojuegos a través del tiempo</h2>
                <p>Bienvenid@, en este sitio vamos a viajar a través del tiempo de las videoconsolas y videojuegos.
                    <hr />
                    Para comenzar, es necesario saber precisamente, ¿Qué es una videoconsola?
                    Una videoconsola, es el dispositivo que ejecuta juegos electrónicos, contenidos en discos compactos,
                    cartuchos, tarjetas de memoria u otros formatos y, a diferencia de los arcades o fichines, las consolas
                    nacieron para uso domestico.
                    Por eso es que no se puede poner en discusión que los videojuegos son dueños y/o fueron parte de nuestra
                    vida alguna vez.
                    Porque desde que llegaron al mundo, fueron varias generaciones las que cambiaron la historia del
                    entretenimiento y probablemente el hogar de las familias para siempre.
                    Resultaron ser novedosas a medida que pasaban los años y a su vez iban mejorando atrozmente, dicho esto
                    al día de hoy, resultan buscar la perfeccción y la inmersión en cada detalle para que el usuario difrute
                    al 100%.
                </p>
            </div>
            <div className="Propagandas">
                <div className="propagandaRetro">
                    <img src="img\Home\comercialmagnavox.jpg" alt="comercial"/>

                        <p>Propaganda de la primera consola de la historia, "Magnavox Odyssey"</p>
                </div>
                <div className="propagandaActual">
                    <img src="img/Home/propagandahoy.jpg" alt="comercial"/>
                        <p>Generaciones disfrutando de videojuegos</p>
                </div>
            </div>

        </main>
</article >
    )
}

export default HomePage; 