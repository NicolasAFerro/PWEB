let nome = prompt("Insira o nome");
let matricula = prompt("Insira a matricula");
let funcao = prompt("insira a função");

var obj1 = new Object();
obj1.nome = nome;
obj1.matricula = matricula;
obj1.funcao = funcao;

console.log(`objeto 1\n 
  nome: ${obj1.nome}\nmatricula: ${obj1.matricula}\nfuncao: ${obj1.funcao}`);

alert("obj2");
nome = prompt("Insira o nome");
matricula = prompt("Insira a matricula");
funcao = prompt("insira a função");
function Objeto2() {
  var nome;
  var matricula;
  var funcao;

  this.setNome = function (value) {
    this.nome = value;
  };
  this.setMatricula = function (value) {
    this.matricula = value;
  };
  this.setFuncao = function (value) {
    this.funcao = value;
  };

  this.getNome = function () {
    return this.nome;
  };
  this.getMatricula = function () {
    return this.matricula;
  };

  this.getFuncao = function () {
    return this.funcao;
  };
}

var forma2 = new Objeto2();
forma2.setNome(nome);
forma2.setMatricula(matricula);
forma2.setFuncao(funcao);
console.log(
  `Forma 2\n
  nome:${forma2.getNome()}\n
  matricula:${forma2.getMatricula()}\n
  funcao:${forma2.getFuncao()}`
);
alert("obj3");
nome = prompt("Insira o nome");
matricula = prompt("Insira a matricula");
funcao = prompt("insira a função");

var forma3 = {};
forma3.nome = nome;
forma3.matricula = matricula;
forma3.funcao = funcao;
console.log(`forma3\n 
  nome: ${forma3.nome}\nmatricula: ${forma3.matricula}\nfuncao: ${forma3.funcao}`);
