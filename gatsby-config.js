/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `inclusive-design-scenarios`,
    siteUrl: `https://jackbush.github.io/inclusive-design-scenarios/`
  },
  pathPrefix: "/inclusive-design-scenarios",
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    // "gatsby-plugin-mdx",
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inter\:400,600`],
        display: "swap",
      },
    },
  ]
};
