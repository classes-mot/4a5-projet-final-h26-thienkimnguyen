import { Link } from "react-router-dom";
import NewAvis from "../../containers/NewAvis.jsx";
import Avis from "../Avis/Avis.jsx";
import "./AvisPage.css";

const AvisPage = ({ items }) => {
    return (
        <div className="avis-page">
            <header className="avis-header">
                <h1>Avis</h1>
                <p>Découvrez les expériences de nos clients</p>

                <Link to="/review/new" className="add-review-btn">
                    Ajouter un avis
                </Link>
            </header>

            <section className="avis-list-section">
                <Avis items={items} />
            </section>
        </div>
    );
};

export default AvisPage;