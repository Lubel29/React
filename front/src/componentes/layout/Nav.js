// import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom"

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" className={({isActive})=> isActive ? "activo": undefined}>Home</NavLink></li>
                    <li><NavLink to="/Pasado"className={({isActive})=> isActive ? "activo": undefined}>Nostalgia (1972-1996)</NavLink></li>
                    <li><NavLink to="/Decada"className={({isActive})=> isActive ? "activo": undefined}> Apogeo (1996-2010)</NavLink></li>
                    <li><NavLink to="/Hoy"className={({isActive})=> isActive ? "activo": undefined}> Hoy (2010-actualidad)</NavLink></li>
                    <li><NavLink to="/Futuro"className={({isActive})=> isActive ? "activo": undefined}>¿Qué nos depara el futuro del gaming?</NavLink></li>
                </ul>

            </div>
        </nav>

    )
}

export default Nav;