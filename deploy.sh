#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生产的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.id/<REPO>
# master:gh-pages 是将 dist 目录下的内容单独指向 gh-pages 分支
git push -f https://github.com/JoeZhangHao/my-blog.git master:gh-pages

cd -
