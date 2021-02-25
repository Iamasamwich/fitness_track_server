const path = require('path');


module.exports = (app) => {

  app.get('/', (req, res) => {
    return res.status(200).json({status: 'helloooo dolly'});
  });

  //catchall
  app.all('*', (req, res) => {
    return res.status(404).sendFile(path.join(__dirname, '../static/404.html'));
  });
};
