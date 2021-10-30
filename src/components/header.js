import * as React from "react";
import { Link } from "gatsby";

import {header} from "./header.module.css";

const Header = () => {
    return (
        <div>
            <div className={header}>
                <Link to="/"><h1>Shivangi Sareen</h1></Link>
            </div>
        </div>
    );
};

export default Header;