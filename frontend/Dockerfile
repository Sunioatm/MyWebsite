# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the root of the directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build your app
RUN npm run build

# Install a simple http server to serve your static files
RUN npm install -g http-server

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 8080

# Run http-server, '-p 8080' specifies the port and '-d false' disables directory listing
CMD ["http-server", "dist", "-p", "8080", "-d", "false"]
