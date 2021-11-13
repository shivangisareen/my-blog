import * as React from "react";

import {header, mainTitle} from "./header.module.css";

const Header = () => {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/> 
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
            <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"></link>
            <div className={header}>
                <h1 className={mainTitle}>Shivangi Sareen</h1>
                {/* <h4 className={subTitle}>Software Engineer</h4> */}
            </div>
        </div>
    );
};

export default Header;