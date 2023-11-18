FROM node:18.17.0-alpine

RUN apk update && \
    apk --no-cache add git vim

RUN npm install -g vercel
