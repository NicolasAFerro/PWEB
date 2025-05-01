let janela = document.getElementById("janelaState");
let titulo = document.getElementById("titulo");

janela.addEventListener("mouseenter", (event) => {
  janela.setAttribute("src", "janelaaberta.png");
  titulo.innerText = "Janela Aberta";
});
janela.addEventListener("mouseleave", (event) => {
  janela.setAttribute("src", "janelafechada.png");
  titulo.innerText = "Janela Fechada";
});
janela.addEventListener("click", (event) => {
  janela.setAttribute("src", "janelaquebra.png");
  titulo.innerText = "Janela Quebrada";
});
