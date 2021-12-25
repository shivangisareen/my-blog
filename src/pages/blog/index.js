import * as React from "react";
import { graphql, Link } from 'gatsby';

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import Layout from "../../components/Layout";
import { container, title, list } from "./styling/blogList.module.css";

const Blog = ({data}) => {
    return (
        <Layout>
            <Header/>
            <NavBar/> 
            <br/>
            <div className={container}>
              <ul className={list}>
                {
                  data.allMdx.nodes.map(node => (
                      <div key={node.id}>
                        <li>
                          <Link to={node.slug} className={title}><h2>{node.frontmatter.title}</h2></Link>
                          {/* <div>Posted: {node.frontmatter.date}</div> */}
                        </li>
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
            }
            id
            slug
          }
        }
      }
`

export default Blog;