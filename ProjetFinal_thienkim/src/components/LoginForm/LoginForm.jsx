import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
            <label htmlFor="email">Adresse Courriel</label>
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
                <Link to="/signup" className="button-signup">
                    Inscrivez-vous dès maintenant
                </Link>
            </span>
        </p>
    </form>
    );
}

export default LoginForm;