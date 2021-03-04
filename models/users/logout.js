module.exports = (req) => {
  
  async function logout () {
    delete req.session.loggedIn;
    delete req.session.id;
    return ({status: 200, message: 'Logged Out', req});
  };

  return logout ()
  .then(resp => resp);
};