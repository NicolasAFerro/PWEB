let app = require('./app/config/server'); //carregando o módulo do servidor

let testeModu = require('./modulo1');

app.get('/', function (req, res) {
  //res.send('<html><body>fatec sorocaba</body></html>');
  res.render('home/index');
});

app.get('/formulario_adicionar_usuario', (req, res) => {
  res.render('admin/adicionar_usuario');
});
/* app.get('/historia', (req, res) => {
  //res.send('<html><body>historia da fatec sorocaba</body></html>');
  //res.render('secao/historia');
}); */
app.get('/informacao/historia', (req, res) => {
  res.render('informacao/historia');
});

/* app.get('/cursos', (req, res) => {
  //res.send('<html><body>cursos da fatec sorocaba</body></html>');
  //res.render('secao/cursos');
}); */
app.get('/informacao/cursos', (req, res) => {
  res.render('informacao/cursos');
});

/* app.get('/professores', (req, res) => {
  //res.send('<html><body>professores da fatec sorocaba</body></html>');
  //res.render('secao/professores');
}); */
app.get('/informacao/professores', (req, res) => {
  res.render('informacao/professores');
});

app.listen(3000, function () {
  console.log('servidor com express carregado');
  console.log(testeModu);
});
