let continuar = true;

jogar();

function jogar() {
  while (continuar) {
    var escolha = parseFloat(
      prompt("Escolha \n 0-pedra \n 1-papel \n 2-tesoura")
    );
    var computador = Math.floor(Math.random() * 3);
    //var computador = 0;
    if (escolha === computador) {
      alert("empate, tente novamente");
    } else continuar = false;
  }
  switch (escolha) {
    case 0:
      if (computador == 2)
        alert("voce ganhou: computador escolheu tesoura" + computador);
      else alert("voce perdeu: computador escolheu papel" + computador);
      break;
    case 1:
      if (computador == 0)
        alert("voce ganhou: computador escolheu pedra" + computador);
      else alert("voce perdeu, computador escolheu tesoura" + computador);
      break;
    case 2:
      if (computador == 0)
        alert("voce perdeu, computador escolheu pedra" + computador);
      else alert("voce ganhou, computador escolheu papel" + computador);
  }
}
