import * as React from "react";
import { Link } from "gatsby";

import { container, title, navBar, navLink, content } from "./navBar.module.css";

const NavBar = ({subTitle}) => {

    return (
        <div className={container}>
            <div>
              <nav className={navBar}>
                  <Link to="/" className={navLink}>Home</Link> 
                  <Link to="/blog" className={navLink}>Blog</Link>
                  <Link to="/about" className={navLink}>About</Link>
              </nav>
              <h3>{subTitle}</h3>
            </div>
            {/* <main className={content}>
              {children}
            </main> */}
        </div>
    );
};

export default NavBar;