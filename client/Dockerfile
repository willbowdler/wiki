# Use official Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm && pnpm install

# Copy source code
COPY . .

# Expose port (e.g., 5173 for Vite)
EXPOSE 5173

# Start the app in dev mode
CMD ["pnpm", "run", "dev"]