#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<douzedeveloper>.github.io/<newshore>
git push -f https://github.com/douzedeveloper/newshore.git master:gh-pages

cd -