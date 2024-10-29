# Start with a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app will run on
EXPOSE 9000

# Define environment variables
ENV MONGODB_URI mongodb://username:password@mongo:27017
ENV REDIS_URI redis://redis:6379
ENV ENABLE_WRITING_HANDLERS false

# Run the app
CMD ["npm", "start"]