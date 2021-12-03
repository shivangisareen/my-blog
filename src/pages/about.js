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
                <span className={specialText}>Hi!</span> I'm a software engineer at <span className={specialText}>Apple</span> in the <span className={specialText}>AI/ML</span> team for <span className={specialText}>Siri Understanding</span>.
                <br/> 
                Previously, I worked at <span className={specialText}>American Express</span>, in a range of back-end, front-end and devops roles. 
                I graduated in 2019 from <span className={specialText}>Trinity College Dublin</span> with a bachelors in computer engineering. 
                <br/>
                I've taught <span className={specialText}>SQL</span> and <span className={specialText}>Python</span> courses at <span className={specialText}>Code First Girls</span>, to train women in coding skills. 
                I'm a <span className={specialText}>UN Volunteer</span> and have worked with a number of incredible organisations inlcuding <span className={specialText}>UNDP</span>, <span className={specialText}>International Telecommunication Union</span> and <span className={specialText}>Surfrider Foundation Europe</span>.
                <br/>
                I love creating digital illustrations, reading and writing. I listen to podcasts all day everyday. 
                <span className={specialText}> Fun fact:</span> I am one of the <span className={specialText}>co-authors</span> of a case book exploring <span className={specialText}>social enterprises</span> in <span className={specialText}>Ireland</span> and <span className={specialText}>Vietnam</span>. 
            </p>
        </div>
    );
};

export default AboutPage;