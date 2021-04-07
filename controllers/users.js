const login = require('../models/users/login');
const addUser = require('../models/users/addUser');

module.exports = {
  ping(req, res) {
    if (  !req.session.userId ||
          !req.session.loggedIn) {
            return res.status(200).json({status: 200, message: 'unknown'});
          }
    return res.status(200).json({status: 200, message: 'ok'});
  },
  login(req, res) {
    login(req)
    .then(resp => {
      return res.status(resp.status).json({
        status: resp.status,
        message: resp.message
      })
    })
    .catch(err => res.status(err.status).json({
      status: err.status,
      message: err.message
    }));
  },
  signup(req, res) {
    addUser(req)
    .then(resp => {
      return res.status(resp.status).json({
        status: resp.status,
        message: resp.message
      })
    })
    .catch(err => res.status(err.status).json({
      status: err.status,
      message: err.message
    }));
  }
};