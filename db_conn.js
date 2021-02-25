const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "sam",
  password: "root",
  database: "test",
  port: 3306,
});


// to test connection uncomment this block and run "node db_conn.js"
// conn.connect(err => {
//   if (err) throw err;
//   console.log('Connected to SQL database :D');
// });

module.exports = (query, resp) => {
  conn.query(query, (err, results) => {
    if (err) return resp(err);
    return resp(null, results);
  });
};
