FROM node:10

WORKDIR /usr/src/app
COPY app/package.json .
ENV NODE_ENV=production
RUN npm install --production
COPY app .

CMD [ "npm", "start" ]
