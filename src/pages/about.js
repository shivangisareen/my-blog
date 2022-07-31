import * as React from "react";

import NavBar from "../components/NavBar";
import Header from "../components/header";
import Layout from "../components/Layout";

import { text } from "./styling/about.module.css";
import "../components/styling/global.css";

const AboutPage = () => {
  return (
    <Layout>
      <Header />
      <NavBar />
      <br />
      <br />
      <p className={text} style={{ color: "var(--textNormal)" }}>
        Hello! I'm a software engineer at Apple in the AI/ML team for Siri
        Understanding.
        <br /> <br />
        Previously, I worked at American Express, in a range of back-end,
        front-end and devops roles. I graduated in 2019 from Trinity College
        Dublin with a bachelors in computer engineering.
        <br /> <br />
        I've taught SQL and Python courses at Code First Girls, to train women
        in coding skills. I'm a UN Volunteer and have worked with a number of
        incredible organisations including UNDP, International Telecommunication
        Union (ITU) and Surfrider Foundation Europe.
        <br /> <br />
        I love creating digital illustrations, reading and writing and listening
        to podcasts.
        <br /> <br />
        Fun fact: I am one of the co-authors of a case book exploring social
        enterprises in Ireland and Vietnam.
      </p>
    </Layout>
  );
};

export default AboutPage;
