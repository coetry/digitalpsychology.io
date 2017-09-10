import React from 'react';

import PatternList from '../components/PatternList';
import SeoMetaTags from '../components/SeoMetaTags';
import image from './seo-image.png';

export default function Index(props) {
    const meta = props.data.site.siteMetadata;
    const posts = props.data.allMarkdownRemark.edges.map((edge) => ({
        path: edge.node.fields.path,
        image: edge.node.frontmatter.image,
        slug: edge.node.fields.slug,
        title: edge.node.frontmatter.title
    })).filter((post) => post.slug !== '404');

    return (
        <div>
            <SeoMetaTags
                author={meta.author}
                description={meta.description}
                facebookAppId={meta.facebookAppId}
                image={{ url: meta.siteUrl + image, width: 1000, height: 500 }}
                logo={{ url: `${meta.siteUrl}/logo-structured-data.png`, width: 600, height: 60 }}
                publisher={meta.title}
                title={meta.title}
                twitterHandle={meta.twitterHandle}
                type="website"
                url={meta.siteUrl} />
            <PatternList items={posts} />
        </div>
    );
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
    query getPosts {
        site {
            siteMetadata {
                author
                description
                facebookAppId
                title
                twitterHandle
                siteUrl
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { draft: { ne: true } } }
            sort: { fields: [fields___slug] }
        ) {
            edges {
                node {
                    fields {
                        path
                        slug
                    }
                    frontmatter {
                        image
                        title
                    }
                }
            }
        }
    }
`;