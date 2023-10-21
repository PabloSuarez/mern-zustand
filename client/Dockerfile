FROM node:18.12-bullseye-slim

RUN apt-get update && apt-get install -y procps && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
# ENTRYPOINT ["/entrypoint.sh"]

COPY . .

RUN npm install

EXPOSE $VITE_FRONTEND_PORT

CMD ["npm", "run", "dev"]
