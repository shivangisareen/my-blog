import * as React from "react";
import { graphql, Link } from 'gatsby';

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import { content, title } from "./blog.module.css";

const Blog = ({data}) => {
    return (
        <div>
            <Header/>
            <NavBar/> 
            <br/>
            <div className={content}>
                {
                  data.allMdx.nodes.map(node => (
                      <div key={node.id}>
                          <Link to={node.slug}><h2 className={title}>{node.frontmatter.title}</h2></Link>
                          <div>Posted: {node.frontmatter.date}</div>
                          <br/>
                      </div>
                  ))
                }
            </div> 
        </div>
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