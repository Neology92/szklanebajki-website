module.exports = {
  siteMetadata: {
    title: `Szklane Bajki | Sandra Dyrka`,
    description: `Niezwykłe, naturalne kompozycje w szkle. Sandra Dyrka - florystka zajmująca się głównie pracami w słoikach. Zajrzyj i zanurz się szklanych opowieściach.`,
    author: `@Neology92`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GraphCMS",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "gcms",
        // Url to query from
        url:
          "https://api-eu-central-1.graphcms.com/v2/ckdd2k21jeyel01xw4lh67rwk/master",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
      },
    },
    `gatsby-plugin-react-helmet`,
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
