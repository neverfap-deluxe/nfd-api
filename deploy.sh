#!/bin/sh

ssh root@198.199.67.180 <<EOF
  echo "go to nfd-api folder"
  cd /home/deploy/nfd-api

  echo "git pull"
  git pull

  echo "npm run bible"
  npm run bible

  echo "echo exit"
  exit
EOF

echo 'all done!'

  # echo "pm2 stop"
  # pm2 stop nfdapiserver

  # echo "pm2 start index.js"
  # pm2 start server/index.js --name nfdapiserver
