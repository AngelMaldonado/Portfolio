# Use a Node.js base image
FROM node:22.12.0-alpine3.21

# Create a new user called angular and add it to the group angular
RUN addgroup angular && adduser -S -G angular angular

# Set the working directory inside the container
WORKDIR /angelmaldonado-frontend

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Change the owner of the application code to the angular user
RUN chown -R angular:angular /angelmaldonado-frontend

USER angular

EXPOSE 4200

# Define the command to run your app
CMD ["npm", "start"]
