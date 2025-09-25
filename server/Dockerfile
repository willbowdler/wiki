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

# Build TypeScript (if needed for dev)
RUN pnpm run build

# Expose port (e.g., 3000 for Express)
EXPOSE 3000

# Start the app in dev mode
CMD ["pnpm", "run", "start:dev"]