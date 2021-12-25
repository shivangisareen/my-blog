import * as React from "react";

import NavBar from "../components/navBar";
import Header from "../components/header";
import Layout from "../components/Layout";

import { text, links } from "./contact.module.css";


const ContactPage = () => {
    return (
        <Layout>
            <Header/>
            <NavBar/>
            <br/>
            <h2 className={text}>find me here</h2>
            <div className={links}>
                <a href="https://www.linkedin.com/in/shivangisareen/" target="_blank">linkedin</a> {"\t"}
                <a href="https://twitter.com/SareenShivangi" target="_blank">twitter</a> {"\t"}
                <a href="https://medium.com/@shivangisareen" target="_blank">medium</a> {"\t"}
                <a href="https://shivangisareen.portfoliobox.net" target="_blank">portfolio</a>
            </div>
        </Layout>
    );
};


export default ContactPage;