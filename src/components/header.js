import * as React from "react";
import { Link } from "gatsby";

import {header} from "./header.module.css";

const Header = () => {
    return (
        <div>
            <container className={header}>
                <Link to="/"><h1>Shivangi Sareen</h1></Link>
            </container>
        </div>
    );
};



export default Header;