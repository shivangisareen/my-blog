import * as React from "react";
import { Link } from "gatsby";

import {header} from "./styling/header.module.css";

const Header = () => {
    return (
        <div>
            <div>
                <Link to="/" className={header}> Shivangi Sareen </Link>
            </div>
        </div>
    );
};

export default Header;