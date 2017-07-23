module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        title: `Digital Psychology`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600
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
                trackingId: `UA-103011834-1`
            }
        }
    ]
};
