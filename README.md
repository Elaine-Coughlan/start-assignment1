## Agile Software Practice - Assignment 1.

Used Lab05 and Demo app one to create the yaml file
Seperations of network used from lab02, for isolation of the containers.

.env file created and filled with the help of the same lab above, how to reference them in the yaml file was found here: https://stackoverflow.com/questions/29377853/how-can-i-use-environment-variables-in-docker-compose

"Test and changes, command canceled after too long with no results" : 
For the above commit line, I tried running the command but kept getting errors because of spelling mistakes or format errors. After 4 or 5 times the next time the command ran nothing happened, no error and nothing created. VS_Code than crashed. My laptop sounded like a jet engine at the time.

"Working command": 
2024-10-29 18:34:32 mongo-express-1  | /docker-entrypoint.sh: line 15: /dev/tcp/mongo/27017: Invalid argument
This the error found in the logs after the command showed the network and containers had been created and started, (After a soft reboot, the jet engine noise stopped too). Typo was fixed.



