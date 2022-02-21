import MarkdownIt from 'markdown-it';
import { JSDOM } from 'jsdom';
import path from 'path';
import fs from 'fs';
import { upperFirst, camelCase, kebabCase } from 'lodash';
import { addHoistedTag } from './utils/hoisted-tags';
import { highlight } from './utils/highlight';

export default (md: MarkdownIt) => {
  const defaultHtmlBlockRender = md.renderer.rules.html_block!;

  md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const codeTagRE = /^<code/;
    if (codeTagRE.test(token.content)) {
      const dom = new JSDOM(token.content);
      const codeTag = dom.window.document.querySelector('code');
      const attrs = codeTag.attributes;
      const config: Record<string, any> = {};
      for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        config[attr.name] = attr.value;
      }

      if (config.src) {
        const { src, title, desc } = config;
        const basePath = path.join(process.cwd(), 'docs');
        const rawPath = src.trim().replace(/^@/, basePath).trim();
        const { name, dir, ext } = path.parse(rawPath);
        const relativeDir = dir.replace(basePath, '');
        const fullRelativePath = path.join('vitepress-external', relativeDir, name);
        const componentName = upperFirst(camelCase(fullRelativePath));
        addHoistedTag(md, `import ${componentName} from "${rawPath}"`);

        if (env.loader) {
          env.loader.addDependency(rawPath);
        }

        const content = fs.readFileSync(rawPath, 'utf8');

        const lang = ext.replace('.', '');

        const descHtml = md.renderInline(desc);

        const id = kebabCase(src.trim().replace(/^@/, ''));

        return `
        <DemoBlock
          id="${id}"
          lang="${lang}"
          title="${title}"
          desc="${encodeURIComponent(descHtml)}"
          source="${encodeURIComponent(content)}">
          <${componentName} />
          <template v-slot:source>
            <div class="language-${lang}">${highlight(content, lang)}</div>
          </template>
        </DemoBlock>
        `;
      }
    }
    return defaultHtmlBlockRender(tokens, idx, options, env, self);
  };
};
