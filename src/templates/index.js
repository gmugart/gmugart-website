import React from "react";
import Link from "gatsby-link";
 
const IndexPage = ({ data, pathContext }) => {
  const { nodes, page, prev, next, pages, total, limit } = pathContext;
  const PaginationLink = props => {
    if (props.to && props.text) {
      return <Link to={props.to} text={props.text} />;
    }
    return null;
  };
 
  return (
    <div>
      {nodes.map(({ node }) => (
        <div className="postList" key={node.id}>
          <div className="postDate">{node.frontmatter.date}</div>
          <Link className="postUrl" to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
          <div> className="postExcerpt" {node.excerpt}</div>
        </div>
      ))}
      <div className="previousPost">
        <PaginationLink to={prev} text="Go to Previous Page" />
      </div>
      <div className="nextPost">
        <PaginationLink to={next} text="Go to Next Page" />
      </div>
    </div>
  );
};
 
import Index from "../components/index";
 
export default IndexPage;
 
export const query = graphql` query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        categoria
        title
        tags
      }
    }
  }`;