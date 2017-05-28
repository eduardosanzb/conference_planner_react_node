#!/bin/bash
export CURRENT_PATH=$PWD
osascript -e 'tell app "Terminal"
  do script "cd '$CURRENT_PATH' && cd client && yarn && yarn start"
  end tell '
yarn
npm run dev
