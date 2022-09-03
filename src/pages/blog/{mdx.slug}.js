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

const colors = [
  "green",
  "#5EB1BF",
  "#D84727",
  "#8B80F9",
  "#297373",
  "#C17817",
  "#A846A0",
  "#D81E5B",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const BlogPost = ({ data }) => {
  // if there is an "updated" or "date" field in the blog, create a div with that data
  const getDivIfDateExists = (dateData, label) => {
    if (dateData) {
      return (
        <Stack
          direction="row"
          spacing={1}
          style={{ color: "var(--textLight)" }}
        >
          <div>{label}: </div>
          <div className={date}>{dateData}</div>
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
          {getDivIfDateExists(data.mdx.frontmatter.date, "Posted")}
          {getDivIfDateExists(data.mdx.frontmatter.updated, "Updated")}
        </Stack>
        <p className={text} style={{ color: "var(--textNormal)" }}>
          <MDXProvider
            components={{
              a: (props) => <a {...props} style={{ color: "orange" }} />,
              code: (props) => (
                <code
                  {...props}
                  style={{
                    backgroundColor: "var(--codeBlockBackgroundColor)",
                    display: "block",
                    padding: "2%",
                    color: "var(--textNormal)",
                    overflowY: "scroll",
                  }}
                />
              ),
              strong: (props) => (
                <strong {...props} style={{ color: getRandomColor() }} />
              ),
              hr: (props) => (
                <hr
                  {...props}
                  style={{
                    border: 0,
                    borderTop: "1px solid",
                    color: "var(--textLight)",
                  }}
                />
              ),
            }}
          >
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
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
