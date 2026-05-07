import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Panier from "../components/Panier/Panier.jsx";

function RootLayout({panier, majPanier, addToPanier, deleteItem, addAvis}){
    return(
        <>
            <Header/>
            <Panier panier={panier} majPanier={majPanier} deleteItem={deleteItem}/>
            <main>
                <Outlet context={{addToPanier, addAvis}}/>
            </main>
            <Footer/>
        </>
    );
};

export default RootLayout;