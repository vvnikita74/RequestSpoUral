FROM node:18

RUN apt-get update && apt-get upgrade -y && apt-get install libvips-dev -y 

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

COPY ./package.json ./package-lock.json ./

RUN npm install

ENV PATH /opt/app/node_modules/.bin:$PATH

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop", "--debug"]     