//representa o modelo de professores no banco de dados
module.exports = function () {
  this.getProfessores = function (connection, callback) {
    connection.query('select * from professores', callback);
  };

  this.getProfessor = function (connection, callback) {
    connection.query(
      'select * from professores WHERE id_professor=1',
      callback,
    );
  };
  this.getProfessorPorId = function (id_professor, connection, callback) {
    connection.query(
      `select * from professores WHERE id_professor=${id_professor}`,
      callback,
    );
  };
  this.salvarProfessor = function (professor, connection, callback) {
    connection.query(
      "insert into professores (nome_professor,email_professor) values ('" +
        professor.nome_professor +
        "','" +
        professor.email_professor +
        "')",
      callback,
    );
  };

  this.deletarProfessor = function (professor, connection, callback) {
    connection.query(
      `Delete from professores WHERE id_professor=${professor.id_professor}`,
      callback,
    );
  };
  this.editarProfessor = function (professor, connection, callback) {
    console.log(professor);

    connection.query(
      `UPDATE professores 
   SET nome_professor = $1, email_professor = $2 
   WHERE id_professor = $3`,
      [
        professor.nome_professor,
        professor.email_professor,
        professor.id_professor,
      ],
      callback,
    );
  };

  return this;
};
