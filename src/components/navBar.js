import * as React from "react";
import { Link } from "gatsby";

import { container, navBar, navLink } from "./navBar.module.css";

const NavBar = () => {

    return (
        <div className={container}>
            <nav className={navBar}>
                <Link to="/" className={navLink}>home</Link> 
                <Link to="/blog" className={navLink}>blog</Link>
                <Link to="/about" className={navLink}>about</Link>
                <Link to="/contact" className={navLink}>contact</Link>
            </nav>
        </div>
    );
};

export default NavBar;