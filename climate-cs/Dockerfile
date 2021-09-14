FROM node:10.19.0
RUN mkdir -p /PycharmProjects/ClimateControl/climate-cs
WORKDIR /PycharmProjects/ClimateControl/climate-cs

COPY . /PycharmProjects/ClimateControl/climate-cs
#RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 3000



CMD ["npm","start"]