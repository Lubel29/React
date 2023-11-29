import { useState, useEffect } from 'react';
import axios from 'axios';
import HoyItem from '../componentes/hoy/HoyItem';

import '../styles/HoyPage.css'
const HoyPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [hoy, setHoy] = useState([]);

    useEffect(() => {
        const cargarHoy = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/hoy`);
            setHoy(response.data);
            console.log(response)
            setLoading(false);
        };

        cargarHoy();
    }, []);
    return (
        <main className="holder">
            <div className="actualidad">
                <h2>Consolas actuales (2010-hoy) y Novedades del mundo gaming
                </h2>
                <p>Podriamos decir que nos encontramos en la octava generación, cada consola iba evolucionando a pasos
                    agigantados, definicion HD, reproducción con blu ray,controles con sensor de movimiento, consolas
                    portatiles con definicion de alta calidad, etc.
                    <b>Terreno firme para Sony y Microsoft, dos potencias que se encuentran al día de hoy CARA A CARA.</b>
                </p>

                <nav>
                    <h4>
                        <ul>
                            <i className="fas fa-headphones" ></i>
                            <li><a href="#Xbox360">Xbox 360</a></li><i className="fas fa-headphones"
                            ></i>
                            <li><a href="#Ps Vita">Ps Vita</a></li><i className="fas fa-headphones"
                            ></i>
                            <li><a href="#Wii u">Wii u</a></li><i className="fas fa-headphones"
                            ></i>
                            <li><a href="#Xboxone">Xbox One</a></li><i className="fas fa-headphones"
                            ></i>
                            <li><a href="#Ps4">Ps4</a></li><i className="fas fa-headphones"
                            ></i>
                            <li><a href="#Ps4pro">Ps4 Pro</a></li><i className="fas fa-headphones"
                            ></i>
                            <li><a href="#NintendoSwitch">Nintendo Switch</a></li><i className="fas fa-headphones"
                            ></i>
                            <li><a href="#Ps5">Ps5</a></li><i className="fas fa-headphones"
                            ></i>
                            <li><a href="#XboxSeries">Xbox Series S y X</a></li>
                        </ul>
                    </h4>
                </nav>
            </div>

            <scroll-container>
                <scroll-page id="Xbox360">
                    <img src="img/Hoy/Xbox 360 Slim Vertical.png" alt="Xbox slim" width="150" height="150" />
                    <div className="consolahoy">
                        <h3>Xbox 360 slim (Junio 2010)</h3>
                        <p>En 2010, una de las consolas más destacadas que se lanzó fue la Xbox 360 Slim. La Xbox 360 Slim,
                            también conocida como Xbox 360 S, es una revisión de la Xbox 360 original que Microsoft lanzó en
                            2005. Esta versión mejorada de la Xbox 360 presentaba un diseño más delgado y elegante, un disco
                            duro interno de mayor capacidad y algunas mejoras en el hardware y en la refrigeración. Fue un
                            modelo importante en la línea de consolas Xbox de Microsoft y contribuyó al éxito continuo de la
                            plataforma en la séptima generación de consolas.
                            Tenía un diseño elegante, disco duro interno, wifi incorporado, mayor eficiencia energetica,
                            mayor silencio, etc.
                        </p>
                    </div>
                </scroll-page>
                <scroll-page id="Ps Vita">
                    <img src="img/Hoy/ps vita.jpg" alt="Ps vita" width="150" height="150" />
                    <div className="consolahoy">
                        <h3>Ps vita (2011)</h3>
                        <p> La PlayStation Vita es una consola portátil de videojuegos que sucedió a la PlayStation Portable
                            (PSP) y presentaba un conjunto de características mejoradas, incluido un hardware más potente y
                            una pantalla táctil.
                            La PlayStation Vita fue una consola portátil bien recibida por los jugadores y ofreció una
                            amplia gama de juegos, desde títulos exclusivos hasta versiones de juegos populares. A lo largo
                            de su vida útil, se lanzaron varios modelos y versiones diferentes de la PS Vita para satisfacer
                            las necesidades de los usuarios.
                        </p>
                    </div>
                </scroll-page>
                <scroll-page id="Wii u">


                    <img src="img/Hoy/Wii u.jpg" alt="Wii U" width="150" height="150" />
                    <div className="consolahoy">
                        <h3>Wii U (Noviembre 2012)</h3>
                        <p>  Esta consola representó una evolución de la exitosa Wii y presentaba un nuevo controlador llamado el GamePad, que tenía una pantalla táctil incorporada. La Wii U permitía una experiencia de juego asimétrica, donde un jugador podía utilizar el GamePad de manera diferente al resto de los jugadores en la pantalla principal. Aunque no tuvo tanto éxito comercial como su predecesora, la Wii U introdujo algunas innovaciones interesantes en el mundo de los videojuegos.
                            La Wii U fue la primera consola de Nintendo en ofrecer gráficos de alta definición (HD), lo que permitió una calidad visual significativamente mejorada en comparación con la Wii original.
                            La Wii U introdujo el servicio en línea de Nintendo llamado Nintendo Network, que permitía a los jugadores competir en línea, descargar juegos y contenido adicional, y conectarse con otros jugadores a través de Miiverse, una red social de Nintendo.
                            También tenía sus juegos exclusivos.
                            Se discontinuó en el 2017.
                        </p>
                    </div>
                </scroll-page>
                <scroll-page id="Xboxone">

                    <img src="img/Hoy/xboxone.jpg" alt="Xbox one" width="150" height="150" />
                    <div className="consolahoy">
                        <h3>Xbox one (Noviembre, 2013) </h3>
                        <p>La Xbox One presentó un hardware significativamente más potente en comparación con su predecesora, la Xbox 360. Estaba equipada con un procesador de 8 núcleos, 8 GB de memoria RAM y una unidad de disco duro de 500 GB.
                            Una característica distintiva de la Xbox One fue la inclusión de Kinect 2.0, una versión mejorada de su sistema de detección de movimiento. Esto permitía a los jugadores controlar la consola mediante gestos y comandos de voz, lo que brindaba una experiencia de juego más inmersiva.
                            Promovía la multitarea, permitiendo a los usuarios cambiar rápidamente entre aplicaciones y juegos, así como ver televisión mientras jugaban. También se promovió como un centro de entretenimiento multimedia, con aplicaciones para servicios de transmisión como Netflix y Hulu.
                            Esta misma, compítió directamente con la ps4.

                        </p>
                    </div>

                </scroll-page>
                <scroll-page id="Ps4">

                    <img src="img/Hoy/ps4.png" alt="ps4" width="150" height="150" />
                    <div className="consolahoy">
                        <h3>Playstation 4 Slim (Noviembre, 2013) </h3>
                        <p> La gran rival de la Xbox One. La PS4 presentaba un hardware considerablemente más potente en comparación con su predecesora, la PlayStation 3. Estaba equipada con un procesador de 8 núcleos, 8 GB de memoria RAM GDDR5 y una GPU personalizada basada en la arquitectura AMD.
                            Introdujo el controlador DualShock 4, que incluía características como un panel táctil en el centro, una barra de luz LED para el seguimiento de movimiento y un conector para auriculares, lo que mejoraba la experiencia de juego y la interacción con la consola.
                            Promovió una serie de videjuegos exclusivos, que al día de hoy siguen siendo un exito, tales como Uncharted 4 , The last of us Remasteres, Horizon Zero dawn, entre otros.
                            Ofrecía servicios en línea como PlayStation Network (PSN) y PlayStation Plus, que permitían a los jugadores jugar en línea, acceder a juegos gratuitos cada mes y disfrutar de otras funciones en línea y a su vez facilitaba el poder transmitir el juego que estás jugando.
                            La PS4 se convirtió en una de las consolas más vendidas de su generación y contribuyó al éxito continuo de Sony en la industria de los videojuegos.
                        </p>
                    </div>

                </scroll-page>
                <scroll-page id="Ps4pro">

                    <img src="img/Hoy/ps4pro.jpg" alt="ps4pro" width="150" height="150" />
                    <div className="consolahoy">
                        <h3>Playstation 4 PRO (Septiembre,2016) </h3>
                        <p>  La PS4 Pro es una versión mejorada de la PlayStation 4 estándar y está diseñada para ofrecer un rendimiento de juego y una calidad de imagen mejorados, así como admitir la reproducción de contenido en resolución 4K y HDR (alto rango dinámico).
                            Está equipada con una GPU más potente y un CPU mejorado en comparación con la PS4 estándar. Esto permite una mayor capacidad de procesamiento gráfico y un rendimiento general más rápido en los juegos.
                            Además de los juegos, la PS4 Pro es capaz de reproducir contenido multimedia en resolución 4K, incluyendo películas y programas de transmisión en 4K.
                        </p>
                    </div>

                </scroll-page>
                <scroll-page id="NintendoSwitch">

                    <img src="img/Hoy/Nintendo swtich.jpg" alt="Nintendoswitch" width="150" height="150" />
                    <div className="consolahoy">
                        <h3>Nintendo Switch (2017) </h3>
                        <p> La Nintendo Switch es una consola híbrida que se puede utilizar tanto como una consola de sobremesa como una consola portátil. Es conocida por su versatilidad y su capacidad para permitir a los jugadores cambiar entre jugar en una pantalla de televisión y en una pantalla táctil portátil.
                            La Nintendo Switch fue un gran éxito para Nintendo y rápidamente ganó popularidad debido a su catálogo de juegos exclusivos, como "The Legend of Zelda: Breath of the Wild" y "Super Mario Odyssey". La capacidad de jugar en casa y llevar la consola fácilmente a cualquier lugar la hizo atractiva para una amplia audiencia de jugadores.
                            Por otro lado, los controladores Joy-Con son versátiles y se pueden usar tanto de forma independiente en cada mano como acoplados a la consola. También se pueden utilizar en modo portátil, en modo sobremesa o incluso compartirse para jugar en modo multijugador.
                            Algunos juegos que inicialmente se lanzaron en la consola Wii U de Nintendo se relanzaron y mejoraron para la Nintendo Switch, lo que permitió que una nueva audiencia disfrutara de estos títulos.
                        </p>
                    </div>

                </scroll-page>
                <scroll-page id="Ps5">

                    <img src="img/Hoy/ps5.jpeg" alt="Ps5" width="150" height="150" />
                    <div className="consolahoy">
                        <h3>Playstation 5 (Noviembre, 2020) </h3>
                        <p> Cuenta con una CPU AMD Ryzen Zen 2 con 8 núcleos a 3.5 GHz, GPU AMD RDNA 2 con 10.28 teraflops y 36 unidades de cómputo a 2.23 GHz y
                            una memoria RAM: 16 GB GDDR6.
                            Su almacenamiento, es una unidad de estado sólido (SSD) personalizado de 825 GB para una carga rápida de juegos y tiempos de carga reducidos y su Unidad Blu-ray 4K UHD.
                            Cuenta con una resolucion maxima de 4K a 120 Hz, con soporte para ray tracing.
                            La PS5 incluye el controlador DualSense, que presenta características innovadoras, como retroalimentación háptica avanzada y gatillos adaptativos que pueden proporcionar diferentes niveles de resistencia según la acción en el juego.
                            es compatible con una amplia variedad de juegos de la PlayStation 4 (PS4), lo que permite a los jugadores disfrutar de sus títulos antiguos en la nueva consola.
                            Tambien cuenta con servicio en linea y como accesorio un visor de realidad virtual que se consigue a parte.
                        </p>
                    </div>

                </scroll-page>
                <scroll-page id="XboxSeries">

                    <img src="img/Hoy/xbox series s.jpg" alt="Xbox series S " width="150" height="150" />
                    <img src="img/Hoy/xbox series x.jpeg" alt="Xbox series X" width="150" height="150" />
                    <div className="consolahoy">
                        <h3>Xbox series S y X (Noviembre, 2020) </h3>
                        <p> Cuentan las dos con caracteristicas muy parecidas entre ellas. Cpu,rocesador AMD Ryzen Zen 2 personalizado con 8 núcleos a 3.8 GHz.
                            Gpu,AMD RDNA 2 con 12 teraflops y 52 unidades de cómputo a 1.825 GHz.
                            16 Gb de memoria ram la X y la S 10Gb.
                            La X cuenta con almacenamiento de disco solido de 1Tb mientras que la S con 512gb.
                            La Xbox Series S se destaca por su diseño más pequeño y su precio más bajo en comparación con la Xbox Series X, lo que la hace atractiva para aquellos que buscan una experiencia de juego de próxima generación a un costo más bajo.
                            La Xbox Series X es compatible con una amplia gama de juegos de Xbox One, Xbox 360 y la Xbox original, lo que permite a los jugadores disfrutar de títulos antiguos con mejoras de rendimiento y resolución.
                            Ambas consolas, Xbox Series X y Xbox Series S, forman parte de la misma familia de consolas de próxima generación de Microsoft y comparten muchas de las mismas características, como la retrocompatibilidad, el soporte para juegos en la nube a través de Xbox Game Pass Ultimate y la integración con servicios como Xbox Live y Xbox Game Pass. La elección entre una u otra dependerá de tus preferencias y presupuesto.
                        </p>
                    </div>
                </scroll-page>
            </scroll-container>
            <hr />
            < div class="Novedades">

                <h2>NOVEDADES</h2>
                <p>Te actualizamos sobre novedades del mundo gaming, lanzamiento de consolas, lanzamiento de juegos, mundo streaming, y mas noticias a tiempo real!</p>
            </div>

            <div className="slider-box">
                <ul className="slider">
                    <li>
                        <img src="img/Hoy/gamepass.jpg" alt="gamespass" />
                    </li>
                    <li>
                        <img src="img/Hoy/juegosps4.jpg" alt="ps4juegos" />
                    </li>
                    <li>
                        <img src="img/Hoy/switchjuegos.jpg" alt="switchjuegos" />
                    </li>
                    <li>
                        <img src="img/Hoy/gamepass.jpg" alt="gamespass" />
                    </li>
                    <li>
                        <img src="img/Hoy/juegosps4.jpg" alt="ps4juegos" />
                    </li>
                    <li>
                        <img src="img/Hoy/switchjuegos.jpg" alt="switchjuegos" />
                    </li>
                    <li>
                        <img src="img/Hoy/gamepass.jpg" alt="gamespass" />
                    </li>
                    <li>
                        <img src="img/Hoy/juegosps4.jpg" alt="ps4juegos" />
                    </li>
                    <li>
                        <img src="img/Hoy/switchjuegos.jpg" alt="switchjuegos" />
                    </li>
                </ul>
            </div>

            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    hoy.map(item => (
                        <HoyItem
                            key={item.id}
                            title={item.titulo}
                            subtitle={item.Subtitulo}
                            imagen={item.imagen}
                            body={item.Cuerpo} />)
                    ))
            }
        </main>
    )
};


export default HoyPage;