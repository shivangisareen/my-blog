import * as React from "react";
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import { content } from "./blog.module.css";


const BlogPost = ({data}) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    return (
        <div>
            <Header/>
            <NavBar subTitle={data.mdx.frontmatter.title} />
            <div className={content}>
                <Link to="/blog">{`<- Back to blog list`}</Link>
                <p>Date posted: {data.mdx.frontmatter.date}</p>
                <GatsbyImage
                    image = {image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                />
                <p>
                    Photo credit: {" "} {/*to render space between the colon : and the credit_text*/}
                    <a href={data.mdx.frontmatter.hero_image_credit_link}>
                        {data.mdx.frontmatter.hero_image_credit_text}
                    </a>
                </p>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
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
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        body
        }
    }
`

export default BlogPost;

