import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(){
    return(
        <footer className="main-foot_banner">
            <div className="foot-elem">
                <h4> Maison Hanoi </h4>
                <nav className="footer-nav">
                    <Link to="/about" className="foot-link">À propos</Link>
                    <Link to="/order" className="foot-link">Commander</Link>
                    <Link to="/reviews" className="foot-link">Avis</Link>
                </nav>

                <p className="copyright">
                    © Maison Hanoi 2026
                </p>
            </div>
        </footer>
    );
}

export default Footer;