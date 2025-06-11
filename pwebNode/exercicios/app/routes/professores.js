module.exports = function (app) {
  app.get('/informacao/professores', async function (req, res) {
    /*   const { Pool } = require('pg');

    const pgConfig = {
      user: 'postgres',
      password: '1234',
      database: 'postgres',
      host: 'localhost',
      port: 5432,
      ssl: false,
    };

    const pool = new Pool(pgConfig); */
    let dbConnection = require('../config/dbConnection');

    try {
      const pool = dbConnection(); // criando a conexão com o banco
      const results = await pool.query('SELECT * FROM PROFESSORES');
      //res.json(results.rows); // no pg, os dados ficam em rows
      res.render('informacao/professores', { profs: results.rows });
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao consultar dados' + err.message);
    } finally {
      //await pool.end(); // fechar conexão
    }
  });
};
