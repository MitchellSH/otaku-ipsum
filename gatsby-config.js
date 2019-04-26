module.exports = {
  siteMetadata: {
    title: `Otaku Ipsum`,
    description: `A kawaii placeholder text generator for your inner weeabo.`,
    author: `Mitchell Hollander`,
  },
  plugins: [
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff5657`,
        theme_color: `#ff5657`,
        display: `minimal-ui`,
        icon: `src/images/octocon.png`
      },
    },
  ],
}
