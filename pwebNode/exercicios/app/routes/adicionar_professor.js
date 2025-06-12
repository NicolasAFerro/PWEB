module.exports = function (application) {
  application.get(
    '/informacao/professores/adicionar_professor',
    function (req, res) {
      res.render('admin/adicionar_professor');
    },
  );
  application.post('/professor/salvar', function (req, res) {
    async function getAdcProfessor() {
      try {
        let professor = req.body;
        console.log('to aqui' + professor.toString());
        const pool = application.config.dbConnection();
        let professoresModel = application.models.professormodel();

        professoresModel.salvarProfessor(professor, pool, (error, results) => {
          if (error) {
            console.log('erro ao inserrir no banco' + error);
            res.status(500).send(error);
          } else {
            console.log('professor criado');
            res.redirect('/informacao/professores');
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    getAdcProfessor();
    /*   res.send(req.body);

    console.log(req.body); */
  });
};
