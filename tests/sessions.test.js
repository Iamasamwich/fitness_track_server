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

  test('addSession: it fails if there is nothing in the body', () => {
    req.session = {
      id: '123',
      loggedIn: true
    };
    return addSession(req)
    .catch(resp => {
      expect(resp.status).toBe(406);
      expect(resp.message).toBe('Not Acceptable');
    });
  });

  test('addSession: it fails with the wrong data types', () => {
    req.body = {
      sessionTime: 123,
      distance: 'abc',
      time: 'abc',
      weight: 'abc',
      route: true,
      notes: 123,
    };
    return addSession(req)
    .catch(resp => {
      expect(resp.status).toBe(406);
      expect(resp.message).toBe('Not Acceptable');
    });
  });

  test('addSession: it fails with an incorrect date format for sessionTime', () => {
    req.body = {
      sessionTime: '2020',
      distance: 123,
      time: 123,
      weight: 123,
      route: 'abc',
      notes: 'abc'
    };
    return addSession(req)
    .catch(resp => {
      expect(resp.status).toBe(406);
    });
  });

  test('create a user for testing', () => {
    req = {
      session: {},
      body: {
        email: 'addSessionTest@test.com',
        name: 'test',
        pword: 'hello'
      }
    };
    return addUser(req)
    .then(resp => {
      req = resp.req;
    });
  });

  test('addSession: it will 404 with an incorrect userId in session', () => {
    const req2 = {...req, 
      session: {id: '123', loggedIn: true}, 
      body: {
        sessionTime: '2020-03-06 11:15:00',
        distance: 12.25,
        time: 1800,
        weight: 72,
        route: 'JSBL',
        notes: 'No magpies today'
      } 
    };
    return addSession(req2)
    .catch(resp => {
      expect(resp.status).toBe(404);
      expect(resp.message).toBe('Not Found');
    });
  });

  test('addSession: you can create a session from 10 seconds ago', () => {
    req.body = {
      sessionTime: '2020-03-06 11:15:00',
      distance: 12.25,
      time: 1800,
      weight: 72,
      route: 'JSBL',
      notes: 'No magpies today'
    };
    return addSession(req)
    .then(resp => {
      expect(resp.status).toBe(201);
      expect(resp.message).toBe('Session Created');
    });
  });


  test('delete the test user', () => {
    return deleteUser(req.session.id)
    .then(resp => {
      expect(resp).toBe('hello');;
    });
  });



});