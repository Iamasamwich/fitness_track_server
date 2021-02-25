const express = require('express');
const cors = require('cors');
const session = require('express-session');
const https = require('https');
const fs = require('fs');
const db_conn = require('./db_conn');

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
  console.log(req.session);
  console.log(req.ip);
  next();
});

const whiteListOrigins = [
  'http://localhost:3000',  //where my dev app will sit
  'http://localhost:3001',
  'http://localhost:3002',
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
      callback(new Error('Not acceptable origin'));
    }
  },
  credentials: true
}));

const port = 3000;

require('./routes')(app);

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, () => {
  console.log('listening on port 3000');
});
