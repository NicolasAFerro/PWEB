module.exports = function (app) {
  app.get('/informacao/professores', async function (req, res) {
    try {
      const pool = app.config.dbConnection();
      let professoresModel = app.models.professormodel();
      professoresModel.getProfessores(pool, function (err, results) {
        res.render('informacao/professores', { profs: results.rows });
      });
      //const results = await pool.query('SELECT * FROM PROFESSORES');
      //res.json(results.rows); // no pg, os dados ficam em rows
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao consultar dados' + err.message);
    } finally {
      //await pool.end(); // fechar conexão
    }
  });
};
