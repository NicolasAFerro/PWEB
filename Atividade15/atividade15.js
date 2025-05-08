function validaForm(e) {
  e.preventDefault();

  let name = document.forms.form15.elements["txtname"].value;
  if (name.length < 10) {
    alert("nome deve ter mais de 10 caracteres");
    document.forms.form15.elements["txtname"].focus();
    return;
  }
  let email = document.forms.form15.elements["txtname"].value;
  let coments = document.forms.form15.elements["txtname"].value;
  if (coments.length < 20) {
    alert();
    alert("comentários devem ter mais de 20 caracteres" + coments.length);
    document.forms.form15.elements["txtname"].focus();
    return;
  }
  document.getElementById("pesquisa").style.display = "inline";
  console.log("to aqui");
}
function trocaText() {
  let visit = document.getElementById("rdbsim").checked;
  if (visit) {
    document.getElementById("questions").innerText =
      "Volte sempre à está página!";
  } else {
    document.getElementById("questions").innerText =
      "Que bom que você voltou a visitar esta página!";
  }
}
