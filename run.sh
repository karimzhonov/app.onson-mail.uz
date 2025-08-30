#!/bin/bash

CONTAINER_NAME="app-front"
IMAGE_NAME="khtkarimzhonov/app.onson-mail.uz:latest"

# Если контейнер существует — остановить и удалить
if [ "$(docker ps -a -q -f name=^/${CONTAINER_NAME}$)" ]; then
    echo "Stopping and removing existing container: $CONTAINER_NAME"
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Загружаем свежий образ
echo "Pulling latest image: $IMAGE_NAME"
docker pull $IMAGE_NAME

# Запускаем новый контейнер
echo "Starting new container: $CONTAINER_NAME"
docker run -d --name $CONTAINER_NAME -p 6000:7000 $IMAGE_NAME
