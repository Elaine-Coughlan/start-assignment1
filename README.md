## Agile Software Practice - Assignment 1.

Used Lab05 and Demo app one to create the yaml file
Seperations of network used from lab02, for isolation of the containers.

.env file created and filled with the help of the same lab above, how to reference them in the yaml file was found here: https://stackoverflow.com/questions/29377853/how-can-i-use-environment-variables-in-docker-compose

"Test and changes, command canceled after too long with no results" : 
For the above commit line, I tried running the command but kept getting errors because of spelling mistakes or format errors. After 4 or 5 times the next time the command ran nothing happened, no error and nothing created. VS_Code than crashed. My laptop sounded like a jet engine at the time.

"Working command": 
2024-10-29 18:34:32 mongo-express-1  | /docker-entrypoint.sh: line 15: /dev/tcp/mongo/27017: Invalid argument
This the error found in the logs after the command showed the network and containers had been created and started, (After a soft reboot, the jet engine noise stopped too). Typo was fixed.

Seeding feature implentation, Used help from this site: https://platformengineers.io/blog/seeding-a-mongo-db-database-using-docker-compose/ and stackoverflow but didnt help.
Tried to add a seed.js file to initialise the data but failed.

//Adding the data manually through docker exec
root@bc488f811acb:/# mongoimport --db movies --collection entries --file /seeding.json  --jsonArray --authenticationDatabase admin -u admin -p secret
Doing it this did add the data to the databse.

Localhost:9000 showing connected message with ping messages. Tried but this is the only working result. Rest of the time the container exit. The logs for the container while running are empty.

/movies shows empty json result. express shows entries so could be database name set up or endpoints

After rewatching agile lecture recording changed this command to 
root@bc488f811acb:/# mongoimport --db tmdb_movies --collection movies --file /seeding.json  --jsonArray --authenticationDatabase admin -u admin -p secret

Now the /movies shows data from the database 
