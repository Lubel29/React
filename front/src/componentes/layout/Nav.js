import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Pasado">Nostalgia (1972-1996)</Link></li>
                    <li><Link to="/Decada"> Apogeo (1996-2010)</Link></li>
                    <li><Link to="/Hoy"> Hoy (2010-actualidad)</Link></li>
                    <li><Link to="/Futuro">¿Qué nos depara el futuro del gaming?</Link></li>
                </ul>

            </div>
        </nav>

    )
}

export default Nav;