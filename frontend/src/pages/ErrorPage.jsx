import Header from "../components/Header/Header.jsx";
import "./ErrorPage.css";

const ErrorPage = () => {
    return(
        <>
        <div className="error-container">
            <Header></Header>
            <main className="error-main">
                <div className="error-box">
                    <h1>
                        404
                    </h1>
                    <h2>
                        Page introuvable
                    </h2>
                    <p>
                        Oops, cette page est introuvable!
                    </p>
                    <p>
                        Réessayez plus tard..
                    </p>
                </div>
            </main>
        </div>
        </>
    );
};

export default ErrorPage;