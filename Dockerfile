FROM node:18.14.2-alpine3.17
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3500
CMD node index.js
 