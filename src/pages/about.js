import * as React from "react";

import NavBar from "../components/navBar";
import Header from "../components/header";

import { text, specialText } from "./about.module.css";

const AboutPage = () => {
    return (
        <div className={"about"}>
            <Header/>
            <NavBar/>
            <br/>
            <br/>
            <br/>
            <div className={text}>
                <span className={specialText}>Hi!</span> I graduated in 2019 from <span className={specialText}>Trinity College Dublin</span> with a bachelors in computer engineering. I'm currently working at <span className={specialText}>Apple</span> in the AI/ML team for Siri Understanding.
                <br/> <br/>
                Previously, I worked at <span className={specialText}>American Express</span>, in a range of back-end, front-end and devops roles. <br/>
                
            </div>

            
        </div>
    );
};

export default AboutPage;