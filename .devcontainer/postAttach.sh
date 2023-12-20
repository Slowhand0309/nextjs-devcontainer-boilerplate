#!/bin/sh

cd `dirname $0`
cd ..
sudo chown -R vscode node_modules
sudo chown -R vscode .next
sudo chown -R vscode /home/vscode/.local/share/com.vercel.cli

yarn install
yarn dev