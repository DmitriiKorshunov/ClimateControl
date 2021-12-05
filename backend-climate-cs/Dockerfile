FROM tiangolo/uvicorn-gunicorn:python3.9

WORKDIR /backend-climate-cs

COPY ./requirements.txt /backend-climate-cs/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /backend-climate-cs/requirements.txt

#COPY ./main.py /backend-climate-cs/main.py

COPY . /backend-climate-cs/

CMD ["uvicorn", "main:app"]