import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./NavLink.css";

const NavLinks = (props) => {
    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            {props.children}
            <li>
                <NavLink to="/">À propos</NavLink>
            </li>

            { auth.isLoggedIn && 
                <li>
                    <NavLink to="/order">Commander</NavLink>
                </li>
            }    

            <li>
                <NavLink to="/review">Avis</NavLink>
            </li>
            
            { !auth.isLoggedIn && 
                <li>
                    <NavLink to="/login">Se connecter</NavLink>
                </li>
            }

            { auth.isLoggedIn && 
                <li>
                    <button className="logout-btn" onClick={auth.logout}>
                                Se déconnecter
                            </button>
                </li>       
            }
        </ul>
    );
};

export default NavLinks;