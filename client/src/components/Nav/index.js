import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="nav nav-dark bg-dark justify-content-end" >
            <a className="nav-link text-white" href="/">
                Search for Books
            </a>
            <a className="nav-link text-white" href="/saved">
                Saved Books
            </a>
        </nav >
    );
}

export default Nav;
