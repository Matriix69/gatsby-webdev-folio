/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    flags: {
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
        PRESERVE_WEBPACK_CACHE: true,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-dark-mode",
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
                name: "Isaac Chukwuka",
                short_name: "Isaac Chukwuka",
                start_url: "/",
                background_color: "#000",
                theme_color: "#000",
                display: "standalone",
                icon: "static/icon.png",
                crossOrigin: `use-credentials`,
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/about/`, `/contact/*`],
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
    ],
    siteMetadata: {
        title: "Isaac Chukwuka",
        description:
            "Full-Stack Developer | Isaac Chukwuka | JavaScript, TypeScript, Node.js, React.js, next.js, Gatsby.js, MongoDb, Firebase and more",
        contact: "chukwuka1158@gmail.com",
        url: "https://isaacchukwuka.com/",
        image: `https://isaacchukwuka.com/isaac_chukwuka_logo.png`,
        twitterUSername: "@isaacchukwuka_",
        fbAppID: "",
        author: "Isaac chukwuka",
        keywords: `software development, JavaScript, React.js, Next.js, Gatsby.js, Node.js, Web, UI, Mongodb, Firebase, Aws`,
    },
}
