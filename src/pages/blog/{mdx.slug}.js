import * as React from "react";
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from "@mdx-js/react"
import Button from '@mui/material/Button';

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
                <div className={title} style={{color: 'var(--textNormal)'}}>{data.mdx.frontmatter.title}</div>
                <br/>
                <div className={datePosted} style={{color: 'var(--textLight)'}}>Posted: {data.mdx.frontmatter.date}</div>
                <p className={text} style={{color: 'var(--textNormal)',}}>
                <hr style={{border: 0, borderTop:'1px solid', color: 'var(--textLight'}}/>
                <MDXProvider
                    components={{
                        a: (props) => <a {...props} style={{color: 'orange'}} />,
                        code: (props) => <code {...props} style={{backgroundColor:'#F5F5F5', width:'100%', display:'block', padding:'2%'}}/>,
                      }} 
                >
                    <MDXRenderer>
                        {data.mdx.body}
                    </MDXRenderer>
                </MDXProvider>   
                <hr style={{border: 0, borderTop:'1px solid', color: 'var(--textLight'}}/>
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

