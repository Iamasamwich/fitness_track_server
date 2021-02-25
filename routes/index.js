module.exports = (app) => {

  app.get('/', (req, res) => {
    return res.status(200).json({status: 'helloooo dolly'});
  });

  //catchall
  app.all('*', (req, res) => {
    return res.status(404).json({status: 'ru roh'});
  });
};
