import * as React from "react";

import NavBar from "../components/navBar";
import Header from "../components/header";

import { text } from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <NavBar/>
            <br/>
            <br/>
            <br/>

            <div className={text}>
                I graduated in 2019 from trinity college dublin with a bachelors in computer engineering. blah blah
            </div>

            
        </div>
    );
};

export default AboutPage;