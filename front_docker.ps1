echo "------Front-end Docker container------"
docker rm -f my-web-app
echo "Docker container successfully removed"
docker build -t my-apache .\frontend\
echo "Image successfully built"
docker run -dit -p 8080:80 --name my-web-app my-apache
echo "Docker container successfully created"