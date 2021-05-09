/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "imatrix",
        short_name: "imatrix",
        start_url: "/",
        background_color: "#0d1117",
        theme_color: "#c9d1d9",
        display: "standalone",
        icon: "src/images/icon.png", 
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/contact/*`],
      },
    },
  ],
  siteMetadata: {
    title: 'iMatrix.dev',
    description: "Full-Stack Web Developer | matrix | JavaScript, React.js, Gatsby.js, Node.js, Web, Ui, Firebase, Aws",
    contact: 'hello@imatrix.dev',
    url: 'https://matrix-28893.web.app',
    image: `https://matrix-28893.web.app/isaac-logo.png`,
    twitterUSername:'@mvtrixx',
    fbAppID:'',
    author: 'matrix',
    keywords: `software development, JavaScript, React.js, Gatsby.js, Node.js, Web, Ui, Firebase, Aws`,
  }
}
