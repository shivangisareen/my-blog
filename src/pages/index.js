import * as React from "react";
// import 'semantic-ui-css/semantic.min.css';

import NavBar from "../components/navBar";
import Header from "../components/header";
import Layout from "../components/Layout";
import me from "../images/me.jpeg";

import { intro, softwareEngineer, circularSquare } from "./styling/index.module.css";
import "../components/styling/global.css";

const IndexPage = () => {
    return (
      <Layout>
          <Header/>
          <NavBar/>
          <br/>
          <p className={intro} style={{color: 'var(--textNormal)',}}>hi! I'm a <span className={softwareEngineer}>software engineer</span> living in the UK!</p>
          <br/>
          <img className={circularSquare} src={me} alt="This is me!"/>
      </Layout>
    );
};

export default IndexPage;