FROM node:12.13.0-alpine

RUN apk update && \
    apk add git vim