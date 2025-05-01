let textInput = document.getElementById("fatec");
function trocaLetras() {
  if (document.getElementById("minusculo").checked)
    textInput.value = textInput.value.toLowerCase();
  else textInput.value = textInput.value.toUpperCase();
}
