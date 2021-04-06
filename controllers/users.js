const login = require('../models/users/login');

module.exports = {
  ping(req, res) {
    if (  !req.session.id ||
          !req.session.loggedIn) {
            return res.status(200).json({status: 200, message: 'unknown'});
          }
    return res.status(200).json({status: 200, message: 'ok'});
  },
  login(req, res) {
    console.log('aaaaa');
    console.log(req.session.id);
    login(req)
    .then(resp => {
      console.log('xxxxxxxxxxxxxxxxxxxxx');
      console.log(req.session.id);
      console.log('yyyyyyyyyyyyyyyy');
      console.log(req.session);
      res.status(resp.status).json({
      status: resp.status,
      message: resp.message
    })})
    .catch(err => res.status(err.status).json({
      status: err.status,
      message: err.message
    }))
  }
};