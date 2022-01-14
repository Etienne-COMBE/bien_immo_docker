# Container creation

## Create `Dockerfile` 

Loading the official base image.\
Use `python:3.8` for example.

```
FROM <image_name>
```

Load all required dependencies from the app once and will be cached for further use.

```
COPY requirement.txt .
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt
```

Copy the rest of the code within the container

```
COPY . .
```

Run a specific command at the initialisation of the container

```
CMD ["python", "src/main.py"]
```

## Creating image and container with `docker` CLI

After configuring a `.dockerignore` file, we can start to build and run the container and image.

Build the image:
```
docker build -t <image name> .
```
Run the container:
```
docker run -d <image id>
```
See the console result:
```
docker logs <container id>
```
