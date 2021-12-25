import * as React from "react";
// import 'semantic-ui-css/semantic.min.css';

import NavBar from "../components/navBar";
import Header from "../components/header";
import Layout from "../components/Layout";
import me from "../images/me.jpeg";

import { intro, softwareEngineer, circularSquare } from "./index.module.css";

const IndexPage = () => {
    return (
      <Layout>
          <Header/>
          <NavBar/>
          <br/>
          <h2 className={intro}>hi! I'm a <span className={softwareEngineer}>software engineer</span> living in the UK!</h2>
          <br/>
          <img className={circularSquare} src={me} alt="This is me!"/>
      </Layout>
    );
};

export default IndexPage;