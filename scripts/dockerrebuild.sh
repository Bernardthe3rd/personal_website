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
docker run -d -p $PORT:$PORT \
  -v ${PWD}:/app \
  -v /app/node_modules \
  --name personal-site-container \
  $IMAGE_NAME

# Wacht kort zodat container init afmaakt
sleep 3

echo -e "${GREEN}🧽 Formatteren en linten binnen container...${NC}"
docker exec -it personal-site-container npm run format
docker exec -it personal-site-container npm run lint

echo -e "${GREEN}✅ Rebuild succesvol afgerond!${NC}"