const axios = require('axios');
const fetch = require("node-fetch")
const yaml = require('js-yaml');
const fs = require('fs');

var doc = yaml.safeLoad(fs.readFileSync('./content/config.yml', 'utf8'));

function baseName(str) {
    var base = new String(str).substring(str.lastIndexOf('/') + 1);
    if (base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
    return base;
}

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const blogPostTemplate = require.resolve("./src/templates/Markdown.jsx")
        const NotebookTemplate = require.resolve("./src/templates/Notebook.jsx")
        // Query for markdown nodes to use in creating pages.
        resolve(
            graphql(
                `
                {
                    allMarkdownRemark {
                      edges {
                        node {
                          fields {
                            slug
                          }
                        }
                      }
                    }
                  }
          `
            ).then(async result => {
                if (result.errors) {
                    reject(result.errors)
                }

                // Create pages for each markdown file.
                result.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
                    createPage({
                        path: node.fields.slug,
                        component: blogPostTemplate,
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                            slug: node.fields.slug,
                        },
                    })
                })
                // for (x1 in doc.notebook) {
                //     for (x2 in x1.notebooks) {
                //         const notebook = () => axios.get("https://raw.githubusercontent.com/NumEconCopenhagen/lectures-2019/master/02/Primitives.ipynb");
                //         const responseLanguages = await fetchLanguages();
                //         createPage({
                //             path: baseName,
                //             component: NotebookTemplate,
                //             context: {
                //                 data: responseLanguages.data
                //             }
                //         })
                //     }
                // }
                for (x1 in doc.notebook) {
                    for (x2 in doc.notebook[x1].notebooks) {
                        const url = "https://raw.githubusercontent.com/" + doc.notebook[x1].notebooks[x2].owner + "/" + doc.notebook[x1].notebooks[x2].repository + "/master/" + doc.notebook[x1].notebooks[x2].path
                        const fetchNotebook = () => axios.get(url);
                        const responseNotebook = await fetchNotebook();
                        createPage({
                            path: doc.notebook[x1].path + baseName(doc.notebook[x1].notebooks[x2].path),
                            component: NotebookTemplate,
                            context: {
                                data: responseNotebook.data
                            }
                        })
                    }
                }

            })
        )
    })
}