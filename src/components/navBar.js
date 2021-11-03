import * as React from "react";
import { Link } from "gatsby";

import { container, navBar, navLink } from "./navBar.module.css";

const NavBar = ({subTitle}) => {

    return (
        <div className={container}>
          <nav className={navBar}>
              <Link to="/" className={navLink}><button className={"ui button"}>Home</button></Link> 
              <Link to="/blog" className={navLink}><button className={"ui button"}>Blog</button></Link>
              <Link to="/about" className={navLink}><button className={"ui button"}>About</button></Link>
          </nav>
          <h3>{subTitle}</h3>
        </div>
    );
};

export default NavBar;