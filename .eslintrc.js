module.exports = {
  extends: ['@wii/eslint-config-wii/vue'],
  ignorePatterns: ['!docs/.vitepress', 'docs/**/dist', 'es/', 'lib/', 'node_modules', 'scripts/make/template'],
  rules: {
    'unicorn/filename-case': 'off',
  },
};
