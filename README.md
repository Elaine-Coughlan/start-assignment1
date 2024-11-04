## Docker Assignment - Agile Software Practice.

__Name:__ Elaine Coughlan

__Demo:__ (https://youtu.be/HnAJH69Lbbc)

This repository contains the containerization of the mukti-container application illustrated below.

![](./images/arch.png)

### Database Seeding.

Seeding feature implentation, Used help from this site: https://platformengineers.io/blog/seeding-a-mongo-db-database-using-docker-compose/ and stackoverflow but didnt help.
Creating the file seed.js and using the above link as a template and copied the data from the seeding.json. However the data would not show using this way.

A solution I found was to copy the file and using the mongodb interface, add the file to the container.
Adding the data manually through docker exec
root@bc488f811acb:/# mongoimport --db movies --collection entries --file /seeding.json  --jsonArray --authenticationDatabase admin -u admin -p secret


### M.ulti-Stack.

Using lab02 and lab05 as the basis of the docker compose file and the diagram from the assignment page to show me the way the containers could and could not interact with each other.
.env file created and filled with the help of the same lab above, how to reference them in the yaml file was found here: https://stackoverflow.com/questions/29377853/how-can-i-use-environment-variables-in-docker-compose

