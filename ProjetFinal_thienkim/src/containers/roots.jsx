import { NavLink, Oulet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";

function RootLayout(){
    return(
        <>
            <Header/>
            <main>
                <Oulet/>
            </main>
        </>
    );
};

export default RootLayout;