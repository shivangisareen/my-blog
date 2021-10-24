import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { container, title, navBar, navLink, content } from "./layout.module.css";


const Layout = ({siteTitle, subTitle, children}) => {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
        <div className={container}>
            <h1 className={title}> {siteTitle || data.site.siteMetadata.title}</h1>
            <nav className={navBar}>
                <Link to="/" className={navLink}>Home</Link> 
                <Link to="/blog" className={navLink}>Blog</Link>
                <Link to="/about" className={navLink}>About</Link>
            </nav>
            <h3>{subTitle}</h3>
            <main className={content}>
              {children}
            </main>
        </div>
    );
};

export default Layout;