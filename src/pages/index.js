import "../components/styling/global.css";

import * as React from "react";

import {
  circularSquare,
  intro,
  softwareEngineer,
} from "./styling/index.module.css";

import Header from "../components/Header";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import me from "../images/me.jpeg";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <NavBar />
      <br />
      <p className={intro} style={{ color: "var(--textNormal)" }}>
        hi! I'm a <span className={softwareEngineer}>software engineer</span>{" "}
        living in the UK!
        <br />
      </p>
      <br />
      <img className={circularSquare} src={me} alt="This is me!" />
    </Layout>
  );
};

export default IndexPage;
