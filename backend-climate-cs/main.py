from fastapi import FastAPI, Response, WebSocket
from backend_func import *
from fastapi.middleware.cors import CORSMiddleware
from starlette import status
from starlette.responses import Response
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "ws://localhost:8000/ws/inside",
    "ws://192.168.0.104:8000/ws/inside",
    "http://192.168.0.104:8000/get/weather"




]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)







@app.get("/get/weather")
async def get_headers(response: Response):
    return parsing_get_weather()


@app.get("/device/local/{info}")
async def add_sensor_local(info):
    info=info.split('+')
    post_new_item_local(info)


@app.get("/device/water/{info}")
async def add_sensor_water(info):
    info=info.split('+')
    post_new_item_water(info)





@app.websocket("/ws/local")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
            await websocket.receive_text()
            await websocket.send_text(get_local_temp())


@app.websocket("/ws/water")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
            await websocket.receive_text()
            await websocket.send_text(get_water_temp())



