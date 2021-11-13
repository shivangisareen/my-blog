import * as React from "react";
import { Link } from "gatsby";

import { container, navBar, navLink, button } from "./navBar.module.css";

const NavBar = () => {

    return (
        <div className={container}>
          <nav className={navBar}>
              <Link to="/" className={navLink}><button className={button}>Home</button></Link> 
              <Link to="/blog" className={navLink}><button className={button}>Blog</button></Link>
              <Link to="/about" className={navLink}><button className={button}>About</button></Link>
          </nav>
        </div>
    );
};

export default NavBar;