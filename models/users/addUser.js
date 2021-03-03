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
      !req.body.password
    ) throw error(406);

    if (
      !typing(req.body.name, 'string') ||
      !typing(req.body.email, 'string') ||
      !typing(req.body.password, 'string')
    ) throw error(406);

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) throw error(406);

    return;
  }

  return validate()
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });
};
