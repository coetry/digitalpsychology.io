import React from 'react';

import PatternList from '../components/PatternList';

export default function Index(props) {
    const posts = props.data.allMarkdownRemark.edges.map((edge) => ({
        path: edge.node.fields.path,
        raster: edge.node.frontmatter.raster,
        slug: edge.node.fields.slug,
        title: edge.node.frontmatter.title
    })).filter((post) => post.slug !== '404');

    return <PatternList items={posts} />;
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
    query getPosts {
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
                        raster
                        title
                    }
                }
            }
        }
    }
`;