module.exports = {
  title: 'LGM-UI ',
  description: 'lgm-ui官网',
  base: '/Lgm-UI/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Hentaitang/Lgm-UI' },
    ],
    // displayAllHeaders: true,
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          '/guide/info.md',
          '/guide/install.md',
          '/guide/start.md'
        ]
      },
    ]
  }
}