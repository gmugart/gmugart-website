module.exports = {
    siteMetadata: {
        title: 'gmugart',
    },
    plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass', {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content/blog`,
                name: 'blog',
            }
    }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content/proyectos`,
                name: 'proyectos',
            }
    }, 'gatsby-transformer-remark', {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
        `gatsby-plugin-sharp`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
        },
      ],
            },
  }
             ],
};