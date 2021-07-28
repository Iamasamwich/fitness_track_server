const addSession = require('../models/sessions/addSession');
const getMonthSessions = require('../models/sessions/getMonthSessions');
const getAllSessions = require('../models/sessions/getAllSessions');

module.exports = {
  create(req, res) {
    req.body.time = ((Number(req.body.hours) * 3600) + (Number(req.body.mins) * 60) + Number(req.body.secs));
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
    .then(resp => {
      const newResp = {...resp};
      newResp.sessions = newResp.sessions.map((session, i) => {
        session.index = i;
        delete session.id;
        return session;
      });
      return newResp;
    })
    // .then(resp => res.status(404).json({message: 'hello'}))
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
    .then(resp => {
      const newResp = {...resp};
      newResp.sessions = newResp.sessions.map((session, i) => {
        session.index = i;
        delete session.id;
        return session;
      });
      return newResp;
    })
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