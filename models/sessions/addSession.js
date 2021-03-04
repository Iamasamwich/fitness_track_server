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
    
    return;
  };

  return validate()
  .catch(err => {
    throw err;
  })
  .finally(() => {
    conn.end();
  });

}