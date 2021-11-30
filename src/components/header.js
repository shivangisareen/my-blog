import * as React from "react";

import {header} from "./header.module.css";

const Header = () => {
    return (
        <div>
            <div className={header}>
                <h1>Shivangi Sareen</h1>
                {/* <h4 className={subTitle}>Software Engineer</h4> */}
            </div>
        </div>
    );
};

export default Header;