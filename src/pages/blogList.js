import React from "react";
import PostIntro from "../components/linking/postIntro";

const BlogListPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostIntro key={edge.node.id} post={edge.node} /> );

  return <div>{Posts}
         </div>;
};

export default BlogListPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            tags
          }
        }
      }
    }
  }
`;
