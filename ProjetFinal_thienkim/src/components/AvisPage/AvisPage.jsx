import { Link } from "react-router-dom";
import NewAvis from "../../containers/NewAvis.jsx";
import Avis from "../Avis/Avis.jsx";
import "./AvisPage.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const AvisPage = ({ items }) => {
    const { t } = useTranslation();
    return (
        <div className="avis-page">
            <header className="avis-header">
                <h1>{t('avis.titre')}</h1>
                <p>{t('avis.phrase')}</p>

                <Link to="/review/new" className="add-review-btn">
                    {t('avis.phrase_ajouter')}
                </Link>
            </header>

            <section className="avis-list-section">
                <Avis items={items} />
            </section>
        </div>
    );
};

export default AvisPage;