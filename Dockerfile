FROM node:carbon
WORKDIR /the/workdir/path
COPY package*.json ./
RUN npm install
COPY . /the/workdir/path/
EXPOSE 8000
CMD [ "npm", "start"]
