FROM node:11

WORKDIR /usr/src/app

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

