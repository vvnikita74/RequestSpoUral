FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs

# ARG NODE_ENV=production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R nodejs:nodejs /opt/app && chmod -R 755 /opt/app
USER nodejs
RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "develop"]
