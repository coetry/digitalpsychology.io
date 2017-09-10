import R from 'ramda';
import React from 'react';

import NextPost from '../components/NextPost';
import Pagination from '../components/Pagination';
import PostContent from '../components/PostContent';
import SeoMetaTags from '../components/SeoMetaTags';

function Post(props) {
    const post = props.data.markdownRemark;
    const meta = props.data.site.siteMetadata;
    const seoImage = meta.siteUrl
        + R.path(['frontmatter', 'seoImage', 'childImageSharp', 'resize', 'src'], post);

    // Get paths for pagination
    const edgesPath = ['data', 'allMarkdownRemark', 'edges'];
    const slugPath = ['node', 'fields', 'slug'];
    const edges = R.path(edgesPath, props).filter((edge) => edge.node.fields.slug !== '404');
    const currentIndex = R.findIndex(R.pathEq(slugPath, post.fields.slug))(edges);
    const nextTitle = R.path([currentIndex + 1, 'node', 'frontmatter', 'title'], edges);
    const nextPath = R.path([currentIndex + 1, 'node', 'fields', 'path'], edges);
    const previousPath = R.path([currentIndex - 1, 'node', 'fields', 'path'], edges);

    return (
        <div>
            <SeoMetaTags
                author={meta.author}
                datePublished={post.frontmatter.datePublished}
                description={meta.description}
                facebookAppId={meta.facebookAppId}
                image={{ url: seoImage, width: 1000, height: 500 }}
                logo={{ url: `${meta.siteUrl}/logo-structured-data.png`, width: 600, height: 60 }}
                publisher={meta.title}
                title={`${post.frontmatter.title} » ${meta.title}`}
                twitterHandle={meta.twitterHandle}
                type="article"
                url={meta.siteUrl + post.fields.path} />
            <Pagination next={nextPath} previous={previousPath} />
            <PostContent content={post.html} title={post.frontmatter.title} />
            <NextPost title={nextTitle} to={nextPath} />
        </div>
    );
}

export default Post;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
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
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                path
                slug
            }
            frontmatter {
                datePublished
                title
                seoImage {
                    childImageSharp {
                        resize(width: 1000, quality: 100) {
                            src
                        }
                    }
                }
            }
        }
        allMarkdownRemark (
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
                        title
                    }
                }
            }
        }
    }
`;
