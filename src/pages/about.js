import * as React from "react";

import NavBar from "../components/navBar";
import Header from "../components/header";

import { text, links } from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <NavBar/>
            <br/>
            <h2 className={text}>find me here</h2>
            <div className={links}>
                links go here
            </div>
        </div>
    );
};

export default AboutPage;