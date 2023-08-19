FROM node:lts-alpine3.18

RUN mkdir -p /app
WORKDIR /app

EXPOSE 3000
CMD echo 1; npm install; echo 2; npm run start