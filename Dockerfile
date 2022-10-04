FROM node:16-alpine

WORKDIR /app

RUN npm i -g npm@latest

RUN apk update && apk add bash
