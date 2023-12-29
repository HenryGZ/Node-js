FROM node:20 

WORKDIR /todolist_fullstack

COPY package.json /todolist_fullstack/
COPY package-lock.json /todolist_fullstack/

RUN npm install

COPY . /todolist_fullstack/

EXPOSE 3000

CMD ["npm", "start"]