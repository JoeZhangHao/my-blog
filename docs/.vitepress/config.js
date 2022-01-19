module.exports = {
  title: 'TypeScript4 文档',
  description: 'TypeScript4 最新官方文档翻译',
  base: '/my-blog/',
  theme: 'reco', // 修改主题
  locales: { // 修改时间显示效果
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto', // 将多级标题放在屏幕右侧
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '我的博客',
        items: [{
            text: 'Github',
            link: 'https://github.com/JoeZhangHao'
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/1398234519965991'
          },
        ]
      }
    ],
    sidebar: [{
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [{
          title: '学前必读',
          path: '/'
        }]
      },
      {
        title: 'Typescript',
        path: '/typescript/Basic',
        collapsable: false,
        children: [{
          title: 'Typescript 基础',
          path: '/typescript/Basic'
        }, ]
      },
      {
        title: '基础学习',
        path: '/handbook/ConditionalTypes',
        collapsable: false,
        children: [{
          title: '条件类型',
          path: '/handbook/ConditionalTypes'
        }, {
          title: '泛型',
          path: '/handbook/Generics'
        }]
      }
    ]
  }
}