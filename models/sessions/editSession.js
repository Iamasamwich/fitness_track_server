const Conn = require('../../db_conn');
const error = require('../logic/error');
const typing = require('../logic/typing');
const isADate = require('../logic/isADate');

module.exports = (req) => {

  const conn = new Conn();

  async function validate() {
    if (
      !req.session ||
      !req.session.id ||
      !req.session.loggedIn
    ) throw error(401);

    if (
      !req.body ||
      !req.body.id ||
      !req.body.date ||
      !req.body.distance ||
      !req.body.time ||
      !req.body.weight ||
      !req.body.route ||
      !req.body.notes
    ) throw error(406);

    if (
      !typing(req.body.id, 'number') ||
      !typing(req.body.date, 'string') ||
      !typing(req.body.distance, 'number') ||
      !typing(req.body.time, 'number') ||
      !typing(req.body.weight, 'number') ||
      !typing(req.body.route, 'string') ||
      !typing(req.body.notes, 'string')
    ) throw error(406);

    if (
      !req.body.date.match(/^\d{4}-\d{2}-\d{2}$/)
    ) throw error(406);

    if (!isADate(req.body.date)) throw error(406);

    return;
  };

  async function checkSession() {
    const m = `
      SELECT userId FROM session
      WHERE id = ?
    `;
    const p = req.body.id;
    const resp = await conn.send(m,p);
    if (resp.length === 0) throw error(404);
    if (resp.length > 1) throw error(409);
    return resp[0];
  };

  async function checkUser(session) {
    if (session.userId !== req.session.id) throw error(401);
    return;
  }

  async function updateSession() {
    const m = `
      UPDATE session
      SET ?
      WHERE id = ?
    `;
    const p = [
      {
        date: req.body.date,
        distance: req.body.distance,
        time: req.body.time,
        weight: req.body.weight,
        route: req.body.route,
        notes: req.body.notes
      },
      req.body.id
    ];
    const resp = await conn.send(m,p);
    return;
  }


  return validate()
  .then(() => checkSession())
  .then(session => checkUser(session))
  .then(() => updateSession())
  .then(() => ({status: 201, message: 'Session Updated'}))
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });
}