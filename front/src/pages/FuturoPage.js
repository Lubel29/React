import React, { useState } from 'react';
import '../styles/FuturoPage.css';

const FuturoPage = (props) => {
    const [contentLength, setContentLength] = useState(0);

    const handleContentChange = (event) => {
        const newContent = event.target.value;
        setContentLength(newContent.length);
    };

    return (
        <article id="fondo2">
            <main className="holder mensaje">
                <div className='form'>
                    <h3>Comentarios o sugerencias</h3>
                    <form action="" method="" className="Formulario">
                        <p>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" placeholder="" onChange={handleContentChange} />
                        </p>
                        <p>
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" name="apellido" placeholder="" />
                        </p>
                        <p>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea name="contenido" placeholder="Inserte mensaje" onChange={handleContentChange}></textarea>
                        </p>
                        <div id="mensaje">Contador de caracteres: {contentLength}</div>
                        <p className="acciones"><input type="submit" value="Enviar" /></p>
                    </form>

                </div>

                <div className="desenlace">
                    <h3>Mirando hacia el futuro</h3>
                    <p>Entre la evolución y la revolución que generaron las consolas a lo largo de estos años,
                        hubo éxitos y fracasos, competencia, calidad y satisfacción del usuario. Muchas perduraron años y
                        fueron éxitos imparables, otras simplemente quedaron en la historia.</p>
                    <i className="fa-solid fa-gamepad fa-beat-fade" />
                    <p>Ahora la pregunta que nos hacemos es ¿Cómo continuará la vida del gaming y las consolas? La
                        tecnología que ya supera límites extraordinarios, ¿nos llevarán a sumergirnos más en el mundo de los
                        videojuegos? La interfaz entre usuario-consola va a ser sumamente importante y compleja.
                        Inmersión, realidad aumentada, realidad virtual y la IA son palabras que vamos a escuchar mucho.
                        La IA está cumpliendo actualmente un rol muy importante, y yo creo que por ahí es donde más va a
                        impactar el desarrollo de las consolas y los videojuegos.</p>
                </div>
            </main>
        </article>
    );
};

export default FuturoPage;
