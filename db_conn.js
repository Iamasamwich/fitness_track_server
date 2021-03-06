const mysql = require('mysql');

class Conn {
  constructor() {
    this.config = {
      host: process.env.DBPATH,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
      database: process.env.DBNAME,
      port: process.env.DBPORT || 3306,

      dateStrings: 'date'
    };
    this.conn = mysql.createConnection(this.config);
  }

  send(message, payload) {
    return new Promise ((resolve, reject) => {
      this.conn.query(message, payload, (err, res) => {
        if (err) {
          console.error(err);
          return reject({status: '500', message: 'server error code 5'});
        }
        resolve(res);
      });
    });
  };

  end() {
    return new Promise((resolve, reject) => {
      this.conn.destroy(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  };
};

module.exports = Conn;
