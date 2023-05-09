FROM node:18.12.0-alpine

RUN apk update && \
    apk --no-cache add git vim

RUN npm install -g vercel