FROM node:lts-alpine3.18

RUN mkdir -p /app
WORKDIR /app

# COPY package.json package.json
# COPY package-lock.json package-lock.json
# COPY src src
# COPY public public

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]