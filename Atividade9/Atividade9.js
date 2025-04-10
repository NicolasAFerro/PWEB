let num1 = Number(prompt("insira o primeiro numero: "));
let num2 = Number(prompt("insira o segundo numero: "));
let num3 = Number(prompt("insira o terceiro numero: "));

alert(`seu maior numero é: ${maiorNum(num1, num2, num3)}`);
let ordenados = ordenaNumeros(num1, num2, num3);
alert(`seus numero ordenados: ${ordenados}`);
let palindromo = prompt("insira sua string: ");
alert("resultado palindromo:" + verificaPalindromo(palindromo));
alert("é tringulo:" + veririficaTriangulo(num1, num2, num3));
function maiorNum(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
function ordenaNumeros(num1, num2, num3) {
  let listaNums = [num1, num2, num3];
  return listaNums.sort((a, b) => a - b);
}
function verificaPalindromo(texto) {
  texto = texto.trim().toUpperCase();
  //alert(`string: ${texto}\n invertida:${texto.split("").reverse().join("")}`);
  if (texto === texto.split("").reverse().join("")) return "Palindromo";
  else return "Não é palindromo";
}
function veririficaTriangulo(num1, num2, num3) {
  if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1)
    return true;
  else return false;
}
