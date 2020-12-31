require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Michelle Pan`,
    description: `Michelle's personal website!`,
    author: `@michelllepan`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michelle Pan`,
        short_name: `Michelle Pan`,
        start_url: `/`,
        background_color: `#f58167`,
        theme_color: `#f58167`,
        display: `minimal-ui`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
