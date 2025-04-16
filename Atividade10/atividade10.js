let altura = parseFloat(prompt("Insira sua altura"));
let peso = parseFloat(prompt("insira seu peso"));

function calculaImc(altura, peso) {
  return peso / Math.pow(altura, 2);
}
let imc = calculaImc(altura, peso);
//alert(imc);
if (imc < 18.5) alert("Magreza, obesidade grau 0");
else if (imc >= 18.5 && imc <= 24.9) alert("Normal, obesidade grau 0 ");
else if (imc >= 25 && imc <= 29.9) alert("Sobrepeso, obesidade grau I ");
else if (imc >= 30 && imc <= 39.9) alert("Obesidade, obesidade grau II ");
else alert("Obesidade Grave, obesidade grau III ");
