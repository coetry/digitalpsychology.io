module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        author: `Daniel Stefanovic`,
        description: `A free library of psychological principles and examples to elevate your SaaS, e-commerce or other digital products.`,
        facebookAppId: `310591556081648`,
        siteUrl: `http://digitalpsychology.io`,
        title: `Digital Psychology`,
        twitterHandle: `danistefanovic`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 550,
                            linkImagesToOriginal: false
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Digital Psychology`,
                short_name: `Digital Psychology`,
                start_url: `/?utm_source=homescreen`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `minimal-ui`,
                icons: [
                    {
                        src: `/logo-128.png`,
                        sizes: `128x128`,
                        type: `image/png`
                    },
                    {
                        src: `/logo-158.png`,
                        sizes: `158x158`,
                        type: `image/png`
                    },
                    {
                        src: `/logo-197.png`,
                        sizes: `197x197`,
                        type: `image/png`
                    },
                    {
                        src: `/logo-512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    }
                ]
            }
        },
        // Deactivate for now because service workers
        // are only supported via https
        // `gatsby-plugin-offline`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-104474552-1`
            }
        }
    ]
};
