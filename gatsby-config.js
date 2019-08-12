module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:300,400,500', 'VT323', 'Material+Icons']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-transformer-yaml`
    },
    {
      resolve: `gatsby-plugin-offline`
    }
  ],
  siteMetadata: {
    title: `NumEcon`,
  }
}