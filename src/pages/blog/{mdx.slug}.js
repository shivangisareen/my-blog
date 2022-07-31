import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import {
  content,
  title,
  goBack,
  date,
  text,
} from "./styling/blogPost.module.css";
import "../../components/styling/global.css";

import Stack from "@mui/material/Stack";

const BlogPost = ({ data }) => {
  // if there is an "updated" field in the blog, create a div with that data
  const getDivIfDataExists = () => {
    if (data.mdx.frontmatter.updated) {
      return (
        <Stack
          direction="row"
          spacing={1}
          style={{ color: "var(--textLight)" }}
        >
          <div>Updated: </div>
          <div className={date}>{data.mdx.frontmatter.updated}</div>
        </Stack>
      );
    }
  };

  return (
    <Layout>
      <Header />
      <NavBar />
      <br /> <br />
      <div className={content}>
        <Link to="/blog" className={goBack}>
          &#x2190; back{" "}
        </Link>
        <br /> <br />
        <div className={title} style={{ color: "var(--textNormal)" }}>
          {data.mdx.frontmatter.title}
        </div>
        <br />
        <Stack direction="row" spacing={2}>
          <Stack
            direction="row"
            spacing={1}
            style={{ color: "var(--textLight)" }}
          >
            <div>Posted:</div>
            <div className={date}>{data.mdx.frontmatter.date}</div>
          </Stack>
          {getDivIfDataExists()}
        </Stack>
        <p className={text} style={{ color: "var(--textNormal)" }}>
          <hr
            style={{
              border: 0,
              borderTop: "1px solid",
              color: "var(--textLight",
            }}
          />
          <MDXProvider
            components={{
              a: (props) => <a {...props} style={{ color: "orange" }} />,
              code: (props) => (
                <code
                  {...props}
                  style={{
                    backgroundColor: "#F5F5F5",
                    width: "100%",
                    display: "block",
                    padding: "2%",
                  }}
                />
              ),
            }}
          >
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
          <hr
            style={{
              border: 0,
              borderTop: "1px solid",
              color: "var(--textLight",
            }}
          />
        </p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "DD-MM-YYYY")
        title
        updated(formatString: "DD-MM-YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
