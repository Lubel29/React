import '../styles/FuturoPage.css'
const FuturoPage = (props) => {
    return (
        <article id="fondo2">
            <main class="holder mensaje">
                <div>
                    <h3>Comentarios o sugerencias sobre este sitio web</h3>
                    <form action="" method="" Class="Formulario">
                        <p>
                            <label for="nom"> Nombre</label>
                            <input type="text" name="Nombre" />
                        </p>
                        <p>
                            <label for="Apellido"> Apellido </label>
                            <input type="text" name="apellido" placeholder="" />
                        </p>
                        <p>
                            <label for="mensaje"> Mensaje</label>
                            <textarea name=""></textarea>
                        </p>
                        <p>
                            <p class="acciones"><input type="submit" value="Enviar" /></p>
                        </p>

                    </form>
                </div>

                <div class="desenlace">
                    <h3>Mirando hacia el futuro</h3>
                    <p>Entre la evolución y la revolución que generaron las consolas a lo largo de estos años,
                        hubo exitos y fracasos, competencia, calidad, y satisfacción del usuario. Muchas perduraron años y
                        fueron exitos imparables, otras , simplemente quedaron en la historia.</p>
                    <i class="fa-solid fa-gamepad" />
                    <p>Ahora la pregunta que nos hacemos es ¿Como continuará la vida del gaming y las consolas? La
                        tecnología que ya supera límites extraordinarios, ¿nos llevaran a sumergirnos más en el mundo de los
                        videojuegos? La interfaz entre usuario-consola va a ser sumamente importante y compleja.
                        Innmersión, realidad aumentada, realidad virtual y la IA, son palabras que vamos a escuchar mucho.
                        La IA está cumpliendo actualmente un rol muy importante, y yo creo que por ahí es donde más va a
                        impactar el desarrollo de las consolas y los videojuegos.</p>
                </div>


            </main>

        </article>



    )
}

export default FuturoPage;