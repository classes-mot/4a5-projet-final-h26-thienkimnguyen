import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./NavLink.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const NavLinks = (props) => {
    const auth = useContext(AuthContext);
    const { t } = useTranslation();

    return (
        <ul className="nav-links">
            {props.children}
            <li>
                <NavLink to="/">{t('nav.propos')}</NavLink>
            </li>

            { auth.isLoggedIn && 
                <li>
                    <NavLink to="/order">{t('nav.commander')}</NavLink>
                </li>
            }    

            <li>
                <NavLink to="/review">{t('nav.avis')}</NavLink>
            </li>
            
            { !auth.isLoggedIn && 
                <li>
                    <NavLink to="/login">{t('nav.login')}</NavLink>
                </li>
            }

            { auth.isLoggedIn && 
                <li>
                    <button className="logout-btn" onClick={auth.logout}>
                                {t('nav.logout')}
                            </button>
                </li>       
            }
        </ul>
    );
};

export default NavLinks;