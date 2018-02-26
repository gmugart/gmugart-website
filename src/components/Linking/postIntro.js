import React from "react";
import Link from "gatsby-link";
import Tags from "../Linking/tags";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <h2>{post.frontmatter.title}</h2>
    </Link>
    <p>{post.excerpt}</p>
    <Tags list={post.frontmatter.tags}></Tags>
    <h6>{post.frontmatter.date}</h6>
    
  </div>
);

export default PostLink;