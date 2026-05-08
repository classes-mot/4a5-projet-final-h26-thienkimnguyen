import { useOutletContext, useNavigate } from "react-router-dom";
import "./NewAvis.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";

const NewAvis = () => {
    const { addAvis } = useOutletContext();
    const navigate = useNavigate();
    const { t } = useTranslation();

    function addAvisSubmitHandler(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd);
        
        if (data.description.trim() !== "") {
            addAvis(data.description); 
            
            event.target.reset();

            navigate("/review"); 
        }
    }

    return (
        <div className="new-avis-container">
            <button className="back-btn" onClick={() => navigate("/review")}>
                ← {t('avis.retour')}
            </button>

            <form className="avis-form" onSubmit={addAvisSubmitHandler}>
                <h2 className="text">{t('avis.titre_sub1')}</h2>
                <h3 className="text">{t('avis.titre_sub2')}</h3>

                <div className="control">
                    <label className="desc" htmlFor="description">{t('avis.titre')}</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        cols="30"
                        required
                    />
                </div>

                <p className="form-action">
                    <button type="reset" className="button-reset">
                        {t('avis.reset')}
                    </button>
                    <button type="submit" className="button-submit">
                        {t('avis.ajouter')}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default NewAvis;