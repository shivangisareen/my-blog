import * as React from "react";
import { Link } from "gatsby";

import { container, navBar, navLink, current } from "./navBar.module.css";

const NavBar = () => {

    function isActive( {isCurrent} ) {
        return isCurrent ? {className: current} : null
    }

    return (
        <div className={container}>
            <nav className={navBar}>
                <Link to="/" className={navLink} getProps={isActive}>home</Link> 
                <Link to="/blog" className={navLink} getProps={isActive}>blog</Link>
                <Link to="/about" className={navLink} getProps={isActive}>about</Link>
                <Link to="/contact" className={navLink} getProps={isActive}>contact</Link>
            </nav>
        </div>
    );
};

export default NavBar;