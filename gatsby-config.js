module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    }
  ],
}