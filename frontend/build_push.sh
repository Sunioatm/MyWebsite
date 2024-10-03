#!/bin/bash

# Variables
DOCKER_HUB_REPO="sunioatm/myweb-frontend"

# Build the Docker image
echo "Building the Docker image..."
docker build -t $DOCKER_HUB_REPO .

# Push the Docker image to Docker Hub
echo "Pushing the Docker image to Docker Hub..."
docker push $DOCKER_HUB_REPO

echo "Docker image pushed successfully!"

