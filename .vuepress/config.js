module.exports = {
  title: '前端代码规范',
  description: '为了增强团队开发协作、提高代码质量和提升编码速度的规范。',
  head: [
    ['link', { rel: 'icon', href: `/icons/favicon-32x32.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // search: false,
    logo: '/icons/apple-touch-icon-152x152.png',
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    nav: [
      {
        text: '代码规范',
        link: '/guide/',
      },
      {
        text: 'Vue代码规范',
        link: '/vuejs/'
      },
      {
        text: 'markdown手册编写',
        link: '/markdown/'
      },
      {
        text: '更新日志',
        link: 'https://github.com/yiibryan/front-end-docs/blob/master/CHANGELOG.md'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '开始使用',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'HTML 规范',
          collapsable: false,
          children: [
            'html/code',
            'html/note',
            'html/template',
            'html/webapp'
          ]
        },
        {
          title: 'CSS 规范',
          collapsable: false,
          children: [
            'css/code',
            'css/note',
            'css/sass',
            'css/reset',
            'css/query',
            'css/webkit'
          ]
        },
        {
          title: 'javascript 规范',
          collapsable: false,
          children: [
            'javascript/code',
            'javascript/language'
          ]
        },
        {
          title: '图片规范',
          collapsable: false,
          children: [
            'image/format',
            'image/import',
            'image/quality',
            'image/size'
          ]
        },
        {
          title: '命名规范',
          collapsable: false,
          children: [
            'name/dir',
            'name/image',
            'name/htmlcss',
            'name/classname'
          ]
        }
      ],
      '/vuejs/': [
        {
          title: '风格指南',
          collapsable: false,
          children: [
            '',
            'rule-a',
            'rule-b',
            'rule-c',
            'rule-d'
          ]
        },
      ],
      '/markdown/': [
        {
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    }
  }
}
