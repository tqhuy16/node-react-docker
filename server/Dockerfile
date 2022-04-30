FROM node:14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
# COPY package-lock.json ./
COPY ./ ./
RUN npm i
EXPOSE ${PORT_SERVER}
CMD ["npm", "run", "dev"]