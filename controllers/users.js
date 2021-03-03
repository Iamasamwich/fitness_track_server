module.exports = {
  ping(req, res) {
      return res.status(200).json({status: '200', message: 'ok'});
  }
};