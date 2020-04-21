module.exports = {
  siteMetadata: {
    title: `RW`,
    description: `Descobrindo o universo dentro de mim.`,
    author: `@Samuel Renan Leonhardt`,

    social: [
      {
        name: 'github',
        url: 'https://github.com/samuelleonhardt'
      }
    ],
  },
  plugins: [
    //-------------------- Title, description e keywords ---------------------
    
        `gatsby-plugin-react-helmet`,
    
    //----------------------------------------------------------------------------
    
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
        name: `RW`,
        short_name: `RW`,
        start_url: `/`,
        background_color: `#606060`,
        theme_color: `#909090`,
        display: `minimal-ui`,
        icon: `src/images/RW.svg`, // This path is relative to the root of the site.
      },
    },
    //-------------------- Informar que está carregando -------------------------

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#663399`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    //----------------------------------------------------------------------------
    //--------------------- GOOGLE ANALYTICS -------------------------------------

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "229712824",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    //----------------------------------------------------------------------------

    //---------------------- FONTE DO SITE ---------------------------------------
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `600`, `700`, `900`]
          },
        ],
      },
    },
    //----------------------------------------------------------------------------

    //-------------------- SALVA O SITE COMO APLICATIVO --------------------------  
    `gatsby-plugin-offline`,
    //----------------------------------------------------------------------------
  ],
}
