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

exports.createPages = ({ graphql, actions }) => {
    doc.notebook.forEach(x1 => {
        x1.notebooks.forEach(x2 => {
            fetch("https://raw.githubusercontent.com/" + x2.owner + "/" + x2.repository + "/master/" + x2.path).then(reponse => reponse.json()).then(data => {
                actions.createPage({
                    path: x1.path + baseName(x2.path),
                    component: require.resolve("./src/templates/Notebook.jsx"),
                    context: {
                        data: data
                    }
                })
            })
        })
    })
    graphql(`
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
  `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            actions.createPage({
                path: node.fields.slug,
                component: require.resolve("./src/templates/Markdown.jsx"),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    slug: node.fields.slug,
                },
            })
        })
    })
}


exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        node: { fs: 'empty' },
    })
}
