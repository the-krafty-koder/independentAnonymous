FROM node:14.7.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --loglevel verbose
COPY . .
RUN npm run build --prod --build-optimizer

EXPOSE 4200
CMD ["npm","start"]

