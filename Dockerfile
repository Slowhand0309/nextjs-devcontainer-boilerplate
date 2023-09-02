FROM node:18.12.0-alpine

RUN apk update && \
    apk --no-cache add git=~2.36 vim=~8.2

RUN npm install -g vercel@^32.1.0
