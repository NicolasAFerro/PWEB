const { Pool } = require('pg');

let connPg = function () {
  const pgConfig = {
    user: 'postgres',
    password: '1234',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    ssl: false,
  };

  return new Pool(pgConfig); // Retorna a conexão com o banco
};

module.exports = function () {
  return connPg;
};
