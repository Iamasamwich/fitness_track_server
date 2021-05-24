const addSession = require('../models/sessions/addSession');
const getMonthSessions = require('../models/sessions/getMonthSessions');
const getAllSessions = require('../models/sessions/getAllSessions');

module.exports = {
  create(req, res) {
    addSession(req)
    .then(resp => res.status(resp.status).json({
        status: resp.status,
        message: resp.message
    }))
    .catch(err => res.status(err.status).json({
      status: err.status,
      message: err.message
    }));
  },

  getMonthSessions(req, res) {
    getMonthSessions(req)
    .then(resp => res.status(resp.status).json({
      status: resp.status,
      message: resp.message,
      sessions: resp.sessions
    }))
    .catch(err => res.status(err.status).json({
      status: err.status,
      message: err.message
    }));
  },

  getAllSessions(req, res) {
    getAllSessions(req)
    .then(resp => res.status(resp.status).json({
      status: resp.status,
      message: resp.message,
      sessions: resp.sessions
    }))
    .catch(err => res.status(err.status).json({
      status: err.status,
      message: err.message
    }));
  }
};