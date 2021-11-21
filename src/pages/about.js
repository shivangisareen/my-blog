import * as React from "react";

import NavBar from "../components/navBar";
import Header from "../components/header";

import { text } from "./about.module.css";

const AboutPage = () => {
    return (
        <div className={"about"}>
            <Header/>
            <NavBar/>
            <br/>
            <br/>
            <br/>

            <div className={text}>
                I graduated in 2019 from Trinity College Dublin with a bachelors in computer engineering. I'm currently working at Apple in the AI/ML team for Siri Understanding.
            </div>

            
        </div>
    );
};

export default AboutPage;