module.exports = {
    siteMetadata: {
        title: 'Thanh T Bui',
        siteUrl: 'thanhbui.me'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ]
}