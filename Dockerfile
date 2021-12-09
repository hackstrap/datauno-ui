FROM node:14.17.3-buster as build 

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

# NGINX Web Server
FROM nginx:1.17.10-alpine as prod

COPY --from=build /app/build /usr/share/nginx/html

# Setup NGINX with config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
