module.exports = {
  siteMetadata: {
    title: `Hi! Please sign in :-)`,
    description: `Houston Kadampa meditation group sign in sheet`,
    author: `Andrew Horn`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kadampa-meditation-sign-in`,
        short_name: `kadampa-sign-in`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // `gatsby-plugin-offline` // to turn app into PWA
  ]
};
