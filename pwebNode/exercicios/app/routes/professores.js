module.exports = function (app) {
  app.get('/informacao/professores', (req, res) => {
    res.render('informacao/professores');
  });
};
