import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import "../LoginForm/LoginForm.css";

function LoginForm(){
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleSubmit(event){
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd);

        if(!data.email.trim() || !data.password.trim()){
            return;
        }

        auth.login(data.email);
        event.target.reset();
        navigate("/", { replace: true });
    }

    return(
    <form className="login-form" onSubmit={handleSubmit}>
        <h2>{t('login.titre')}</h2>

        <div className="control-email">
            <label htmlFor="email">{t('login.courriel')}</label>
            <input id="email" name="email" type="email" required></input>
        </div>

        <div className="control-password">
            <label htmlFor="password">{t('login.password')}</label>
            <input id="password" name="password" type="password" required></input>
        </div>
        
        <p className="form-actions">
            <button type="submit" className="button-login">{t('login.titre')}</button>

            <span className="signup-text">
                {t('login.question')}
                <Link to="/signup" className="button-signup">
                    {t('login.signup')}
                </Link>
            </span>
        </p>
    </form>
    );
}

export default LoginForm;