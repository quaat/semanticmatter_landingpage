### Build
FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# Sanity check to ensure the build output exists
RUN if [ ! -d "/app/out" ]; then echo "Build failed: /app/out directory not found"; exit 1; fi

### Serve
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
