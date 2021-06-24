const path = require('path');
const userscontroller = require('../controllers').users;
const sessionscontroller = require('../controllers').sessions;


module.exports = (app) => {

  // //static files
  // app.get('/', (req, res) => {
  //   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  // });
  // app.get('/static/css/main.84a29e74.chunk.css', (req, res) => {
  //   return res.status(200).sendFile(path.join(__dirname, '../static/css/main.84a29e74.chunk.css'));
  // });
  // app.get('/static/css/2.d97c81c1.chunk.css', (req, res) => {
  //   return res.status(200).sendFile(path.join(__dirname, '../static/css/2.d97c81c1.chunk.css'));
  // });
  // app.get('/static/js/2.d2085e93.chunk.js', (req, res) => {
  //   return res.status(200).sendFile(path.join(__dirname, '../static/js/2.d2085e93.chunk.js'));
  // });
  // app.get('/static/js/main.1b4cf992.chunk.js', (req, res) => {
  //   return res.status(200).sendFile(path.join(__dirname, '../static/js/main.1b4cf992.chunk.js'));
  // });


  //all users
  app.get('/ping', userscontroller.ping);
  app.post('/logout', userscontroller.logout);
  app.post('/login', userscontroller.login);
  app.post('/signup', userscontroller.signup);

  //restricted to logged in
  app.post('/createsession', sessionscontroller.create);
  app.get('/getmonthsessions', sessionscontroller.getMonthSessions);
  app.get('/getallsessions', sessionscontroller.getAllSessions);

  //catchall
  app.all('*', (req, res) => {
    return res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
  });
};
