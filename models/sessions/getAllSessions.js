const Conn = require('../../db_conn');
const error = require('../logic/error');
const addSpeedToSessions = require('../logic/addSpeedToSessions');

module.exports = (req) => {
  const conn = new Conn();

  async function validate () {
    if (
      !req.session ||
      !req.session.userId ||
      !req.session.loggedIn
    ) throw error(401);
  };

  async function getSessions() {
    const m = `
      SELECT * FROM session
      WHERE userId = ?
      ORDER BY session.date;
    `;
    const p = req.session.userId;
    const resp = await conn.send(m,p);
    if (resp.length === 0) throw error(404);
    const stringedResp = resp.map(session => {
      delete session.userId;
      return {...session, route: session.route.toString()};
    });
    return stringedResp;
  };

  return validate()
  .then(() => getSessions())
  .then(addSpeedToSessions)
  .then(resp => ({status: 200, message: 'Sessions Retrieved', sessions: resp}))
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });
};