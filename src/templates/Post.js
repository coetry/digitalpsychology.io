import R from 'ramda';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

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
    const nextPath = R.path([currentIndex + 1, 'node', 'fields', 'path'], edges);
    const previousPath = R.path([currentIndex - 1, 'node', 'fields', 'path'], edges);

    const Root = styled.div`
        padding: 7vw 10vw;
    `;

    return (
        <Root>
            <Helmet title={`${post.frontmatter.title} » ${siteTitle}`} />
            <Pagination next={nextPath} previous={previousPath} />
            <h1>{post.frontmatter.title}</h1>
            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </Root>
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
                }
            }
        }
    }
`;
