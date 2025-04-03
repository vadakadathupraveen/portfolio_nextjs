# Use the official Node.js image
FROM node:current-alpine3.21

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (or whatever port your app uses)
EXPOSE 3000

# Start the Next.js app in development mode
CMD ["npm", "run", "dev"]
