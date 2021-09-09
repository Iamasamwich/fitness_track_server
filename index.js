const express = require('express');
const cors = require('cors');
const session = require('express-session');
// const https = require('https');
const http = require('http');
// const fs = require('fs');

const app = express ();
app.use(express.json());

app.use(session({
  secret: process.env.COOKIE,
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: false,
    secure: false,
    maxAge: 1209600000
  }
}));

app.use((req, res, next) => {
  console.log(`Session ID:      ${req.session.id}`);
  console.log(`${req.method} ${req.originalUrl}      IP: ${req.ip}`);
  console.log(`user Id: ${req.session.userId}`);
  next();
});

app.use(express.static('public'));

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const whiteListOrigins = [
  `http://${host}:${port}`,
  `https://${host}:${port}`,
  `${process.env.HOST}:${process.env.PORT}`,
  'http://localhost:3001',  //where my dev app will sit
  'http://localhost:52330', //for opening page from vscode
  'https://192.168.43.5:3000', //opening in phone
  'http://192.168.43.5:3000',
  'http://192.168.43.5:3001', //opening in phone
  'https://cycletrack.herokuapp.com',
  'http://cycletrack.herokuapp.com',
  undefined
];

app.use(cors({
  origin: function (origin, callback) {
    if (whiteListOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Unacceptable origin -----> ', origin);
      callback(new Error('Not acceptable origin: ' + origin));
    }
  },
  credentials: true
}));

require('./routes')(app);

http.createServer(app).listen(port, () => {
  console.log(`listening on ${host}:${port} in ${process.env.NODE_ENV} mode`);
});

// https.createServer({
//   key: fs.readFileSync('fitrack.key'),
//   cert: fs.readFileSync('fitrack.crt')
// }, app)
// .listen(port, () => {
//   console.log(`listening to https://${host}:${port}`);
// });


