import * as React from "react";
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import { content, title, goBack, datePosted, text } from "./blogPost.module.css";


const BlogPost = ({data}) => {
    // const image = getImage(data.mdx.frontmatter.hero_image);
    return (
        <div>
            <Header/>
            <NavBar/>
            <br/> <br/>
            <div className={content}>
                <Link to="/blog" className={goBack}>Back to blog list</Link> 
                <br/> <br/>
                <div className={title}>{data.mdx.frontmatter.title}</div>
                <div className={datePosted}>Date posted: {data.mdx.frontmatter.date}</div>

                {/* <GatsbyImage
                    image = {image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                />
                <p>
                    Photo credit: {" "} 
                    <a href={data.mdx.frontmatter.hero_image_credit_link}>
                        {data.mdx.frontmatter.hero_image_credit_text}
                    </a>
                </p> */}
                <p className={text}>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>    
                </p>
                
            </div>
            
        </div>
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

