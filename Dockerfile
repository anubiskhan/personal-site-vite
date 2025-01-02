# Build stage only - no need for nginx
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Set the default command to copy the build output to a mounted volume
CMD ["sh", "-c", "cp -r /app/dist/* /output/"]