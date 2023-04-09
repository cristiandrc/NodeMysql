Server node with mysql

## Run docker container

`docker-compose up -d name_service`

example `docker-compose up -d mysql-development`

--detach , -d Run container in background and print container ID

Look at which container are running with next command

`docker-compose ps`

To connect to the container, we use the next command

`docker-compose exec name_service bash`

example `docker-compose exec mysql-development bash`

To connect to mysql, we use the command

`mysql -u user_bd -ppassworddb`

example `mysql -u root -ptoor`
