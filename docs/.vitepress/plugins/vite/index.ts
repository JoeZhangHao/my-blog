import { Plugin } from 'vite';

const plugin: Plugin = {
  name: 'FileId',
  transform(code, id) {
    if (id.endsWith('.md')) {
      global.filename = id;
    }
    return code;
  },
};

export default [plugin];
