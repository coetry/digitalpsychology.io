const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators;
    let slug = null;

    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent);
        const parsedFilePath = path.parse(fileNode.relativePath);

        if (parsedFilePath.dir === ``) {
            slug = parsedFilePath.name;
        } else {
            slug = parsedFilePath.dir;
        }

        createNodeField({ node, name: `path`, value: `/${slug}/` });
        createNodeField({ node, name: `slug`, value: slug });
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        const post = path.resolve('src/templates/Post.js');

        // Query for all markdown "nodes" and for the slug
        // we previously created.
        const query = graphql(`
            {
                allMarkdownRemark (
                    filter: { frontmatter: { draft: { ne: true } } }
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
        `);

        resolve(
            query.then((result) => {
                if (result.errors) {
                    // eslint-disable-next-line no-console
                    console.log(result.errors);
                    reject(result.errors);
                }

                // Create blog posts pages.
                result.data.allMarkdownRemark.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.fields.path,
                        component: post,
                        context: {
                            path: edge.node.fields.path,
                            slug: edge.node.fields.slug
                        }
                    });
                });
            })
        );
    });
};
