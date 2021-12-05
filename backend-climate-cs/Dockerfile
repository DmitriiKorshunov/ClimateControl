FROM python:3.9

WORKDIR /backend-climate-cs

COPY ./requirements.txt /backend-climate-cs/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /backend-climate-cs/requirements.txt

COPY ./main.py /backend-climate-cs/main.py

CMD ["uvicorn", "app.main:app"]