import { useOutletContext, useNavigate } from "react-router-dom";
import "./NewAvis.css";

const NewAvis = () => {
    const { addAvis } = useOutletContext();
    const navigate = useNavigate();

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
                ← Retour
            </button>

            <form onSubmit={addAvisSubmitHandler}>
                <h2 className="text">Nouvelle Avis</h2>
                <h3 className="text">Dites nous ce que vous pensez !</h3>

                <div className="control">
                    <label htmlFor="description">Avis</label>
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
                        Réinitialiser
                    </button>
                    <button type="submit" className="button-submit">
                        Ajouter
                    </button>
                </p>
            </form>
        </div>
    );
};

export default NewAvis;