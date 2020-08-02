module.exports = {
  siteMetadata: {
    title: `Szklane Bajki | Sandra Dyrka`,
    description: `Niezwykłe, naturalne kompozycje w szkle. Sandra Dyrka - florystka zajmująca się głównie pracami w słoikach. Zajrzyj i zanurz się szklanych opowieściach.`,
    author: `@Neology92`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Szklane Bajki - Sandra Dyrka`,
    //     short_name: `szklanebajki`,
    //     start_url: `/`,
    //     background_color: `#177d0a`,
    //     theme_color: `#177d0a`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
