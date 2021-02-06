module.exports = (app) => {
  app.get('/squad', (req, res) => {
    var connection = app.config.database();
    var query = app.models.squadModel;
    query.getSquad(connection, (err, result) => {
      if(!err) {
        res.json(result);
      } else {
        console.log(err);
      };
    });
  });
};