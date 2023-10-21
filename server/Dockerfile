FROM node:18.12-bullseye-slim

RUN apt-get update && apt-get install -y procps && rm -rf /var/lib/apt/lists/*

WORKDIR /app

EXPOSE $SERVER_PORT

COPY ./package.json ./

RUN npm install

COPY . /app

CMD ["npm", "run", "start:dev"]