FROM node:alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --production
COPY index.js /app/index.js
CMD npm start
