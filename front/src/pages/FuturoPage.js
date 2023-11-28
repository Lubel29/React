import '../styles/FuturoPage.css';
import { useState } from 'react';
import axios from 'axios';

const FuturoPage = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        mensaje: ''
    };
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/futuro`, formData);
            setSending(response.data.message);
            if (response.data.error === false) {
                setFormData(initialForm);
                setMsg('Mensaje enviado');
            }
        } catch (error) {
            setSending(false);
            setMsg('Hubo un error al enviar el formulario');
        } finally {
            setSending(false);
        }
    };
    return (
        <article id="fondo2">
            <main className="holder mensaje">
                <div className='form'>
                    <h3>Comentarios o sugerencias</h3>
                    <form action="/futuro" method="post" onSubmit={handleSubmit} className="Formulario">
                        <p>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="" />
                        </p>
                        <p>
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="" />
                        </p>
                        <p>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Inserte mensaje"></textarea>
                        </p>
                        <p className="acciones"><input type="submit" value="Enviar" /></p>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg && !sending ? <p>{msg}</p> : null}

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
