import * as React from "react";
import { graphql, Link } from 'gatsby';

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import { content } from "./blog.module.css";

const Blog = ({data}) => {
    return (
        <div>
            <Header/>
            <NavBar subTitle="<change text>"/> 
            <br/>
            <div className={content}>
              <div className={"ui relaxed divided list"}>
                {
                  data.allMdx.nodes.map(node => (
                      <div className={"item"} key={node.id}>
                          <Link to={node.slug}><h2>{node.frontmatter.title}</h2></Link>
                          <div className={"description"}>Posted: {node.frontmatter.date}</div>
                          <br/>
                      </div>
                  ))
                }
              </div>
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