import fs from 'fs';
import path from 'path';
import { camelCase, upperFirst, kebabCase } from 'lodash';
// import rimraf from 'rimraf';

const baseDir = path.resolve(process.cwd(), 'node_modules/.vitepress-demos');

global.inlineBlockIndex = 0;

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}

export function createInlineDemo(source: string, lang: string) {
  const baseName = `vitepress-inline-demo-${global.inlineBlockIndex++}`;
  const fileName = `${baseName}.${lang}`;
  const componentName = upperFirst(camelCase(baseName));
  const filePath = path.resolve(baseDir, fileName);

  fs.writeFileSync(filePath, source, {
    encoding: 'utf8',
  });

  return { componentName, filePath, id: kebabCase(baseName) };
}
