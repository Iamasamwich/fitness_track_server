const bcrypt = require('bcrypt');
const Conn = require('../../db_conn');
const error = require('../logic/error');

module.exports = (req) => {
  const conn = new Conn();

  async function validate () {
    if (
      !req.body ||
      !req.body.email ||
      !req.body.pword
    ) throw error(406);
  }

  async function checkExisting () {
    const m = `
      SELECT * FROM user
      WHERE email = ?;
    `;
    const p = req.body.email;
    const resp = await conn.send(m, p);
    delete req.session.id;
    delete req.session.loggedIn;
    if (resp.length === 0) throw error(401);
    if (resp.length > 1) throw error(409);
    return resp[0];
  }

  async function checkPassword (user) {
    const result = bcrypt.compareSync(req.body.pword, user.pword, (err, result) => {
      return result;
    });
    if (!result) {
      delete req.session.loggedIn;
      delete req.session.id;
      throw error(401, req);
    };
    req.session.userId = user.id;
    req.session.loggedIn = true;
    return;
  }
  
  return validate()
  .then(() => checkExisting())
  .then(user => checkPassword(user))
  .then(() => ({status: 202, message: 'Logged In', req}))
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });
};