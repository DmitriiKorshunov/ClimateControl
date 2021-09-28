FROM node:10.19.0
RUN mkdir -p /PycharmProjects/ClimateControl/authServer/
WORKDIR /PycharmProjects/ClimateControl/authServer/

COPY . /PycharmProjects/ClimateControl/authServer/


#RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 1000


CMD ["node", "server.js"]