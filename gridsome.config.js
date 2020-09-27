// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription: '大前端',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'https://yjjcode.com',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['blog', 'project', 'social'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ]
}
