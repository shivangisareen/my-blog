import * as React from "react";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Layout from "../components/Layout";

import { text, links } from "./styling/contact.module.css";
import "../components/styling/global.css";

const ContactPage = () => {
  return (
    <Layout>
      <Header />
      <NavBar />
      <br />
      <h2 className={text} style={{ color: "var(--textNormal)" }}>
        find me here
      </h2>
      <div className={links}>
        <a
          href="https://www.linkedin.com/in/shivangisareen/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>{" "}
        {"\t"}
        <a
          href="https://twitter.com/SareenShivangi"
          target="_blank"
          rel="noreferrer"
        >
          twitter
        </a>{" "}
        {"\t"}
        <a
          href="https://medium.com/@shivangisareen"
          target="_blank"
          rel="noreferrer"
        >
          medium
        </a>{" "}
        {"\t"}
        <a
          href="https://shivangisareen.portfoliobox.net"
          target="_blank"
          rel="noreferrer"
        >
          portfolio
        </a>
      </div>
    </Layout>
  );
};

export default ContactPage;
