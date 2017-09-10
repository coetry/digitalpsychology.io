module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        baseUrl: `http://digitalpsychology.io`,
        facebookAppId: `310591556081648`,
        title: `Digital Psychology`,
        twitterHandle: `danistefanovic`,
        description: `Elevate your product.`
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
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-104474552-1`
            }
        }
    ]
};
