const path = require('path');
const userscontroller = require('../controllers').users;
const sessionscontroller = require('../controllers').sessions;


module.exports = (app) => {

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
    console.log('*****RETURNING 404*****');
    return res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
  });
};
