import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Panier from "../components/Panier/Panier.jsx";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher.jsx";

function RootLayout({panier, majPanier, addToPanier, deleteItem, addAvis}){
    return(
        <>
            <Header/>
            <Panier panier={panier} majPanier={majPanier} deleteItem={deleteItem}/>
            <main>
                <Outlet context={{addToPanier, addAvis}}/>
            </main>
            <LanguageSwitcher />
            <Footer/>
        </>
    );
};

export default RootLayout;