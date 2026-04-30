import { NavLink } from "react-router-dom";
import "./NavLink.css";

const NavLinks = (props) => {
    return (
        <ul className="nav-links">
            {props.children}
            <li>
                <NavLink to="/">À propos</NavLink>
            </li>
            <li>
                <NavLink to="/order">Commander</NavLink>
            </li>
            <li>
                <NavLink to="/review">Avis</NavLink>
            </li>
            <li>
                <NavLink to="/login">Se connecter</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;