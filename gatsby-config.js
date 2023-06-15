/**
 * @type {import('gatsby').GatsbyConfig}
 */


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { githubApiQuery } = require('./github-api')

module.exports = {
  siteMetadata: {
    title: `jcgithub2`,
    siteUrl: `https://jconline.tech`
  },
  plugins: [
    "gatsby-plugin-image", 
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "background_color": '#663399',
      "theme_color": '#663399',
      "display": 'minimal-ui',
      "icon": "src/assets/images/jedi.svg"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-sass",
  "gatsby-plugin-offline",
  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "images",
  //     "path": "./src/images/"
  //   },
  //   __key: "images"
  // },
  {
    resolve: `gatsby-source-github-api`,
    options: {
      // url: API URL to use. Defaults to  https://api.github.com/graphql
       url: "https://api.github.com/graphql",

      // token: required by the GitHub API
      token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,

      // GraphQLquery: defaults to a search query
      graphQLQuery: githubApiQuery,
      // variables: defaults to variables needed for a search query
      variables: {
        github_login: process.env.GITHUB_LOGIN
      }
    }
  }
]
};