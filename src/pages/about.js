import * as React from "react";

import NavBar from "../components/navBar";
import Header from "../components/header";

import { text, specialText } from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <NavBar/>
            <br/>
            <br/>
            <p className={text}>
                <span className={specialText}>Hi!</span> I'm a software engineer at <span className={specialText}>Apple</span> in the AI/ML team for Siri Understanding.
                <br/> 
                <br/>
                Previously, I worked at <span className={specialText}>American Express</span>, in a range of back-end, front-end and devops roles. 
                I graduated in 2019 from <span className={specialText}>Trinity College Dublin</span> with a bachelors in computer engineering. 
                <br/>
                I've taught coding courses at <span className={specialText}>Code First Girls</span>, namely Introduction to Data and SQL Programming and a Nanodegree course - Data Analytics with Python and SQL.

            </p>
        </div>
    );
};

export default AboutPage;