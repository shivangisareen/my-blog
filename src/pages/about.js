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
        <br /> <br />I love coding, reading books, writing blogs and listening
        to podcasts. I've recently started learning piano.
      </p>
    </Layout>
  );
};

export default AboutPage;
