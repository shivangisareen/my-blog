import * as React from "react";

import {
  container,
  current,
  navBar,
  navLink,
} from "./styling/navBar.module.css";

import { Link } from "gatsby";

function isActive({ isCurrent }) {
  return isCurrent ? { className: current } : null;
}

function isPartiallyActive({ isPartiallyCurrent }) {
  return isPartiallyCurrent ? { className: current } : null;
}

const NavBar = () => {
  return (
    <div className={container}>
      <nav className={navBar}>
        <Link to="/" className={navLink} getProps={isActive}>
          home
        </Link>
        <Link to="/blog" className={navLink} getProps={isPartiallyActive}>
          blog
        </Link>
        <Link to="/about" className={navLink} getProps={isPartiallyActive}>
          about
        </Link>
        <Link to="/contact" className={navLink} getProps={isPartiallyActive}>
          contact
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
