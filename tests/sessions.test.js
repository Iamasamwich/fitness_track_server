const addUser = require('../models/users/addUser');
const deleteUser = require('../models/users/deleteUser');
const login = require('../models/users/login');
const logout = require('../models/users/logout');

const addSession = require('../models/sessions/addSession');

let req = {
  session: {},
  body: {}
};

describe('Session functions...', () => {
  test('addSession: it fails with no session', () => {
    return addSession(req)
    .catch(resp => {
      expect(resp.status).toBe(401);
      expect(resp.message).toBe('Not Authorised');
    });
  });


});