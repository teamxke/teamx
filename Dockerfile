# Use the official Node.js image as the base image
FROM node:18-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependencies installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Start the application
CMD ["npm", "start"]
