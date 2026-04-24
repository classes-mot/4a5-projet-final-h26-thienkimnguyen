import Header from "../components/Header/Header.jsx";

const ErrorPage = () => {
    return(
        <>
        <Header></Header>
        <main>
            <h1>
                404
            </h1>
            <h2>
                Page introuvable
            </h2>
            <p>
                Oops, cette page est introuvable!
                Réessayez plus tard..
            </p>
        </main>
        </>
    );
};

export default ErrorPage;