# CYCLE TRACKER APP

## Credits

### Written By:
Sam Humphreys

### Using:
Server: Express, MySQL, Express-Session, Cors, PM2.Create React App, Redux, Bcrypt, Crypto-JS.

Client: React, React-Redux, Redux-Thunk, Semantic UI, Semantic-UI-Calendar-React, Recharts.

## Summary

This app is designed to track fitness progression over time. It was designed with cycling in mind, but could be used for any activity that primarily tracks distance and time, such as running or swimming. 

The app is designed to be used on a mobile phone in profile view. Some styling has been done to make it work on a tablet, and on a desktop it will show a background saying that it should be viewed on mobile.

Once a user has created an account and/or logged in they will be able to add metrics from their workouts, then view the aggregated data in graph form over time.

The data they input for each session is the session date, the total distance, the session duration, their weight, and any route notes. 

Once at least one session has been input they will be able to view the session data as a graph with the dates on the x-axis, distance on the right y-axis, and either their average speed, session duration, or their weight on the right y-axis.

The app will default to showing the last 30 days worth of sessions, but by clicking "Show All" it will retrieve all of their sessions from the database. If there are no sessions from 30 days it will prompt to add a session or retrieve all of the data, and if there are no sessions to show from all the data it will prompt to add a new session.

## Installation 

Note: This guide is written with linux command lines...

### Prerequisites
You will need to have Node, NPM, and MySQL installed on your computer.

### Local running:
* Create a folder called CycleTracker and change to that directory (you can call it whatever you want...)

`mkdir CycleTracker && cd CycleTracker`

* Clone the server code

Note - you will need to have a Bitbucket account and [ask me](mailto:sam@iamasamwich.com) for access to the code.

`git clone https://[your bitbucket ID]@bitbucket.org/iamasamwich/fitnesstrackerserver.git`



## ToDo

* Prevent "get all session data" from show all if there are no sessions
* Restrict distance input to maxiumum 1000km (currently regexes for 3 numbers, then 0 or 1 decimal, then three numbers, so users can input 999999).
* HTTPS to server - this requires a security certificate which I don't want to pay for ¯\\\_(ツ)\_/¯
