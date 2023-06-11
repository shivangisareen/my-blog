import "../components/styling/global.css";

import * as React from "react";

import Header from "../components/Header";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import { text } from "./styling/about.module.css";

const AboutPage = () => {
  return (
    <Layout>
      <Header />
      <NavBar />
      <br />
      <br />
      <p className={text} style={{ color: "var(--textNormal)" }}>
        Hi! I'm a software engineer at Apple in the AI/ML team for Siri
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
        I love coding, reading books, writing blogs and listening to podcasts.
        I've recently started learning piano.
        <br /> <br />
        Fun fact: I am one of the co-authors of a case book exploring social
        enterprises in Ireland and Vietnam.
      </p>
    </Layout>
  );
};

export default AboutPage;
