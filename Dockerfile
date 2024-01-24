FROM node:20-alpine

ENV NODE_ENV=dev

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3001

USER node

CMD ["npm", "start"]