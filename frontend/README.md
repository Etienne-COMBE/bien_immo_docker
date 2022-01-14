```
docker build -t my-apache .
docker run -dit -p 8080:80 --name my-web-app my-apache
docker run -dit -p 8080:80 -v ./src:/usr/local/apache2/htdocs -v ./static:/usr/local/apache2/htdocs --name my-web-app my-apache

docker rm -f my-web-app
```

```
docker build -t python-django .\bien_immo_project\
docker run -d -p 8000:8000 --name backend-django python-django
```