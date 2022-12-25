import "../../components/styling/global.css";

import * as React from "react";

import { Link, graphql } from "gatsby";
import { container, title } from "./styling/blogList.module.css";

import BlogCard from "../../components/BlogCard";
import Grid from "@mui/material/Grid";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";

const Blog = ({ data }) => {
  const allPosts = data.allMdx.nodes;
  const emptyQuery = "";
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleSearchBarInputChange = (event) => {
    const query = event.target.value;
    const posts = data.allMdx.nodes || [];

    // return all filtered posts
    const filteredData = posts.filter((post) => {
      // destructure data from post frontmatter
      return (
        // standardize data with .toLowerCase()
        post.rawBody.toLowerCase().includes(query.toLowerCase())
      );
    });

    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <Layout>
      <Header />
      <NavBar />
      <SearchBar handleSearchBarInputChange={handleSearchBarInputChange} />
      <div className={container}>
        <Grid container spacing={1} justify="center">
          {posts.map((node, index) => (
            <Grid item xs={12} sm={6} md={6} xl={4}>
              <Link
                to={node.slug}
                style={{ color: "var(--textNormal)" }}
                className={title}
              >
                <BlogCard
                  key={index}
                  title={node.frontmatter.title}
                  summary={node.frontmatter.summary}
                  date={node.frontmatter.date}
                />
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
        rawBody
      }
    }
  }
`;

export default Blog;
