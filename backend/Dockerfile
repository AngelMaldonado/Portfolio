# Use a Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /backend

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
