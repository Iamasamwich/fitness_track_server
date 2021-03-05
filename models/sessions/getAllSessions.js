const Conn = require('../../db_conn');
const error = require('../logic/error');

module.exports = (req) => {
  const conn = new Conn();

  async function validate () {
    if (
      !req.session ||
      !req.session.id ||
      !req.session.loggedIn
    ) throw error(401);
  };

  async function getSessions() {
    const m = `
      SELECT * FROM session
      WHERE userId = ?;
    `;
    const p = req.session.id;
    const resp = await conn.send(m,p);
    if (resp.length === 0) throw error(404);
    const stringedResp = resp.map(session => {
      return {...session, route: session.route.toString(), notes: session.notes.toString()};
    });
    return stringedResp;
  };

  return validate()
  .then(() => getSessions())
  .then(resp => ({status: 200, message: 'Sessions Retrieved', sessions: resp}))
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });
};