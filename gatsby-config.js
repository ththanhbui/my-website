module.exports = {
  siteMetadata: {
    title: "Thanh Bui - Personal Website",
    author: "Thanh Bui",
    description: "A personal website based on Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'thanh-bui-personal-website',
        short_name: 'thanh-bui',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone', //'minimal-ui',
        icon: 'src/images/apple-touch-icon.png', // This path is relative to the root of the site.
        // include_favicon: true, // Include favicon
        legacy: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
