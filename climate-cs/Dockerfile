FROM node:10.19.0

#RUN npm install
#RUN mkdir -p  ./climate-cs

WORKDIR ./climate-cs
COPY package.json /climate-cs/package.json
RUN npm install --only=prod

COPY . /climate-cs
#RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 3000


CMD ["npm","start"]