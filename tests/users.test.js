const addUser = require('../models/users/addUser');
const login = require('../models/users/login');
const logout = require('../models/users/logout');
const updatePassword = require('../models/users/updatePassword');
const deleteUser = require('../models/users/deleteUser');
let id;

let req = {
      session: {},
      body: {}
    };


describe('User functions...', () => {
  test('logout: it lets you log out', () => {
    req.session = {
      userId: 123,
      loggedIn: true
    };
    return logout(req)
    .then(resp => {
      expect(Object.keys(resp.req.session).length).toBe(0);
    });
  });

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
      pword: 123,
      tandc: 123
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
      pword: 'wrong email format',
      tandc: '1.0'
    };
    return addUser(req)
    .catch(resp => {
      expect(resp.status).toBe(406);
      expect(resp.message).toBe('Not Acceptable');
    });
  });

  test('addUser: it works with a suffix on the email', () => {
    req.body = {
      email: 'testAddUser@test.com.au',
      name: 'Added User',
      pword: 'password',
      tandc: '1.0'
    };
    return logout(req)
    .then(() => addUser(req))
    .then(resp => {
      expect(resp.status).toBe(201)
      expect(resp.message).toBe('User Added');
      return resp.req.session.userId;
    })
    .then(id => deleteUser(id))
  });
  
  test('addUser: it lets you add a user', () => {
    req.body = {
      email: 'testAddUser@test.com',
      name: 'Added User',
      pword: 'password',
      tandc: '1.0'
    };
    return logout(req)
    .then(() => addUser(req))
    .then(resp => {
      id = resp.req.session.userId;
      expect(resp.status).toBe(201);
      expect(resp.message).toBe('User Added');
      expect(resp.req.session.userId).toBeTruthy();
      expect(resp.req.session.loggedIn).toBe(true);
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
      req = resp.req;
      expect(resp.status).toBe(202);
      expect(resp.message).toBe('Logged In');
      expect(resp.req.session.loggedIn).toBe(true);
      expect(resp.req.session.userId).toBe(id);
    });
  });

  test('updatePassword: it fails with no session', () => {
    req2 = {
      session: {},
      body: {}
    };
    return updatePassword(req2)
    .catch(resp => {
      expect(resp.status).toBe(401);
      expect(resp.message).toBe('Not Authorised');
    })
  });

  test('updatePassword: it wont work with missing fields', () => {
    req2.session = {
      loggedIn: true,
      userId: '123'
    };
    return updatePassword(req2)
    .catch(resp => {
      expect(resp.status).toBe(406);
      expect(resp.message).toBe('Not Acceptable');
    });
  });

  test('updatePassword: it wont work with an incorrect id', () => {
    req2.body = {
      pword: 'doesntmatter',
      newPword: 'still doesnt matter'
    }
    return updatePassword(req2)
    .catch(resp => {
      expect(resp.status).toBe(404);
      expect(resp.message).toBe('Not Found');
    });
  });

  test('updatePassword: it wont work with an incorrect password', () => {
    req2 = {...req};
    req2.body = {
      pword: 'wrongPassword',
      newPword: 'doesnt matter'
    };
    return updatePassword(req2)
    .catch(resp => {
      expect(resp.status)
    })
  });

  test('updatePassword: it updates the password', () => {
    req.body = {
      pword: 'password',
      newPword: 'newPassword'
    };
    return updatePassword(req)
    .then(resp => {
      expect(resp.status).toBe(201);
      expect(resp.message).toBe('Password Updated');
    });
  });

  test('login: it lets you log in with the new password', () => {
    return logout(req)
    .then(resp => {
      req = resp.req;
      req.body = {
        email: 'testAddUser@test.com',
        pword: 'newPassword'
      }
    })
    .then(() => login(req))
    .then(resp => {
      expect(resp.status).toBe(202);
      expect(resp.message).toBe('Logged In');
      expect(resp.req.session.loggedIn).toBe(true);
      expect(resp.req.session.userId).toBe(id);
    });
  });

  test('deleteUser: it deletes the test user', () => {
    return deleteUser(id)
    .then(resp => {
      expect(resp).toBe('hello');
    });
  });
});