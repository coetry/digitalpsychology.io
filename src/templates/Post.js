import R from 'ramda';
import React from 'react';
import Helmet from 'react-helmet';

import NextPost from '../components/NextPost';
import Pagination from '../components/Pagination';
import PostContent from '../components/PostContent';

function Post(props) {
    const post = props.data.markdownRemark;
    const siteTitle = props.data.site.siteMetadata.title;

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
            <Helmet title={`${post.frontmatter.title} » ${siteTitle}`} />
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
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                slug
            }
            frontmatter {
                title
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
