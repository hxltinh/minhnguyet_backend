#!/bin/bash

echo "Pulling MongoDB Docker image..."
docker pull mongo:latest

echo "Starting MongoDB container..."
docker run -d \
  --name mongodb_server \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=adminpassword \
  mongo:latest

  echo "Checking if MongoDB container is running..."
  docker ps -f "name=mongodb_server"

  echo "MongoDB server started successfully. You can connect using the following credentials:"
  echo "Username: admin"
  echo "Password: adminpassword"
  echo "You can connect using localhost:27017"