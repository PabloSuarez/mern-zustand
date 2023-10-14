FROM node:18.12-bullseye-slim

WORKDIR /app

COPY ./package.json ./
# COPY ./tsconfig.json ./
# COPY ./dist ./dist

COPY . /app

RUN npm install

EXPOSE $SERVER_PORT

CMD ["npm", "run", "start:dev"]