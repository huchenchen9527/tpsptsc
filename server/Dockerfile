FROM node:18-alpine

WORKDIR /app

COPY server/package.json server/package-lock.json ./
RUN npm install --production

COPY . ./

EXPOSE 3001

WORKDIR /app/server

CMD ["node", "server.js"]