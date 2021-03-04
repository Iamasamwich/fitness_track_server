const Conn = require('../../db_conn');

module.exports = (id) => {
  const conn = new Conn();

  async function deleteUser() {
    const m = `
      DELETE FROM user
      WHERE id = ?;
    `;
    const p = id;
    const resp = await conn.send(m, p);
    return;
  }

  deleteUser()
  .then(() => "hello")
  .finally(() => {
    conn.end();
  });
}