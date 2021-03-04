const error = require('../models/logic/error');

describe('/models/logic/error.js', () => {
  test('It handles no parameters', () => {
    const resp = error();
    expect(resp.status).toBe(500);
    expect(resp.message).toBe('Server Error');
  });
  test('It handles a payload', () => {
    const resp = error('some code', 'hello');
    expect(resp.status).toBe(500);
    expect(resp.message).toBe('Server Error');
    expect(resp.payload).toBe('hello');
  });
  test('It handles 200', () => {
    const resp = error(200);
    expect(resp.status).toBe(200);
    expect(resp.message).toBe('OK');
  });
  test('It handles 201', () => {
    const resp = error(201);
    expect(resp.status).toBe(201);
    expect(resp.message).toBe('Created');
  });
  test('It handles 202', () => {
    const resp = error(202);
    expect(resp.status).toBe(202);
    expect(resp.message).toBe('Accepted');
  });
  test('It handles 400', () => {
    const resp = error(400);
    expect(resp.status).toBe(400);
    expect(resp.message).toBe('Bad Request');
  });
  test('It handles 401', () => {
    const resp = error(401);
    expect(resp.status).toBe(401);
    expect(resp.message).toBe('Not Authorised');
  })
  test('It handles 404', () => {
    const resp = error(404);
    expect(resp.status).toBe(404);
    expect(resp.message).toBe('Not Found');
  });
  test('It handles 406', () => {
    const resp = error(406);
    expect(resp.status).toBe(406);
    expect(resp.message).toBe('Not Acceptable');
  })
  test('It handles 409', () => {
    const resp = error(409);
    expect(resp.status).toBe(409);
    expect(resp.message).toBe('Conflict');
  });
  test('It handles 500', () => {
    const resp = error(500);
    expect(resp.status).toBe(500);
    expect(resp.message).toBe('Server Error');
  });
});