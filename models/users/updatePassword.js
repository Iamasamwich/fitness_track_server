const Conn = require('../../db_conn');
const error = require('../logic/error');
const bcrypt = require('bcrypt');

module.exports = (req) => {
  const conn = new Conn();

  async function validate () {
    if (
      !req.session ||
      !req.session.userId ||
      !req.session.loggedIn
    ) throw error (401);
    if (
      !req.body ||
      !req.body.pword ||
      !req.body.newPword
    ) throw error(406);
    return;
  };

  async function getUser () {
    const m = `
      SELECT * FROM user
      WHERE id = ?;
    `;
    const p = req.session.userId;
    const resp = conn.send(m, p);
    if (resp.length === 0) throw error(404);
    return resp[0];
  };

  async function updatePassword () {
    const pwHash = bcrypt.hashSync(req.body.newPword, 10, (err, pwHash) => {
      return pwHash;
    });
    const m = `
      UPDATE user
      SET ?
      WHERE id = ?;
    `;
    const p = [
      {
        pword: pwHash,
      },
      req.session.userId
    ];
    return conn.send(m, p);
  };

  return validate()
  .then(() => getUser())
  .then(resp => updatePassword(resp))
  .then(() => ({status: 201, message: 'Password Updated'}))
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });
};