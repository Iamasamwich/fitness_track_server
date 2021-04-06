const path = require('path');
const userscontroller = require('../controllers').users;


module.exports = (app) => {

  //all users
  app.get('/', userscontroller.ping);
  app.post('/login', userscontroller.login);

  //restricted to logged in

  //catchall
  app.all('*', (req, res) => {
    return res.status(404).sendFile(path.join(__dirname, '../static/404.html'));
  });
};
