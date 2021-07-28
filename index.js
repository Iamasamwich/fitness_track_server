const express = require('express');
const cors = require('cors');
const session = require('express-session');
const https = require('https');
const fs = require('fs');

const app = express ();

// add 1 second delay to show loading screen...
app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 1000);
});

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
  console.log(req.method, req.originalUrl);
  console.log(req.session);
  console.log(req.ip);
  next();
});

const whiteListOrigins = [
  'https://localhost:3000',  //the server,
  'http://localhost:3000', //the server, just http
  'http://localhost:3001',  //where my dev app will sit
  'null', //lets me access from files opened in chrome
  'http://localhost:52330', //for opening page from vscode
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

const port = 3000;

require('./routes')(app);

https.createServer({
  key: fs.readFileSync('fitrack.key'),
  cert: fs.readFileSync('fitrack.crt')
}, app)
.listen(3000, () => {
  console.log('listening on port 3000');
});

