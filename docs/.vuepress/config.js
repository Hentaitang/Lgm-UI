module.exports = {
  title: 'LGM-UI ',
  description: 'A easy UI library, built with Vue.js 2.0',
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ],
  base: '/Lgm-UI/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'https://www.jianshu.com/u/740765d45aca' },
      { text: 'GitHub', link: 'https://github.com/Hentaitang/Lgm-UI' }
    ],
    // displayAllHeaders: true,
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          '/',
          '/guide/install.md',
          '/guide/start.md'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: '通用',
            collapsable: false,
            children: [
              '/component/Color',
              '/component/Icon',
              '/component/Button'
            ]
          },
          {
            title: '布局',
            collapsable: false,
            children: [
              '/component/Icon',
              '/component/Button'
            ]
          },
          {
            title: '数据录入',
            collapsable: false,
            children: [
              '/component/Icon',
              '/component/Button'
            ]
          },
        ]
      },
    ]
  }
};