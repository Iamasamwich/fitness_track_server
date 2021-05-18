const addUser = require('../models/users/addUser');
const deleteUser = require('../models/users/deleteUser');
const login = require('../models/users/login');
const logout = require('../models/users/logout');

const makeDate = require('../models/logic/makeDate');

const addSession = require('../models/sessions/addSession');
const getMonthSessions = require('../models/sessions/getMonthSessions');
const getAllSessions = require('../models/sessions/getAllSessions');
const editSession = require('../models/sessions/editSession');

let req = {
  session: {},
  body: {}
};

let sessionToEdit;

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
      userId: '123',
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
      date: 123,
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
      date: '2020',
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
      session: {userId: '123', loggedIn: true}, 
      body: {
        date: '2020-03-06',
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

  test('getMonthSessions: it will 404 if there are no sessions', () => {
    return getMonthSessions(req)
    .catch(resp => {
      expect(resp.status).toBe(404);
    });
  });

  test('getAllSessions: it will 404 if there are no sessions', () => {
    return getAllSessions(req)
    .catch(resp => {
      expect(resp.status).toBe(404);
    });
  });

  test('addSession: you can create a session from now', () => {
    req.body = {
      date: makeDate(0),
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

  test('addSession: create a session from 2 days ago', () => {
    req.body.date = makeDate(2);
    return addSession(req)
    .then(resp => {
      expect(resp.status).toBe(201);
    });
  });

  test('addSession: create session from 45 days ago', () => {
    req.body.date = makeDate(45);
    return addSession(req)
    .then(resp => {
      expect(resp.status).toBe(201);
    });
  });

  test('getMonthSessions: it fails with no req.session', () => {
    const req2 = {
      session: {}
    };
    return getMonthSessions(req2)
    .catch(resp => {
      expect(resp.status).toBe(401);
    });
  });

  test('getMonthSessions: it gets the sessions in the last 30 days', () => {
    delete req.body;
    return getMonthSessions(req)
    .then(resp => {
      sessionToEdit = resp.sessions[1];
      expect(resp.status).toBe(200);
      expect(resp.message).toBe('Sessions Retrieved');
      expect(resp.sessions.length).toBe(2);
    });
  });

  test('getAllSessions: 401 if no req.session data', () => {
    const req2 = {
      session: {}
    };
    return getAllSessions(req2)
    .catch(resp => {
      expect(resp.status).toBe(401);
    });
  });

  test('getAllSessions: it gets all the sessions for the user', () => {
    return getAllSessions(req)
    .then(resp => {
      expect(resp.status).toBe(200);
      expect(resp.message).toBe('Sessions Retrieved');
      expect(resp.sessions.length).toBe(3);
    });
  });

  test('editSession: it lets you edit a session', () => {
    req = {...req, body: sessionToEdit};
    req.body.date = makeDate(365);
    req.body.distance = 300,
    req.body.time = 500000,
    req.body.weight = 75,
    req.body.route = "To the moon and back";
    req.body.notes = "not a lot of air up there..."
    
    return editSession(req)
    .then(resp => {
      expect(resp.status).toBe(201);
      expect(resp.message).toBe('Session Updated');
    });
  });

  test('getMonthSessions: should now only have 1 result', () => {
    delete req.body;
    return getMonthSessions(req)
    .then(resp => {
      expect(resp.status).toBe(200);
      expect(resp.sessions.length).toBe(1);
    });
  });

  test('getAllSessions: should still have 3 in it', () => {
    return getAllSessions(req)
    .then(resp => {
      expect(resp.status).toBe(200);
      expect(resp.sessions.length).toBe(3);
    });
  });

  test('getAllSessions: the sessions are retrieved in date order', () => {
    return getAllSessions(req)
    .then(resp => {
      expect(resp.status).toBe(200);
      expect(resp.sessions[2].date > resp.sessions[1].date).toBe(true);
      expect(resp.sessions[1].date > resp.sessions[0].date).toBe(true);
    });
  });

  test('createSession: it converts stringed numbers to numbers', () => {
    req.body = {
      date: makeDate(0),
      distance: '12.25',
      time: '1800',
      weight: '72',
      route: 'JSBL',
      notes: 'No magpies today'
    };
    return addSession(req)
    .then(resp => {
      expect(resp.status).toBe(201);
    });
  });


  test('delete the test user', () => {
    return deleteUser(req.session.userId)
    .then(resp => {
      expect(resp).toBe('hello');;
    });
  });
});