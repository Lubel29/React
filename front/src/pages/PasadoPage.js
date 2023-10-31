import '../styles/PasadoPage.css'

const PasadoPage = (props) => {
    return (
        <>
            <article id="fondo">
                <aside>
                    <div class="dato">
                        <h4>¿Sabías qué....?</h4>
                        <blockquote>En 1982 la compañía Atari, lanzó el juego sobre ET, la popular película de Spielberg que acababa
                            de estrenarse.
                            Se desarrolló en apenas cuatro semanas y el resultado fue horrible.
                            Fue tal el fracaso que Atari enterró millones de copias en el desierto de Nuevo México que finalmente en
                            2014 fueron descubiertas.</blockquote>
                    </div>
                </aside>

                <div className="Cajapasado">
                    <main className="holder">
                        <div className="intropasado">
                            <h2>Momento nostalgico (1972-1996)</h2>

                            <p>Las primera consolas fueron producto de investigacion y desarrollo y tuvieron lugar en la decada de los
                                60s sin fines comerciales, pero con gran exito para inspirar a creadores a ir por más y combinar el
                                entretenimiento de la tv con un condimento dinámico.</p>
                            <p> A partir de esto, a principios de los 70s se lanzó la primera consola al mercado, la cual llamaron
                                "Magnavox Odyssey" y a partir de ahí emergieron muchas más las cuales hoy en día seguimos incluso
                                disfrutando.</p>
                            <p> Los invito a un recorrido por nuestro pasado gaming!</p>

                            <hr />
                        </div>
                        <h3>Consolas 70s 80s 90s</h3>

                        <div className="Consola">
                            <img src="img/Pasado/magnavox.jpg" alt="Magnavox odyssey" />
                            <div className="tipo">
                                <h3>Magnavox Odyssey (Mayo 1972)</h3>
                                <p>Fue la primera consola doméstica de videojuegos, lanzada en EEUU, fue diseñada por Ralph H Baer.
                                    Si bien, el prototipo se habia creado en marzo de 1967, no fue hasta 1972 que le dieron luz
                                    verde y Baer pudo finalmente firmar contrato con Magnavox.
                                    El lanzamiento provocó "La locura del Pong" ya que con él, venía un juego parecido al ping pong
                                    tradicional.
                                    También contaba con uno de voleibol y un juego de una galeria de tiro para el que habian
                                    diseñado un rifle que detectaba los blancos en la pantalla de la TV.
                                    En un año se vendieron 130.000 unidades pero algunos fallos provocaron que sus ventas no fuesen
                                    mayores, además de que su costo llegó a ser más de $100 dolares.
                                    Contaba con un hardware reducido, carecía de sonido y los jugadores debian anotar sus
                                    puntuaciones manualmente.</p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/Fairchild Channel F.jpeg" alt="Fairchild" />
                            <div className="tipo">
                                <h3>Fairchild Channel F ( Agosto 1976) </h3>
                                <p>Primera consola con microprocesador y cartuchos o ROMs. Diseñado por Jerry Lawson. Su precio fue
                                    de
                                    $169 dolares. Sus juegos eran en color (8 colores) y emitía sonido, lo que causó una revolución
                                    en
                                    la historia de los videojuegos.
                                    Contaba con 64 bytes de RAM y los cartuchos almacenaban información.
                                    LLegaron a venderse 250.000 unidades pero cometieron un grave error al no patentar sus juegos y
                                    por
                                    esto es que no pudo competir con la proxima consola... La famosisima, ATARI 2600.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/Atari.jpg" alt="Atari 2600" />
                            <div className="tipo">
                                <h3>Atari VCS 2600 ( Septiembre 1977)</h3>
                                <p>Si bien Atari no fue la primera consola con cartuchos intercambiables, obtuvo grandes licencias
                                    de videojuegos.
                                    Por un lado se encontraba "Pac Man", que logró vender más de 10 millones de copias; "Space
                                    invaders" que impulsó la venta de consolas y por otro lado "ET, el extraterrestre" que se diseñó
                                    para aprovechar el lanzamiento de la película pero fue un fracaso absoluto.
                                    A partir de ahí, Atari decayó, por haber invertido millones para un juego que terminó con la
                                    creación de esta consola y muchas mentes creadoras de esta compañia se fueron para crear
                                    "Activision".
                                    La Atari 2600 llegó a constar alrededor de $199 dolares. Contaba con 128bytes de RAM, colores
                                    128, conector RCA para audio y video.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/Coleco-Telstar-Arcade-Pongside-L.jpg" alt="Coleco arcade" width="300" />
                            <div className="tipo">
                                <h3>Coleco Telstar Arcade (1976) </h3>
                                <p>Si bien desde 1976 a 1977 se lanzaron varias versiones de Coleco, la más polemica y extraña fue
                                    la Coleco Telstar Arcade.
                                    La consola tenía forma triangular, contaba con 3 caras. Cada una de ellas adaptada para jugar a
                                    cada uno de los 3 juegos que estaban grabados en su memoria.
                                    Una cara permitía jugar juegos como el PONG , tenis y similares; la otra cara juegos de tiro al
                                    blanco (contaba con un arma); y la tercera, juegos de carrera (tenía un volante)
                                    Los cartuchos tambien tenían forma triangular algo muy poco común. Solo se lanzaron 4 cartuchos.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/Odyssey2.png" alt="odyssey 2" />
                            <div className="tipo">
                                <h3>Magnavoz Odyssey 2 / Phillips videopac g7000 (1978)</h3>
                                <p>Vuelve Magnavox duplicando apuestas, con graficos mejorados y a color, procesador de 8 bits y
                                    cartuchos de juegos intercambiables.
                                    Incluía teclado y una serie de accesorios como un modulo d evoz y una expansion de memoria. Los
                                    juegos más populares fueron "K C Munchking" muy parecido al Pac Man; "Atlantis"; "Popeye" y
                                    "Quest for the rings" basado en el universo del "Señor de los anillos".
                                    A pesar de todo esto, no tuvo tanto exito y se dejó de fabricar en 1984.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/atari5200.png" alt="Atari 5200" />
                            <div className="tipo">
                                <h3>Atari 5200 (1982)</h3>
                                <p>Atari reversionó su anterior modelo agregando graficos mejorados, 16k de RAM, 8 bits, un nuevo
                                    estilo de joystick analogico con teclado numerico y dos botones de disparo a cada lado.
                                    Fue la primera consola en poder permitir cambiar la TV de señal directamente desde la consola.
                                    Pero no todo salió como se esperaba...Los usuarios notaron que los controles eran muy fragiles y
                                    se rompian facilmente, por eso es que son tan dificiles de encontrar hoy en dia por los
                                    coleccionistas.
                                    En total lanzaron 69 juegos.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/NES.jpg" alt="NES" />
                            <div className="tipo">
                                <h3>Nintendo entertinment system (1985)</h3>
                                <p> Tambien conocida como NES o en japón como "Family computer", surgió como salvación para paliar
                                    la crisis de los videojuegos de 1983-1984.
                                    Su creador "Masayuki uemura" y un equipo de desarrolladores crearon un sistema de 8 bits, que ya
                                    pertenecian a la tercera generacion en la industria, era de bajo costo para hacer frente a los
                                    competidores y por eso es que fue la más vendida de su epoca,
                                    con un total de 60 millones de unidades vendidas.
                                    Tuvo los mejores juegos de la epoca , desde el titulo más vendido "Super Mario Bros" hasta
                                    juegos mundialmente reconocidos como "Tetris", "The legend of Zelda", "Excitebike", "Duck Hunt",
                                    etc.
                                    Sin dudas, un antes y un despues en la historia de las consolas más populares.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/Segamastersystem.jpeg" alt="Sega Master System" />
                            <img src="img/Pasado/System2.png" alt="Sega master system 2" />
                            <div className="tipo">
                                <h3>Sega Master System y Sega Master System II (1985-1990)</h3>
                                <p> Fue lanzada por la compañía Sega en 1985 con el nombre de Sega Mark II en Japón.
                                    Luego se rediseñó para su lanzamiento en norteamerica y fue renombrada como Master System,
                                    lanzada en 1986 en Norteamérica, 1987 en Europa y 1989 en Brasil.
                                    Sus mayor rival era la NES de Nintendo.
                                    Salió a la venta por un precio de $200 dolares, contaba con 8 bits y 64 colores.
                                    Sin exito en un mercado liderado por Nintendo se decide vender los derechos a Tonka.
                                    Por esto es que desiden lanzar en 1990 la "Master system 2" que fue una opcion más econocomica
                                    pero seguía siendo 8 bits y carecía de muchas variedades que ya existian en otras consolas del
                                    mercado.
                                    Estaba enfocada a los más jóvenes como consola de iniciación o a aquellas familias de menor
                                    capacidad adquisitiva.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/sega.png" alt="Mega drive" />
                            <img src="img/Pasado/segagenesis.png" alt="Sega genesis" />
                            <div className="tipo">
                                <h3>Sega Mega drive o Sega genesis (1988) </h3>
                                <p>Nos encontramos con la sucesora de la Master System lanzada por Sega Enterprises y competencia
                                    bastante fuerte de Super Nintendo de Nintendo.
                                    La primera fue lanzada en Japón en 1988 y luego por Norteamérica en 1989.
                                    El sistema alberga una biblioteca de mas de 900 juegos creados por Sega, siendo publicados en
                                    forma de cartuchos, contaba con 16 bits aunque algunos cartuchos llegabana 24Mbits y una calidad
                                    de audio superior a lo que se conocía hasta entonces. También era capaz de reproducir juegos de
                                    Master System cuando se instala el Master System Converter que se vendía por separado.
                                    Lanzó su popular saga “Sonic the Hedgehog” que fue un personaje mundialmente reconocido y
                                    competencia directa de el famoso plomerito, “Mario Bros” de Nintendo.
                                    Tuvo una fuerte polémica al lanzar títulos violentos como “Night trap o Mortal Kombat”.Sin
                                    embargo, Sega logró vender 30.75 millones de unidades de Mega Drive en todo el mundo.
                                    Hoy en día muchos juegos que se lanzaron en esta consola se siguen jugando ya sea para revivir
                                    viejos clásicos o jugando las nuevas versiones para consolas modernas.
                                    Algunos de sus juegos populares eran “La saga Sonic, Golden Axe, Taz- Mania, Street fighter 2,
                                    Fifa 95 , Castlevania, Megaman, Mortal Kombat, Streets of Rage, etc”
                                    Fue sucedida por Sega Saturn en 1995. </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/SuperFamicon.png" alt="Super Famicon" />
                            <img src="img/Pasado/Supernintendo.jpeg" alt="Super nintendo" />
                            <div className="tipo">
                                <h3>Super Nintendo Entertainment System (Noviembre, 1990)</h3>
                                <p> Como ya les conté, en la década de los 80 Nintendo se había consolidado en el mercado gracias a
                                    la NES. Después de su gran éxito con NES, salió al mercado la Sega Mega Drive que ya contaba con
                                    16 bits, por esto es que Nintendo decidió no quedarse atrás y sacar al mercado la “Super
                                    Famicom”, que luego la rediseñaron en Norteamérica y se llamó “Super Nintendo. Salía unos $200
                                    dolares y fue un éxito inmediato. Los usuarios sabían que Nintendo no les podía fallar y
                                    apostaron a ellos.
                                    Las primeras 300.000 unidades se vendieron en unas horas, el éxito en parte se debió a las
                                    desarrolladores de su sistema anterior, Capcom, Konami, Tecmo, Square Koei y Enix.
                                    Mientras que otras compañías ya estaban pensando en sus sistemas de 32 bits, Nintendo demostró
                                    que era un fuerte competidor y en noviembre de 1994 lanzó Donkey Kong Country, un juegos de
                                    plataforma con modelo 3D y texturas pre renderizadas. Se convirtió en el juego más vendido hasta
                                    la época.
                                    En octubre de 1997, Nintendo lanza un modelo más delgado de la consola el cual incluía “Super
                                    Mario World 2: Yoshis Island.
                                    La producción de las consolas terminaría en 1999 en Norteamérica y 2003 en Japón.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/Atari jaguar.png" alt="Atari jaguar" />
                            <div className="tipo">
                                <h3>Atari jaguar (1993) </h3>
                                <p> Se fabricaron muy pocas unidades, pero la consola estaba muy avanzada para la época, 64 bits
                                    cuando la Nintendo y segura seguian con sus 32 bits.
                                    Esta consola utilizaba cartuchos de videojuegos, aunque posteriormente salió a la venta su
                                    unidad de CD, la Atari Jaguar CD.
                                    La Atari jaguar igualemnte fracasó por su escasa variedad de videojuegos e iualmente recuperó un
                                    tercer puesto en las mejores consolas, siendo igualmente Sega y Nintendo los lideres del
                                    mercado.
                                    Este sin duda fue le fin de Atari.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/sega-saturn.png" alt="Sega Saturn" />
                            <div className="tipo">
                                <h3>Sega Saturn (1994)</h3>
                                <p> Ya perteneciente a la 5ta generacion, es la sucesora de la Sega Mega drive y competencia directa de la Playstation 1 y la Nintendo 64.
                                    Contaba con más de 1000 juegos, en fomato CD, 9,26 millones de unidades vendidas a nivel mundial que igualmente no alcanzó para competir contra Ps1 y Nintendo 64.
                                    Sega detuvo la comercialización de Saturn en 1998 para dar paso a Dreamcast.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/Playstation1.jpeg" alt="Ps1" />
                            <div className="tipo">
                                <h3>Playstation 1 (Diciembre, 1994)</h3>
                                <p> Su lanzamiento fue un auténtico éxito contra todo pronóstico, vendiendo más de 100.000 unidades en su primer día en Japón (primero fue lanzada en este país de forma exclusiva).
                                    En total se han vendido aproximadamente 105 millones de unidades a nivel mundial.
                                    El desarrollo de videojuegos fue exclusivo para ps1, las franquicias Premier de PlayStation incluyeron Gran Turismo, Crash Bandicoot, Tomb Raider y Final Fantasy, todas las cuales generaron numerosas secuelas.
                                    Tenían Tarjetas de memoria ya que contaban con juegos muy largos, y servian para guardarlos y poder continuarlos.
                                    Una memoria Ram de 1MB y graficos 3D complejos.
                                    El verdadero exito ya a finales de los 90 que se extiendo 10 u 11 años más.
                                </p>
                            </div>
                        </div>
                        <div className="Consola">
                            <img src="img/Pasado/Nintendo64.png" alt="Nintendo 64" />
                            <div className="tipo">
                                <h3>Nintendo 64 (junio,1996)</h3>
                                <p> Apareció Nintendo de nuevo pero ahora con sus 64 bits, el soporte de almacenamiento de los juegos era en forma de cartuchos, la mayoría de ellos con memoria interna.
                                    Se venden más de 500.000 el primer día. A principios de septiembre sale a la venta otra consola: la Game Boy Pocket de Nintendo; una elegante versión un 30 por ciento más reducida de la consola portátil más popular del mundo.
                                    Comenzaron a utilziar el control de la cámara con el "Super Mario 64", juego con gran popularidad y exito.  Además, la consola, por primera vez en la industria, permitía el modo multijugador de hasta 4 usuarios simultáneos sin necesidad de un periférico adicional.
                                    Los controles tenían vibración para trasmitir sensaciones al usuario, una novedad hasta entonces.
                                    Un gran golpe de Nintendo a Sony.
                                </p>
                            </div>
                        </div>
                    </main >
                </div>
            </article>
        </>


    )
}


export default PasadoPage;