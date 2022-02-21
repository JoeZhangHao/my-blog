import MarkdownIt from 'markdown-it';
import { createInlineDemo } from './utils/inline-demo';
import { addHoistedTag } from './utils/hoisted-tags';

const previewLangs = [
  // 'jsx',
  // 'tsx',
  'vue',
];

/**
 * parser for parse modifier of code block
 * @param meta  meta raw string
 */
function codeBlockModifierParser(meta: string): Record<string, any> {
  return (meta || '').split('|').reduce((result, item) => {
    item = String.prototype.trim.call(item);

    if (item) {
      result[item] = true;
    }

    return result;
  }, {});
}

export default (md: MarkdownIt) => {
  const defaultCodeBlockRender = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const { info, content } = token;
    const [lang, meta] = info.split('|').map((str) => str.trim());
    const modifiers = codeBlockModifierParser(meta);

    const defaultContent = defaultCodeBlockRender(tokens, idx, options, env, self);

    if (previewLangs.includes(lang) && !modifiers.pure) {
      const { componentName, filePath, id } = createInlineDemo(token.content, lang);
      addHoistedTag(md, `import ${componentName} from '${filePath}';`);

      return `
      <DemoBlock
        id="${id}"
        lang="${lang}"
        source="${encodeURIComponent(content)}">
        <${componentName} />
        <template v-slot:source>
          ${defaultContent}
        </template>
      </DemoBlock>
      `;
    }
    return defaultContent;
  };
};
