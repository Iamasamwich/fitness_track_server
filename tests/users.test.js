const addUser = require('../models/users/addUser');
const login = require('../models/users/login');

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

  test('addUser: it stops incorrect types', () => {
    req.body = {
      email: 123,
      name: 123,
      pword: 123
    };
    return addUser(req)
    .catch(resp => {
      expect(resp.status).toBe(406);
      expect(resp.message).toBe('Not Acceptable');
    });
  });

  test('addUser: it stops an invalid email', () => {
    req.body = {
      email: 'helloatemail.com',
      name: 'wrong email format',
      pword: 'wrong email format'
    };
    return addUser(req)
    .catch(resp => {
      expect(resp.status).toBe(406);
      expect(resp.message).toBe('Not Acceptable');
    });
  });
  
  test('addUser: it lets you add a user', () => {
    req.body = {
      email: 'testAddUser@test.com',
      name: 'Added User',
      pword: 'password',
    };
    return addUser(req)
    .then(resp => {
      expect(resp.status).toBe(201);
      expect(resp.message).toBe('User Added');
    });
  });
  
  test('addUser: it stops duplicating a user (based on email)', () => {
    return addUser(req)
    .catch(resp => {
      expect(resp.status).toBe(409);
      expect(resp.message).toBe('Conflict');
    });
  });

  test('login: login fails with missing fields', () => {
    req = {
      session: {},
      body: {}
    };
    return login(req)
    .catch(resp => {
      expect(resp.status).toBe(406);
      expect(resp.message).toBe('Not Acceptable');
    });
  });

  test('login: it fails if email is not in DB', () => {
    req.body = {
      email: 'non-existant@email.com',
      pword: 'password'
    };
    return login(req)
    .catch(resp => {
      expect(resp.status).toBe(401);
      expect(resp.message).toBe('Not Authorised');
    });
  });

  test('login: it fails with incorrect password', () => {
    req.body = {
      email: 'testAddUser@test.com',
      pword: 'wrongpassword'
    };
    return login(req)
    .catch(resp => {
      expect(resp.status).toBe(401);
      expect(resp.message).toBe('Not Authorised');
      expect(resp.payload.session.loggedIn).toBe(undefined);
    });
  });

  test('login: it lets you log in', () => {
    req.body = {
      email: 'testAddUser@test.com',
      pword: 'password'
    };
    return login(req)
    .then(resp => {
      expect(resp.status).toBe(202);
      expect(resp.message).toBe('Logged In');
      expect(resp.req.session.loggedIn).toBe(true);
      expect(resp.req.session.id).toBe('2ac346373b180a119095ee01a0e14228');
    });
  });
});