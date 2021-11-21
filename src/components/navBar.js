import * as React from "react";
import { Link } from "gatsby";

import { container, navBar, navLink } from "./navBar.module.css";

const NavBar = () => {

    return (
        <div className={container}>
            <nav className={navBar}>
                <Link to="/" className={navLink} id="home">home</Link> 
                <Link to="/blog" className={navLink} id="blog">blog</Link>
                <Link to="/about" className={navLink} id="about">about</Link>
                <Link to="/contact" className={navLink} id="contact">contact</Link>
            </nav>
        </div>
    );
};

export default NavBar;