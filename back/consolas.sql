-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-11-2023 a las 00:00:16
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `consolas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hoy`
--

DROP TABLE IF EXISTS `hoy`;
CREATE TABLE IF NOT EXISTS `hoy` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Subtitulo` text COLLATE utf8mb4_general_ci NOT NULL,
  `Cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hoy`
--

INSERT INTO `hoy` (`id`, `titulo`, `img_id`, `Subtitulo`, `Cuerpo`) VALUES
(10, 'The Legend of Zelda: Miyamoto confiesa cuánto tiempo lleva trabajando en la película', 'btk69rsbnghdwuq7ds5r', 'Parece que las cosas se están tomando con calma en el proyecto de Nintendo', 'Una de las noticias de la semana fue, sin duda, la confirmación de la película live-action de The Legend of Zelda, por lo que se siguen revelando detalles que dan una idea de lo que se ofrecerá en el futuro. Ahora, los responsables del proyecto revelaron cuánto tiempo llevan trabajando en él.\r\n\r\nComo seguramente recordarás, la cinta de Nintendo ya está en producción con el talento de Shigeru Miyamoto y Avi Arad, jefe de la casa productora Arad Productions Inc., además de que será dirigida por Wes Ball y financiada por Nintendo y Sony Pictures Entertainment Inc..Cabe señalar que algunas pistas sugieren que la película tomará la trama de The Legend Zelda: Breath of the Wild y The Legend of Zelda: Tears of the Kingdom, aunque nada está escrito por el momento.'),
(17, 'Fortnite Orígenes bate récords históricos: 44 millones de jugadores en un solo día de su temporada \"OG\"', 'ydyar9ekk87q1mjn77vy', 'Fortnite está rompiendo registros con su nueva temporada.', 'Fortnite OG o Fortnite Orígenes, la nueva y fugaz temporada de Fortnite, está batiendo récords históricos en el popular Battle Royale de Epic Games. El pasado 4 de noviembre, que dio inicio la temporada de \"Fortnite Orígenes\", se trajeron de vuelta el ecosistema y el mapa del primer año del juego, resultando en un absoluto fenómeno de masas con unos datos históricos para el famoso título.\r\nFortnite Orígenes es un evento de lo más atípico dentro del ecosistema del juego. Con un viaje en el tiempo que durará apenas un mes, todos los jugadores pueden disfrutar actualmente de la experiencia del juego que había en 2018: el mapa original, los coches y camiones del mapa son atrezzo, y desaparecen mecánicas como el nado o el uso de habilidades temporales.\r\n\r\nPor otro lado, cada semana se irá renovando el aspecto de la Temporada Orígenes porque pasará de manera exprés por diversas temporadas que tuvieron lugar en el mapa del Capítulo 1. Por tanto, si el comienzo ha sido basado en la Temporada 5, la siguiente será la Temporada 6 y contará con modificaciones del mapa que tuvieron lugar en aquel momento. De igual modo, la tercera semana se espera que represente la Temporada 8/9 y la última semana de Orígenes se base en la Temporada X.'),
(18, 'Call of Duty Advanced Warfare 2 se habría cancelado para desarrollar Modern Warfare 3', 'rsuydxtwafrchrjcmbdu', 'Sledgehammer Games tenía intención de volver al mundo futurista de Advanced Warfare, pero Activision necesitó Modern Warfare 3 para este año.', 'Call of Duty: Modern Warfare 3 ya está a la venta. Ha recibido algunas críticas por sus misiones y escaso contenido de la campaña porque tuvo un tiempo de desarrollo muy escaso. Liderando el proyecto se encuentra Sledgehammer Games, creadores de Call of Duty: Advanced Warfare, Call of Duty: WWII y Call of Duty: Vanguard -además de colaborar en múltiples proyectos- y ahora sabemos que de no trabajar en Modern Warfare 3 tendrían entre manos un Call of Duty: Advanced Warfare 2.\r\nSegún Jason Schreier, Advanced Warfare 2 era el proyecto que tenía previsto Sledgehammer Games hasta que se necesitó el Call of Duty para este año. No sabemos si habría continuado la historia o sólo aprovecharía el mundo del original, pero recuperaría la guerra futurista y la movilidad con jet packs. El juego habría incluido una nueva campaña, multijugador y modo zombis, pero no llegó muy lejos: Activision pidió a Sledgehammer que se encargase de Modern Warfare 3.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Lucia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Debora', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
