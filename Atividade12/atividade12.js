let baseRetangulo = Number(prompt("insira a base do retangulo"));
let alturaRetangulo = Number(prompt("insira a altura do retangulo"));

class Retangulo {
  constructor(base, altura) {
    this._base = base;
    this._altura = altura;
  }
  calculaArea() {
    return this._altura * this._base;
  }
}

var item1 = new Retangulo(baseRetangulo, alturaRetangulo);
alert("area:" + item1.calculaArea());

class Conta {
  constructor(nome, correntista, banco, numconta, saldo) {
    this._nome = nome;
    this._correntista = correntista;
    this._banco = banco;
    this._numconta = numconta;
    this._saldo = saldo;
  }
  getNome() {
    return this._nome;
  }
  getCorrentista() {
    return this._correntista;
  }
  getBanco() {
    return this._banco;
  }
  getNumConta() {
    return this._numconta;
  }
  getSaldo() {
    return this._saldo;
  }
}

class ContaCorrente extends Conta {
  constructor(nome, correntista, banco, numconta, saldo) {
    super(nome, correntista, banco, numconta, saldo);
  }
  setSaldoEspecial(value) {
    this._saldoEspecial = value;
  }
  getSaldoEspecial() {
    return this._saldoEspecial;
  }
}
class ContaPoupanca extends Conta {
  constructor(nome, correntista, banco, numconta, saldo) {
    super(nome, correntista, banco, numconta, saldo);
  }
  setJuros(value) {
    this._juros = value;
  }
  getJuros() {
    return this._juros;
  }
  setDataVencimento(value) {
    this._dtVencimento = value;
  }
  getDataVencimento() {
    return this._dtVencimento;
  }
}
alert("Conta Corrente");
let nomeCorrente = prompt("Insira o nome da conta corrente");
let correntista = prompt("Insira o correntista da conta corrente");
let banco = prompt("Insira o banco da conta corrente");
let numContaCorrente = prompt("Insira o numero da conta corrente");
let saldoContaCorrente = prompt("Insira o saldo da conta corrente");
let saldoEspecial = prompt("insira o saldo especial");
var corrente = new ContaCorrente(
  nomeCorrente,
  correntista,
  banco,
  numContaCorrente,
  saldoContaCorrente
);
corrente.setSaldoEspecial(saldoEspecial);
console.log(`Conta Corrente\n
            nome:${corrente.getNome()}\n
            correntista: ${corrente.getCorrentista()}\n 
            banco: ${corrente.getBanco()}\n 
            num conta: ${corrente.getNumConta()}\n 
            saldo: ${corrente.getSaldo()} 
            saldo especial: ${corrente.getSaldoEspecial()}`);

alert("Conta Poupança");
let nomePoupanca = prompt("Insira o nome da conta poupanca");
correntista = prompt("Insira o correntista da conta poupanca");
banco = prompt("Insira o banco da conta poupanca");
let numContaPoupanca = prompt("Insira o numero da conta poupanca");
let saldoContaPoupanca = prompt("Insira o saldo da conta poupanca");
let juros = prompt("Insira o Juros da conta poupanca");
let dataVencimento = prompt("Insira a data de vencimento da conta poupanca");
var poupanca = new ContaPoupanca(
  nomePoupanca,
  correntista,
  banco,
  numContaPoupanca,
  saldoContaPoupanca
);
poupanca.setJuros(juros);
poupanca.setDataVencimento(dataVencimento);
console.log(`Conta Poupança\n
  nome:${poupanca.getNome()}\n
  correntista: ${poupanca.getCorrentista()}\n 
  banco: ${poupanca.getBanco()}\n 
  num conta: ${poupanca.getNumConta()}\n 
  saldo: ${poupanca.getSaldo()}\n 
  juros: ${poupanca.getJuros()}\n
  data vencimento: ${poupanca.getDataVencimento()}`);
