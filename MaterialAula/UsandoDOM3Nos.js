// adiciona item no nó
function adicionaItem(nome) {
    document.getElementById('Lista').innerHTML += "<li>" + nome + "</li>";
};

// mostra os dados do nó
function mostraNo(item) {

    alert("Valor innerHTML do principal(Lista)" + document.getElementById(item).innerHTML);

    alert("Nome da tag Nó " + document.getElementById(item).nodeName);
    alert("Name do Nó " + document.getElementById(item).getAttribute("name"));
    // se fosse button por exemplo o value seria o texto
    // no caso paragrafo nao tem value
    alert("value do Nó " + document.getElementById(item).nodeValue);

    //pai
    alert("Parent " + document.getElementById(item).parentNode.nodeName);

    // o primeiro filho de elemento parágrafo é tipo texto
    alert("Primeiro Filho " + document.getElementById(item).firstChild.innerHTML + "  type " + document.getElementById(item).firstChild.nodeType);
    document.getElementById(item).firstChild.nodeValue;
 };



