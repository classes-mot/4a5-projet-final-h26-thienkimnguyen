import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Footer(){
    const { t } = useTranslation();
    return(
        <footer className="main-foot_banner">
            <div className="foot-elem">
                <h4> Maison Hanoi </h4>
                <nav className="footer-nav">
                    <Link to="/" className="foot-link">{t('nav.propos')}</Link>
                    <Link to="/order" className="foot-link">{t('nav.commander')}</Link>
                    <Link to="/review" className="foot-link">{t('nav.avis')}</Link>
                </nav>

                <p className="copyright">
                    © Maison Hanoi 2026
                </p>
            </div>
        </footer>
    );
}

export default Footer;