FROM node:16.13.0

WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

EXPOSE 3000

CMD [ "bash" ]