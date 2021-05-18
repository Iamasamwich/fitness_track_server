const Conn = require('../../db_conn');
const typing = require('../logic/typing');
const error = require('../logic/error');
const isADate = require('../logic/isADate');
const CryptoJS = require('crypto-js');

module.exports = (req) => {
  const conn = new Conn();

  async function validate () {
    if (
      !req.session ||
      !req.session.userId ||
      !req.session.loggedIn
    ) throw error(401);

    if (
      !req.body ||
      !req.body.date ||
      !req.body.distance ||
      !req.body.time ||
      !req.body.weight ||
      !req.body.route ||
      !req.body.notes
    ) throw error (406);

    if (!isNaN(req.body.distance) && !isNaN(req.body.time) && !isNaN(req.body.weight)) {
      req.body.distance = Number(req.body.distance);
      req.body.time = Number(req.body.time);
      req.body.weight = Number(req.body.weight);
    } else {
      throw error(406);
    };

    if (
      !typing(req.body, 'object') ||
      !typing(req.body.date, 'string') ||
      !typing(req.body.distance, 'number') ||
      !typing(req.body.time, 'number') ||
      !typing(req.body.weight, 'number') ||
      !typing(req.body.route, 'string') ||
      !typing(req.body.notes, 'string')
    ) throw error (406);
    
    if (
      !req.body.date.match(/^\d{4}-\d{2}-\d{2}$/)
    ) throw error(406);

    if (!isADate(req.body.date)) throw error(406);

    return;
  };

  async function checkUser(userId) {
    const m = `
      SELECT * FROM user
      WHERE id = ?;
    `;
    const p = userId;
    const resp = await conn.send(m,p);
    if (resp.length === 0) throw error(404);
    return resp[0].id;
  };

  async function addSession(userId) {
    const m = `INSERT INTO session SET ?;`;
    const p = {
      userId,
      date: req.body.date,
      distance: req.body.distance,
      time: req.body.time,
      weight: req.body.weight,
      route: req.body.route,
      notes: req.body.notes
    };
    const resp = await conn.send(m,p);
    return;
  }

  return validate()
  .then(() => checkUser(req.session.userId))
  .then(userId => addSession(userId))
  .then(() => ({status: 201, message: 'Session Created'}))
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });

}