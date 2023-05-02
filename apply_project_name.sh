#!/usr/bin/env bash

# エラーで処理中断
set -e

DIRNAME=${PWD##*/}
DIRNAME=${DIRNAME:-/}

# docker-compose.yml
sed -i '' "s/\"nextjs\"/\"$DIRNAME\"/g" docker-compose.yml

# package.json
sed -i '' "s/nextjs-docker/$DIRNAME/g" package.json

# devcontainer.json
sed -i '' "s/Next.js/$DIRNAME/g" .devcontainer/devcontainer.json

# README.md
rm README.md
echo "# $DIRNAME" >> README.md

echo "renamed $DIRNAME in docker-compose.yml, package.json, devcontainer.json, README.md"