const Conn = require ('../../db_conn');
const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
const error = require('../logic/error');
const typing = require('../logic/typing');

module.exports = (req) => {

  const conn = new Conn();

  async function validate () {
    if (
      !req.body ||
      !req.body.email ||
      !req.body.name ||
      !req.body.pword
    ) throw error(406);

    if (
      !typing(req.body.name, 'string') ||
      !typing(req.body.email, 'string') ||
      !typing(req.body.pword, 'string')
    ) throw error(406);
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) throw error(406);
    
    return;
  }

  async function findExisting () {
    const id = CryptoJS.MD5(req.body.email).toString();
    const m = `
      SELECT * FROM user
      WHERE id = ?;
    `;
    const p = id;
    const resp = await conn.send(m,p);
    if (resp.length !== 0) throw error(409);
    return id;
  }

  async function addUser(id) {
    const m = `INSERT INTO user SET ?`;
    const p = {
      id,
      email: req.body.email,
      name: req.body.name,
      pword: bcrypt.hashSync(req.body.pword, 10, (err, pwHash) => {
        return pwHash;
      })
    };
    const resp = await conn.send(m, p);
    req.session.userId = id;
    req.session.loggedIn = true;
    return;
  }

  return validate()
  .then(() => findExisting())
  .then(id => addUser(id))
  .then(() => ({status: 201, message: 'User Added', req}))
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });
};
