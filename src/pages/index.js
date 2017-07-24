import React from 'react';
import styled, { keyframes } from 'styled-components';

import Container from '../components/Container';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Header from '../components/Header';

export default function Index(props) {
    const siteTitle = props.data.site.siteMetadata.title;
    const posts = props.data.allMarkdownRemark.edges.map((edge) => ({
        path: edge.node.fields.path,
        slug: edge.node.fields.slug,
        title: edge.node.frontmatter.title
    })).filter((post) => post.slug !== '404');

    const fadeIn = keyframes`
        from {
            opacity: 0;
            transform: translateY(1rem);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    const Animation = styled.div`
        animation: 1s ease ${fadeIn};
    `;

    return (
        <div>
            <Animation>
                <Header title={siteTitle}>
                    <Container>
                        <p>
                            {`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`}
                        </p>
                    </Container>
                </Header>
            </Animation>
            <Grid items={posts} />
            <Footer />
        </div>
    );
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
    query getPosts {
        site {
            siteMetadata {
                title
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
                        title
                    }
                }
            }
        }
    }
`;