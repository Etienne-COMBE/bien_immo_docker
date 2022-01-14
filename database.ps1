echo "------Postgres Docker container------"
docker rm -f postgres-db
echo "Docker container successfully removed"
docker run -p 5432:5432 --name postgres-db -e POSTGRES_PASSWORD=tutu -e POSTGRES_USER=postgres -e POSTGRES_DB=data_immo -d postgres:14
echo "Docker container successfully created"
$docker_ip = docker inspect -f "{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}" postgres-db
echo "Container IP : $docker_ip"