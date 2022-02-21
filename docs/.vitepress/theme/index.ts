// import defaultTheme from 'vitepress/dist/client/theme-default';
import Layout from './layout.vue';
import NotFound from './not-found.vue';
import DemoBlock from './components/demo-block.vue';
import { Theme } from 'vitepress';
import './styles/vars.css';
import './styles/code.css';
import './styles/layout.css';
import './styles/custom-blocks.css';
import './styles/sidebar-links.css';
// import 'prismjs/themes/prism.css';
import './styles/index.less';

const themeConfig: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock);
  },
};

export default themeConfig;
