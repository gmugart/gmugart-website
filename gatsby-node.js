const createPaginatedPages = require("gatsby-paginate");
const path = require("path");
const _ = require("lodash");



exports.createPages = ({
    graphql, boundActionCreators
}) => {
    const {
        createPage
    } = boundActionCreators;
    const blogPostTemplate = path.resolve("src/templates/blogListTemplate.js");

    const tagTemplate = path.resolve('src/templates/tagTemplate.js');

    return new Promise((resolve, reject) => {
        graphql(`
{
        posts: allMarkdownRemark(
filter: {fileAbsolutePath: {regex: "\/blog/"}}
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                date
                tags
              }
            excerpt(pruneLength: 280)
            }
          }
        }

     proyectos: allMarkdownRemark(
     filter: {fileAbsolutePath: {regex: "\/proyectos/"}}
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                date
                tags
              }
            excerpt(pruneLength: 280)
            }
          }
        }
  
      }
    `).then(result => {
           //create posts
            createPaginatedPages({
                edges: result.data.posts.edges,
                createPage: createPage,
                pageTemplate: blogPostTemplate,
                pageLength: 2, // This is optional and defaults to 10 if not used
                pathPrefix: "blog", // This is optional and defaults to an empty string if not used
                context: {} // This is optional and defaults to an empty object if not used
            });
            result.data.posts.edges.map(({
                node
            }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: path.resolve("./src/templates/blogPostTemplate.js"),
                    context: {
                        //slug: node.fields.slug
                        //path: node.frontmatter.path
                    }
                });
            });
            
            //create proyects
             createPaginatedPages({
                edges: result.data.proyectos.edges,
                createPage: createPage,
                pageTemplate: blogPostTemplate,
                pageLength: 2, // This is optional and defaults to 10 if not used
                pathPrefix: "portfolio/proyectos", // This is optional and defaults to an empty string if not used
                context: {} // This is optional and defaults to an empty object if not used
            });
            result.data.proyectos.edges.map(({
                node
            }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: path.resolve("./src/templates/blogPostTemplate.js"),
                    context: {
                        //slug: node.fields.slug
                        //path: node.frontmatter.path
                    }
                });
            });


            //------Tag pages START
            const posts = result.data.posts.edges;
            let tags = [];
            // Iterate through each post, putting all found tags into `tags`
            _.each(posts, edge => {
                if (_.get(edge, 'node.frontmatter.tags')) {
                    tags = tags.concat(edge.node.frontmatter.tags);
                }
            });
            // Eliminate duplicate tags
            tags = _.uniq(tags);

            // Make tag pages
            tags.forEach(tag => {
                createPage({
                    path: `/tags/${_.kebabCase(tag)}/`,
                    component: tagTemplate,
                    context: {
                        tag,
                    },
                });
            });
            //------Tag pages END


            resolve();
        });
    });
};









/*--> mostrar layout segun "path" del articulo (no funciona por el momento)

// Implement the Gatsby API “onCreatePage”. 
// This is called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/libros/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = "libros";

      // Update the page.
      createPage(page);
    }

    resolve();
  });
};
*/