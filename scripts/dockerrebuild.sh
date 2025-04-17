#!/bin/bash

IMAGE_NAME="personal-site-dev"
PORT=3000

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🔍 Verwijderen van containers gebaseerd op image '$IMAGE_NAME'...${NC}"
docker ps -a --filter "ancestor=$IMAGE_NAME" -q | xargs -r docker rm -f

echo -e "${GREEN}🏗️  Image opnieuw bouwen: $IMAGE_NAME...${NC}"
docker build --no-cache -t $IMAGE_NAME .

if [ $? -ne 0 ]; then
  echo -e "${RED}❌ Build is mislukt. Stoppen...${NC}"
  exit 1
fi

echo -e "${GREEN}🚀 Container starten op poort $PORT...${NC}"
docker run -it -p $PORT:$PORT \
  -v ${PWD}:/app \
  -v /app/node_modules \
  $IMAGE_NAME

echo -e "${GREEN}🧽 Opruimen van dangling images...${NC}"
docker image prune -f

echo -e "${GREEN}✅ Rebuild succesvol afgerond!${NC}"