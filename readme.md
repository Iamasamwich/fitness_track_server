# Overview

An app to track exercise metrics over time. Initially for cycling, but potential to expand to other exercise types at a later date.

# Models
## user
id - varchar (255) (hashed email) PK
email - varchar (255)
name - varchar (255)
pword - varchar (255) (hashed)

## session
id - integer (auto increment) PK
userId - varchar (255) (hashed email) FK
sessionTime - DATETIME
distance - float (kk.mm)
time - int (seconds)
weight - int (kg)
route - tinyblob (255)
notes - tinyblob (255)

## logs
id - int (11) (auto increment) PK
action - varchar (50)
browser - varchar (255)
ip - varchar (20)
timestamp


