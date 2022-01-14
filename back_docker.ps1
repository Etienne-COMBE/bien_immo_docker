echo "------Back-end Docker container------"
docker rm -f backend-django
echo "Docker container successfully removed"
docker build -t python-django .\bien_immo_project\
echo "Image successfully built"
docker run -d -p 8000:8000 --name backend-django python-django
echo "Docker container successfully created"