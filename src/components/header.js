import * as React from "react";
import { Link } from "gatsby";

import {header} from "./styling/header.module.css";

const Header = () => {
    return (
        <div>
            <div>
                <Link to="/" className={header}> <h1> Shivangi Sareen </h1> </Link>
            </div>
        </div>
    );
};

export default Header;