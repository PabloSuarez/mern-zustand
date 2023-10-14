FROM node:18.12-bullseye-slim

WORKDIR /app

EXPOSE $VITE_FRONTEND_PORT

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY . .

ENTRYPOINT ["/entrypoint.sh"]

RUN npm install

CMD ["npm", "run", "dev"]
