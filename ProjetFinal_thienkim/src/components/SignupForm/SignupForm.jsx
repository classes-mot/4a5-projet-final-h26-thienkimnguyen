import { useState } from "react";
import "./SignupForm.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function SignupForm() {
    const [passwordNotEqual, setPasswordNotEqual] = useState(false);
    const { t } = useTranslation();

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        
        if (data.password !== data["confirm-password"]) {
            setPasswordNotEqual(true);
            return;
        }
        
        setPasswordNotEqual(false);
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h1 className="titre">{t('signup.titre')}</h1>
            <h2 className="message">{t('signup.message')}</h2>

            {/* Les inputs des noms et des prénoms des utilisateurs */}
            <div className="control-row">
                <div className="control">
                    <label htmlFor="first-name">{t('signup.prenom')}</label>
                    <input type="text" id="first-name" name="first-name" required />
                </div>
                <div className="control">
                    <label htmlFor="last-name">{t('signup.nom')}</label>
                    <input type="text" id="last-name" name="last-name" required />
                </div>
            </div>

            {/* Les inputs de l'adresse courriel des utilisateurs */}
            <div className="control">
                <label htmlFor="email">{t('signup.courriel')}</label>
                <input id="email" type="email" name="email" required />
            </div>

            {/* Les inputs du mot de passe des utilisateurs */}
            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">{t('signup.password')}</label>
                    <input id="password" type="password" name="password" required />
                </div>
                <div className="control">
                    <label htmlFor="confirm-password">{t('signup.confirmer')}</label>
                    <input id="confirm-password" type="password" name="confirm-password" required />
                </div>
            </div>
            {/* Si les mots de passe ne sont pas pareils -> messages d'erreur */}
            {passwordNotEqual && (
                <p className="control-error">{t('signup.erreur')}</p>
            )}

            {/* Les checkboxes des conditions et des offres */}
            <div className="control-checkbox">
                <label>
                    <input type="checkbox" name="news" /> 
                    {t('signup.news')}
                </label>
            </div>
            <div className="control-checkbox">
                <label>
                    <input type="checkbox" name="terms" required /> 
                    {t('signup.terms')}
                </label>
            </div>

            {/* Bouton de s'enregistrer */}
            <p className="form-actions">
                <button type="submit" className="button-login">{t('signup.titre')}</button>
            </p>
        </form>
    );
}

export default SignupForm;