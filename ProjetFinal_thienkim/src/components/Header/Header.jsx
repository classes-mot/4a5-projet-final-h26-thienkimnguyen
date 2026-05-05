import logo from "../../assets/placementHolder.png";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NavLink from "../Navigation/NavLink.jsx";
import SideDrawer from "../Navigation/SideDrawer.jsx";
import Backdrop from "../UIElements/Backdrop.jsx";
import { useState } from "react";


function Header(){
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    let title = "Maison Hanoi";

    const openDrawer = () => {
        setDrawerIsOpen(true);
    };
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };
    return(
        <>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
            {drawerIsOpen && (
                //Lors de l'appuie sur un des commandes, le SideDrawer va se fermer
                <SideDrawer onClick={closeDrawer}> 
                    <nav className="main-header_drawer">
                    <NavLink />
                    </nav>
                </SideDrawer>
            )}
            <header className="main-head_banner">
                <button className="main-side_buttons" onClick={openDrawer}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <img src={logo} alt={title} className="logo"/>
                <h1 className="main-title">
                    <Link to="/">{title}</Link>
                </h1>
                <nav className="main-header_navigation">
                    <NavLink/>
                </nav>
            </header>
        </>
    );
};

export default Header;