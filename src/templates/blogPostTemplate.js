import React from "react";
import Tags from "../components/Linking/tags";
import Helmet from "react-helmet";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h3>Si categoria == "{frontmatter.categoria}" mostrar componente para {frontmatter.categoria} </h3>
        <h3>{frontmatter.date}</h3>
        
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Tags list={frontmatter.tags}></Tags>
        <p>*componente NAVEGACION*</p>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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
  }
`;