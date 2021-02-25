# Overview

An app to track exercise metrics over time. Initially for cycling, but potential to expand to other exercise types at a later date.

# Models
## user
id - varchar (255) (hashed email)
email - varchar (255)
name - varchar (255)
password - varchar (255) (hashed)

## session
id - integer (auto increment)
userId - varchar (255) (hashed email)
date - char(8) (yyyymmdd)
distance - float (kk.mm)
time - int (seconds)
weight - int (kg)
route - tinyblob (255)
notes - tinyblob (255)

## logs
id - int (11) (auto increment)
action - varchar (50)
browser - varchar (255)
ip - varchar (20)
timestamp

# routes
## anon access
/         GET 
/login    POST body:{email, password}
/logout   GET
/adduser  POST body:{email, name, password}

## logged in access
/addsession   POST body:{date, distance, time, weight, route, notes}
