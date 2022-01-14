FROM python:3.8-slim

EXPOSE 8000
CMD ["python", "manage.py", "makemigrations"]
CMD ["python", "manage.py", "migrate"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

COPY ./requirements.txt ./usr/src


WORKDIR ./usr/src

RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .