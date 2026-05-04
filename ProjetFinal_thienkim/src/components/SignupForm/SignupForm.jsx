import { useState } from "react";

function SignupForm() {
    const [passwordNotEqual, setPasswordNotEqual] = useState(false);

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
            <h1>S'enregistrer</h1>
            <p className="subtitle">Goûtez au Vietnam à chaque bouchée.</p>

            {/* Les inputs des noms et des prénoms des utilisateurs */}
            <div className="control-row">
                <div className="control">
                    <label htmlFor="first-name">Prénom</label>
                    <input type="text" id="first-name" name="first-name" required />
                </div>
                <div className="control">
                    <label htmlFor="last-name">Nom</label>
                    <input type="text" id="last-name" name="last-name" required />
                </div>
            </div>

            {/* Les inputs de l'adresse courriel des utilisateurs */}
            <div className="control">
                <label htmlFor="email">Adresse Courriel</label>
                <input id="email" type="email" name="email" required />
            </div>

            {/* Les inputs du mot de passe des utilisateurs */}
            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">Mot de Passe</label>
                    <input id="password" type="password" name="password" required />
                </div>
                <div className="control">
                    <label htmlFor="confirm-password">Confirmez le mot de passe</label>
                    <input id="confirm-password" type="password" name="confirm-password" required />
                </div>
            </div>
            {/* Si les mots de passe ne sont pas pareils -> messages d'erreur */}
            {passwordNotEqual && (
                <p className="control-error">Les mots de passe ne correspondent pas</p>
            )}

            {/* Les checkboxes des conditions et des offres */}
            <div className="control-checkbox">
                <label>
                    <input type="checkbox" name="news" /> 
                    J'aimerais recevoir par courriel les nouveaux ajouts et les offres.
                </label>
                <label>
                    <input type="checkbox" name="terms" required /> 
                    J'accepte les conditions générales.
                </label>
            </div>

            {/* Bouton de s'enregistrer */}
            <p className="form-actions">
                <button type="submit" className="button-login">S'enregistrer</button>
            </p>
        </form>
    );
}

export default SignupForm;