# Designing Video Interfaces

Designing Video Interfaces is a Database includes 42 Interaction Design Patterns that describe common solutions of recurring problems in the design and development of video learning environments. 
In addition more then 100 video learning environments have been described, categorized and examplified by screenshots. Within each video environemnt user interface elements have been analyzed to be an evidence and example for the Interavction Design Patterns. 
Interaction Design Patterns of Video Learning Environments including a comprehensive database of video applications.


# Aims

Currently the patterns as well as the application database is work in progress. It is my aim to combine the patterns in a book.

Beside that the application is going to be an example for a pattern database. Users are supported when selecting patterns and when they want to get some inspiration about how others solved a certain problem.


# Install instructions

## Initial setup

* Clone the code: `git clone https://github.com/nise/designing-video-interfaces`
* Install dependencies: `sudo npm install`
* Restore the database: `mongorestore --db video-patterns ./dump/video-patterns`
* Run the server in test mode `node server` or permanently `forever start -a -l forever.log -o out.log -e err.log server.js`
* See resulting page in the browser: `http://<your-domain>:3000`
* Stop the server: `forever stop server.js`

## Update from git repository

`git fetch --all & git reset --hard origin/master`

## dump and restore mongoDB

mongodb: mongodb://localhost/video-patterns
**dump**
`mongodump --db video-patterns`
**restore**
`mongorestore --db video-patterns ./dump/video-patterns`


