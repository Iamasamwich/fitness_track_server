const Conn = require('../../db_conn');
const typing = require('../logic/typing');
const error = require('../logic/error');
const CryptoJS = require('crypto-js');

module.exports = (req) => {
  const conn = new Conn();

  async function validate () {
    if (
      !req.session ||
      !req.session.id ||
      !req.session.loggedIn
    ) throw error(401);

    if (
      !req.body ||
      !req.body.sessionTime ||
      !req.body.distance ||
      !req.body.time ||
      !req.body.weight ||
      !req.body.route ||
      !req.body.notes
    ) throw error (406);

    if (
      !typing(req.body, 'object') ||
      !typing(req.body.sessionTime, 'string') ||
      !typing(req.body.distance, 'number') ||
      !typing(req.body.time, 'number') ||
      !typing(req.body.weight, 'number') ||
      !typing(req.body.route, 'string') ||
      !typing(req.body.notes, 'string')
    ) throw error (406);
    
    if (
      !req.body.sessionTime.match(/^\d{4}-\d{2}-\d{2}\s{1}\d{2}:\d{2}:\d{2}$/)
    ) throw error(406);

    return;
  };

  async function checkUser(id) {
    const m = `
      SELECT * FROM user
      WHERE id = ?;
    `;
    const p = id;
    const resp = await conn.send(m,p);
    if (resp.length === 0) throw error(404);
    return resp[0].id;
  };

  async function addSession(id) {
    const m = `INSERT INTO session SET ?;`;
    const p = {
      userId: id,
      sessionTime: req.body.sessionTime,
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
  .then(() => checkUser(req.session.id))
  .then(id => addSession(id))
  .then(() => ({status: 201, message: 'Session Created'}))
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });

}