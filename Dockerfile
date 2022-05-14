FROM node:18.1.0 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM bitnami/nginx:1.21
COPY --from=builder /app/dist/ebad/ ./
COPY nginx.conf /opt/bitnami/nginx/conf/server_blocks/
