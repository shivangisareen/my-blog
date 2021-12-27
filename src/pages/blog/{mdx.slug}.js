import * as React from "react";
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from "@mdx-js/react"

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
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
                <div className={title} style={{color: 'var(--textNormal)'}}>{data.mdx.frontmatter.title}</div>
                <div className={datePosted} style={{color: 'var(--textSubHeading)'}}>Date posted: {data.mdx.frontmatter.date}</div>
                <br/>
                <p className={text} style={{color: 'var(--textNormal)',}}>
                <MDXProvider
                    components={{
                        a: (props) => <a {...props} style={{color: 'orange'}} />
                      }} 
                >
                    <MDXRenderer>
                        {data.mdx.body}
                    </MDXRenderer>
                    
                </MDXProvider>    
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

