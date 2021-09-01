# CYCLE TRACKER APP

## Credits

### Written By:
Sam Humphreys

### Using:
Server: Node, Express, MySQL, Express-Session, Cors, PM2, Bcrypt, Crypto-JS.

Client: React, React-Redux, Redux-Thunk, Semantic UI, Semantic-UI-Calendar-React, Recharts.

## Summary

This app is designed to track fitness progression over time. It was designed with cycling in mind, but could be used for any activity that primarily tracks distance and time, such as running or swimming. 

The app is designed to be used on a mobile phone in profile view. Some styling has been done to make it work on a tablet, and on a desktop it will show a background saying that it should be viewed on mobile.

For the best viewing experience, open the app on your phone and add it to your homescreen. This will allow the app to open giving a mobile app experience without the URL bar popping into view.

Once a user has created an account and/or logged in they will be able to add metrics from their workouts, then view the aggregated data in graph form over time.

The data they input for each session is the session date, the total distance, the session duration, their weight, and any route notes. 

Once at least one session has been input they will be able to view the session data as a graph with the dates on the x-axis, distance on the right y-axis, and either their average speed, session duration, or their weight on the right y-axis.

The app will default to showing the last 30 days worth of sessions, but by clicking "Show All" it will retrieve all of their sessions from the database. If there are no sessions from 30 days it will prompt to add a session or retrieve all of the data, and if there are no sessions to show from all the data it will prompt to add a new session.

## Installation 

Note: This guide is written with linux command lines...

### Prerequisites
You will need to have Node, NPM, and MySQL installed on your computer.

You can check this by running these commands in a terminal

`which node && which npm && which mysql`

If the pathnames come up for each program then you're good to go!

### Local running:
* Create a folder called CycleTracker and change to that directory (you can call it whatever you want...)

`mkdir CycleTracker && cd CycleTracker`

* Clone the server code

Note - you will need to have a Bitbucket account and [ask me](mailto:sam@iamasamwich.com) for access to the code.

`git clone https://[your bitbucket ID]@bitbucket.org/iamasamwich/fitnesstrackerserver.git`

* Once that has finished downloading, change to that directory and install the NPM packages

`cd fitnesstrackerserver && npm install`

* Open MySQL in your terminal, then enter the password when it prompts you.

`mysql -u [your mysql user name] -p`

* Create a database, then exit. Call the database whatever you want, maybe CycleTracker.

mysql> `CREATE DATABASE [Database Name];`

mysql> `exit;`

* Import the empty database to your local MySQL

`mysql -u [your mysql user name] -p [Database Name] < CycleTrackEmpty.sql`

* Modify this line in package.json to use your local settings

`"dev": "DBPATH=localhost DBUSER=[your local MySQL user name] DBPASS=[your local MySQL password] DBNAME=[Database Name] DBPORT=[Your local MySQL port] pm2-runtime start ecosystem.config.js --env development --watch",`

* Now start the development server

`npm run dev`

* Open your browser to http://localhost:3000 to use the app

### Running the client locally (react development)

* Do all of the steps for Local Running above as you'll need the API running.

* Open a new terminal window.

* Go to the CycleTracker folder

* Clone the client from Bitbucket

`git clone https://[your Bitbucket name]@bitbucket.org/iamasamwich/fitnesstrackerclient.git`

* Change to the client folder and install the packages

`cd fitnesstrackerclient && npm install`

* Once that has downloaded the packages you can start the client server. Note, you will need to have the API server running on port 3000, and the client server will prompt you to start on port 3001... say yes!

`npm start`

* Now (hopefully) you can see the client running the server generated client on port 3001 and the built production version on port 3000. They both use the server running on port 3000 as their API.

* When you're done, hit Ctrl+C on each of the servers you started to kill them.

## ToDo

* <s>Prevent "get all session data" from show all if there are no sessions</s>
* Restrict distance input to maxiumum 1000km (currently regexes for 3 numbers, then 0 or 1 decimal, then three numbers, so users can input 999999).
* HTTPS to server - this requires a security certificate which I don't want to pay for ¯\\\_(ツ)\_/¯
* Add Heroku deployment instructions to readme.
* Add an option to the nav bar to look at the loading screen, because I like it :)
* Clicking navbar will clear status


