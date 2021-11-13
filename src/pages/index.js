import * as React from "react";
// import 'semantic-ui-css/semantic.min.css';

import NavBar from "../components/navBar";
import Header from "../components/header";
import me from "../images/me.jpeg";

import { intro, softwareEngineer, circularSquare } from "./home.module.css";

const IndexPage = () => {
    return (
      <div>
          <Header/>
          <NavBar/> 
          <br/>
          <h2 className={intro}>hi! I'm a <span className={softwareEngineer}>software engineer</span> living in the UK!</h2>
          <br/>
          <img className={circularSquare} src={me} />
      </div>
    );
};

export default IndexPage;