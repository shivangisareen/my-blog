import * as React from "react";
import { graphql, Link } from "gatsby";
import Grid from "@mui/material/Grid";

import NavBar from "../../components/navBar";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import BlogCard from "../../components/BlogCard";
import { container, title } from "./styling/blogList.module.css";
import "../../components/styling/global.css";

const Blog = ({ data }) => {
  return (
    <Layout>
      <Header />
      <NavBar />
      <div className={container}>
        <Grid container spacing={1} justify="center">
          {data.allMdx.nodes.map((node) => (
            <Grid item xs={12} sm={6} md={6} xl={4}>
              <Link
                to={node.slug}
                className={title}
                style={{ color: "var(--textNormal)" }}
              >
                <BlogCard
                  title={node.frontmatter.title}
                  summary={node.frontmatter.summary}
                  date={node.frontmatter.date}
                ></BlogCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD-MMM-YYYY")
          summary
        }
        id
        slug
      }
    }
  }
`;

export default Blog;
