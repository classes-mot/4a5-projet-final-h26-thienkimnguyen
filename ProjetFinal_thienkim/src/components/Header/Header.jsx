import logo from "../../assets/placementHolder.jpg";
import React from "react";
// import { Link } from "react-router-dom";
import "./Header.css";
//import NavLink from "../Navigation/NavLink.jsx";


function Header(){
    let title = "Placement Title";
    return(
        <header className="head-banner">
            <button className="side-buttons">
                <span/>
                <span/>
                <span/>
            </button>
            <img src={logo} alt={title} className="logo"/>
            <h1>
                <Link to="/">{title}</Link>
            </h1>
            {/* <nav>
                <NavLink/>
            </nav> */}
        </header>
    );
};

export default Header;