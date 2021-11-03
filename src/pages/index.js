import * as React from "react";
import 'semantic-ui-css/semantic.min.css';

import NavBar from "../components/navBar";
import Header from "../components/header";

const IndexPage = () => {
    return (
      <div>
          <Header/>
          <NavBar subTitle="Home"/> 
      </div>
    );
};

export default IndexPage;