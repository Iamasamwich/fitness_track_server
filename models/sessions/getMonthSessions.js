const Conn = require('../../db_conn');
const error = require('../logic/error');
const makeDate = require('../logic/makeDate');

module.exports = (req) => {
  const conn = new Conn();
  
  async function validate () {
    if (
      !req.session ||
      !req.session.userId ||
      !req.session.loggedIn
    ) throw error(401);
  };

  async function getSessions(date) {
    const m = `
      SELECT * FROM session
      WHERE userId = ?
      AND
      TIMESTAMPDIFF(day, date, ?) < 30
      ORDER BY session.date;
    `;
    const p = [req.session.userId, date];
    const resp = await conn.send(m,p);
    if (resp.length === 0) throw error(404);
    const stringedResp = resp.map(session => {
      delete session.userId;
      return {...session, route: session.route.toString(), notes: session.notes.toString()}
    });
    return stringedResp;
  };

  async function addSpeed(sessions) {
    console.log(sessions);
    const sessionsWithSpeed = sessions.map(session => {
      const kmph = session.distance / (session.time / 3600);
      const speed = Math.round((kmph + Number.EPSILON) * 100) / 100;
      return {...session, speed}
    });
    return sessionsWithSpeed;
  }

  return validate()
  .then(() => makeDate(0))
  .then(nowDate => getSessions(nowDate))
  .then(sessions => addSpeed(sessions))
  .then(resp => ({status: 200, message: 'Sessions Retrieved', sessions: resp}))
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  })
}