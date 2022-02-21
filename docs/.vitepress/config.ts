import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { createStyleImportPlugin, AndDesignVueResolve } from 'vite-plugin-style-import';
import { UserConfig } from 'vitepress/dist/node'; // import 基础组件 from 'unplugin-vue-components/vite';
// import 基础组件, { AntDesignVueResolver } from 'vite-plugin-components';
import { markdownPlugins, vitePlugins } from './plugins';
import symlink from './plugins/symlink';
const rootPath = path.join(process.cwd(), 'package.json');
const alias = symlink(rootPath);

const config: UserConfig = {
  title: 'TypeScript4 文档',
  description: 'TypeScript4 最新官方文档翻译',
  base: process.env.NODE_ENV === 'development' ? '/' : '/',
  locales: {
    // 修改时间显示效果
    '/': {
      lang: 'zh-CN',
    },
  },
  vite: {
    resolve: {
      alias,
    },
    plugins: [
      ...vitePlugins,
      createStyleImportPlugin({
        resolves: [AndDesignVueResolve()],
        libs: [
          // {
          //   libraryName: '@wii/wau-vue',
          //   esModule: true,
          //   resolveStyle: (name) => {
          //     return `@wii/wau-vue/src/${name}/style/index`;
          //   },
          // },
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`;
            },
          },
        ],
      }),
      vueJsx({}),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
  markdown: {
    config: (md) => {
      markdownPlugins.forEach((plugin) => {
        md.use(plugin);
      });
    },
  },
  themeConfig: {
    subSidebar: 'auto', // 将多级标题放在屏幕右侧
    nav: [
      {
        text: '首页',
        link: '/',
        redirect: '/guide/',
      },
      {
        text: '我的博客',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/JoeZhangHao',
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/1398234519965991',
          },
        ],
      },
    ],
    sidebar: [
      {
        path: '/guide/',
        title: '快速开始',
        meta: {
          title: '快速开始',
          order: 0,
          redirect: 'start',
        },
        redirect: '/guide/start/',
        children: [
          {
            path: '/guide/start/',
            title: '安装',
            meta: {
              title: '安装',
            },
          },
        ],
      },
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          {
            title: '学前必读',
            path: '/',
          },
        ],
      },
      {
        title: 'Typescript',
        path: '/typescript/Basic',
        collapsable: false,
        children: [
          {
            title: 'Typescript 基础',
            path: '/typescript/Basic',
          },
        ],
      },
      {
        title: '基础学习',
        path: '/handbook/ConditionalTypes',
        collapsable: false,
        children: [
          {
            title: '条件类型',
            path: '/handbook/ConditionalTypes',
          },
          {
            title: '泛型',
            path: '/handbook/Generics',
          },
        ],
      },
    ],
  },
};

export default config;
