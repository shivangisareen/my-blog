import * as React from "react";

import NavBar from "../components/navBar";
import Header from "../components/header";
import 'semantic-ui-css/semantic.min.css';

const IndexPage = () => {
    return (
      <div>
          <Header/>
          <NavBar subTitle="Home"/> 
      </div>
    );
};

export default IndexPage;