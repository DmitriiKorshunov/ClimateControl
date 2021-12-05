# pull the base image
FROM node:16.9.0

# set the working direction
WORKDIR /climate-cs

# add `/app/node_modules/.bin` to $PATH
ENV PATH /climate-cs/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]