import * as React from "react";
import { graphql, Link } from 'gatsby';

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import Layout from "../../components/Layout";
import { container, title, list } from "./styling/blogList.module.css";
import "../../components/styling/global.css"

const Blog = ({data}) => {
    return (
        <Layout>
            <Header/>
            <NavBar/> 
            <br/>
            <br/>
            <div className={container}>
              <ul className={list}>
                {
                  data.allMdx.nodes.map(node => (
                      <div key={node.id}>
                        <li style={{content: "•", color: 'var(--textNormal)'}}>
                          <Link to={node.slug} 
                                className={title} 
                                style={{color: 'var(--textNormal)',}}
                          >
                                {node.frontmatter.title}
                          </Link>
                        </li>
                        <br/>
                      </div>
                  ))
                }
                </ul>
            </div> 
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
          nodes {
            frontmatter {
              title
              date(formatString: "DD-MMM-YYYY")
              updated(formatString: "DD-MMM-YYYY")
            }
            id
            slug
          }
        }
      }
`

export default Blog;