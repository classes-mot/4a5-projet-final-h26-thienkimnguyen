import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

import "../LoginForm/LoginForm.css";

function LoginForm(){
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

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
        <h2>Se Connecter</h2>

        <div className="control-email">
            <label htmlFor="email">Address Courriel</label>
            <input id="email" name="email" type="email" required></input>
        </div>

        <div className="control-password">
            <label htmlFor="password">Mot de Passe</label>
            <input id="password" name="password" type="password" required></input>
        </div>
        
        <p className="form-actions">
            <button type="submit" className="button-login">Se Connecter</button>

            <span className="signup-text">
                Vous n'avez pas de compte?
                <button type="button" className="button-signup">S'enregistrer</button>
            </span>
        </p>
    </form>
    );
}

export default LoginForm;