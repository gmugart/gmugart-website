const createPaginatedPages = require("gatsby-paginate");
const path = require("path");
const _ = require("lodash");


exports.createPages = ({
    boundActionCreators, graphql
}) => {
    const {
        createPage
    } = boundActionCreators;

    const blogPostTemplate = path.resolve("src/templates/blogTemplate.js");
    const tagTemplate = path.resolve('src/templates/tagTemplate.js');

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
            fields {
                slug
              }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        //create paginated pages
        createPaginatedPages({
            edges: posts,
            createPage: createPage,
            pageTemplate: "src/templates/index.js",
            pageLength: 1, // This is optional and defaults to 10 if not used
            pathPrefix: "", // This is optional and defaults to an empty string if not used
            context: {} // This is optional and defaults to an empty object if not used
        });

        /* Create post detail pages
        posts.forEach(({
            node
        }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
            });
        });
        */

        posts.map(({
            node
        }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/blogPostTemplate.js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        // Tag pages:
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