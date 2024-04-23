# Use a base image with Node.js pre-installed
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Set environment variable for MongoDB connection URI
ENV MONGODB_URI="mongodb://mongo_host:27017/mydatabase"

# Command to run your application
CMD ["npm", "run", "dev"]
