# Use a Node.js base image
FROM node:22.12.0-alpine3.21

# Create a new user called node and add it to the group node
RUN addgroup nodejs && adduser -S -G nodejs nodejs

# Set the working directory inside the container
WORKDIR /angelmaldonado-backend

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Buid the application
RUN npm run build

# Change the owner of the application code to the node user
RUN chown -R nodejs:nodejs /angelmaldonado-backend

# Change the user to the node user
USER nodejs

# Expose the application port
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
