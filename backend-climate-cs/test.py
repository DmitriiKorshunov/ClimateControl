import json

with open('sensors.json', 'r') as file_object:
    reply = json.load(file_object)
    print(reply['value'])