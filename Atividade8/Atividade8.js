let lsPessoas = [];
lsPessoas.push({
  idade: 45,
  sexo: "F",
  opiniao: 4,
});
lsPessoas.push({
  idade: 50,
  sexo: "M",
  opiniao: 3,
});
lsPessoas.push({
  idade: 20,
  sexo: "F",
  opiniao: 2,
});
lsPessoas.push({
  idade: 33,
  sexo: "F",
  opiniao: 1,
});
lsPessoas.push({
  idade: 70,
  sexo: "OUTROS",
  opiniao: 4,
});

let comprimento = lsPessoas.length;
let pessoaMaisVelha = 0;
let pessoaMaisNova = 1000;
let qtdPessoasPessimo = 0;
let percOtimo = 0;
let percBom = 0;
let totMulher = 0;
let totHomem = 0;
let totOutros = 0;
let mediaIdade = 0;

lsPessoas.map((n) => {
  mediaIdade += n.idade;
  if (n.idade > pessoaMaisVelha) pessoaMaisVelha = n.idade;
  if (n.idade < pessoaMaisNova) pessoaMaisNova = n.idade;

  switch (n.opiniao) {
    case 1:
      qtdPessoasPessimo++;
      break;
    case 4:
      percOtimo++;
      break;
    case 3:
      percBom++;
      break;
  }
  switch (n.sexo) {
    case "M":
      totHomem++;
      break;
    case "F":
      totMulher++;
      break;
    default:
      totOutros++;
  }
});
percBom = (percBom * 100) / comprimento;
percOtimo = (percOtimo * 100) / comprimento;
mediaIdade = mediaIdade / comprimento;
console.log(`média idade: ${mediaIdade}\n 
            pessoa mais velhar: ${pessoaMaisVelha}\n 
            pessoa mais nova: ${pessoaMaisNova}\n 
            qtd péssimo: ${qtdPessoasPessimo}\n 
            porcentagem bom: ${percBom}%\n 
            porcentagem ótimo: ${percOtimo}%\n 
            mulheres: ${totMulher} - homens: ${totHomem} - outros:${totOutros}`);
