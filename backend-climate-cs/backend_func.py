# -*- coding: utf-8 -*-

from bs4 import BeautifulSoup as BS
from datetime import datetime
import requests, json, pika


def parsing_get_weather():
    data = requests.get('https://weather.rambler.ru/v-sertolovo/3-days/') # GET-запрос
    html = BS(data.text, 'html.parser')
    tempNight = html.findAll('span', class_='_2GN0')
    tempDay = html.findAll('span', class_='_3tD7')
    wind = html.findAll('span', class_='_3ty-')
    precipitation = html.findAll('span', class_='_3TiQ')
    reply = {
        'temp_day': str(tempDay[0].text),
        'temp_night': str(tempNight[0].text),
        'wind':str(wind[0].text),
        'precipitation': str(precipitation[0].text)
    }
    return reply

def get_local_temp():
    with open('local.json', 'r') as file_object:
        jsonInfo = json.loads(file_object.read())
    return 'Время: ' + str(jsonInfo['time']) +\
           '\nТемпература: ' + str(jsonInfo['temp'] + ' Влажность: ' + str(jsonInfo['humidity']))



def get_water_temp():
    with open('water.json', 'r') as file_object:
        jsonInfo = json.loads(file_object.read())
        return 'Время: ' + str(jsonInfo['time']) + \
               '\nТемпература: ' + str(jsonInfo['temp'])


def post_new_item_local(info):
    with open('local.json', 'w') as file_object:  # open the file in write mode
        newData={"time": str(datetime.now().strftime("%H:%M:%S")),
                 "temp": str(info[0]),
                 "humidity": str(info[1])}
        json.dump(newData, file_object)

def post_new_item_water(info):
    with open('water.json', 'w') as file_object:  # open the file in write mode
        newData = {"time": str(datetime.now().strftime("%H:%M:%S")),
                   "temp": str(info[0]),
                   "humidity": str(info[1])}
        json.dump(newData, file_object)


