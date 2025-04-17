#!/bin/bash

docker run -it -p 3000:3000 \
  -v ${PWD}:/app \
  -v /app/node_modules \
  personal-site-dev