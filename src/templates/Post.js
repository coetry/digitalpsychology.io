import R from 'ramda';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import NextPost from '../components/NextPost';
import PostContent from '../components/PostContent';

function Post(props) {
    const post = props.data.markdownRemark;
    const siteTitle = props.data.site.siteMetadata.title;

    // Get the next post path
    const edgesPath = ['data', 'allMarkdownRemark', 'edges'];
    const edges = R.path(edgesPath, props);
    const slugPath = ['node', 'fields', 'slug'];
    const currentIndex = R.findIndex(R.pathEq(slugPath, post.fields.slug))(edges);
    const nextPath = R.path([...edgesPath, currentIndex + 1, 'node', 'fields', 'path'], props);

    const Root = styled.div`
        padding: 7vw 10vw;
    `;

    return (
        <Root>
            <Helmet title={`${post.frontmatter.title} » ${siteTitle}`} />
            <NextPost to={nextPath} />
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
