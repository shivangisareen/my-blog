import * as React from "react";
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import Layout from "../../components/Layout";
import { content, title, goBack, datePosted, text } from "./styling/blogPost.module.css";
import "../../components/styling/global.css"


const BlogPost = ({data}) => {
    return (
        <Layout>
            <Header/>
            <NavBar/>
            <br/> <br/>
            <div className={content}>
                <Link to="/blog" className={goBack}>&#x2190; back </Link> 
                <br/> <br/>
                <div className={title}>{data.mdx.frontmatter.title}</div>
                <div className={datePosted}>Date posted: {data.mdx.frontmatter.date}</div>
                <p className={text} style={{color: 'var(--textNormal)',}}>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>    
                </p>
                
            </div>
            
        </Layout>
    )
};

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                date(formatString: "DD-MM-YYYY")
                title
            }
        body
        }
    }
`

export default BlogPost;

