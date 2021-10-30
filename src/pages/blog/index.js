import * as React from "react";
import { graphql, Link } from 'gatsby';

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import { content } from "./blog.module.css";

const Blog = ({data}) => {
    return (
        <div>
            <Header/>
            <NavBar subTitle="Blog page!"/> 
            <div className={content}>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <Link to={node.slug}><h2>{node.frontmatter.title}</h2></Link>
                        <p>Posted: {node.frontmatter.date}</p>
                        <br/>
                    </article>
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
              date(formatString: "DD-MM-YYYY")
            }
            id
            slug
          }
        }
      }
`

export default Blog;