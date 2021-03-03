const addUser = require('../models/users/addUser');

let req = {
      session: {},
      body: {}
    };

describe('/models/addUser', () => {
  test('addUser: it stops if there are blank fields', () => {
    return addUser(req)
    .catch(resp => {
      expect(resp.status).toBe(406);
      expect(resp.message).toBe('Not Acceptable');
    });
  });
});