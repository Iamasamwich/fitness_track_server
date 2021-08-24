const express = require('express');
const cors = require('cors');
const session = require('express-session');
const https = require('https');
const fs = require('fs');
require('dotenv').config();

const app = express ();

app.use(express.json());

app.use(session({
  secret: 'blue skies, smiling at meee',
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: 'none',
    secure: true,
    maxAge: 1209600000
  }
}));

app.use((req, res, next) => {
  console.log('method', req.method, 'url', req.originalUrl, 'ip', req.ip);
  next();
});

const whiteListOrigins = [
  `${process.env.HOST}:${process.env.PORT}`,
  'https://localhost:3000',  //the server,
  'http://localhost:3000', //the server, just http,
  'http://localhost:3001',  //where my dev app will sit
  'null', //lets me access from files opened in chrome
  'http://localhost:52330', //for opening page from vscode
  'https://192.168.43.5:3000', //opening in phone
  'http://192.168.43.5:3001', //opening in phone
  null,
  undefined
];

app.use(cors({
  origin: function (origin, callback) {
    if (whiteListOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not acceptable origin: ' + origin));
    }
  },
  credentials: true
}));

app.use(express.static('public'));

require('./routes')(app);

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

https.createServer({
  key: fs.readFileSync('fitrack.key'),
  cert: fs.readFileSync('fitrack.crt')
}, app)
.listen(port, () => {
  console.log(`listening to ${host}:${port}`);
});


