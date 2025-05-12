# Lista de Exercicios PWEB

## 1

A instrução que informa ao navegador para renderizar a página em HTML5 é: <!DOCTYPE html>

## 2

- A: Header
- B: Nav
- C:
- D: Section
- E: Aside
- F: Article
- G: Footer

## 3

header, main, nav, aside, footer, article

## 4

As listas ordenadas com marcadores em HTML são definidas através do elemento
**<ol></ol>**. Os seus subitens são definidos com o elemento**<li>**.

## 5

A propriedade **font-size** define o tamanho do texto de um elemento HTML,
podem ser utilizadas por exemplo as unidades:**px**, **rem** ou **em**.

## 6

Para configurar margem, deve-se seguir o sentido horário: b-margin:11px 1px 5px 20px

## 7

## 8

Para colocar comentários utiliza-se no HTML: **_, no CSS _** e no JavaScript \_\_\_.
d- <!-- -->, /_ comentário _/, //comentário ou /_ comentário _/

## 9

Qual é o local correto para referenciar um arquivo CSS externo em uma página
HTML?
e- dentro de <head>

## 10

É possível referenciar um arquivo JavaScript externo em uma página HTML:
f-dentro de <head> e <no final do body>

## 11

Qual é a sintaxe correta CSS?
b- body {color: black;}

## 13

<em>lp2</em>

## 14

Para selecionar elementos do arquivo CSS, em uma classe chamada "nova", deve-se
usar: .nova

## 15

Assinale a alternativa incorreta:
a- Meta tags são linhas de código HTML que descrevem o conteúdo do site para os
buscadores.
b- A propriedade font-size define o tamanho do texto de um elemento HTML.
**c- Uma requisição POST é enviada como string anexada a URL, enquanto a requisição
GET é encapsulada junto ao corpo da requisição HTTP e não pode ser vista. **
d- Medias Queries são tecnologias que podem ser utilizadas para sites responsivos.

## 16

## 17

rgb,rgba,hsl

## 18 IMPORTANTE

function declararion:

```
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 3)); // Saída: 8
```

Function Expression

```
const soma = function(a, b) {
  return a + b;
};

console.log(soma(5, 3)); // Saída: 8
```

Arrow Function

```
const soma = (a, b) => a + b;

console.log(soma(5, 3)); // Saída: 8
```

## 19

Criar uma função em JavaScript que receba uma frase e retorne quantas letras ‘A’
(maiúsculas ou minúsculas) foram encontradas.

```
function contA (str){
    let cont=0;
    for(var i=0;i<str.length;i++)
        if(str[i]==='A' ||str[i]==='a')
            cont++;
    return cont;
}
console.log(contA("aqui tem 2 Aaaaa"))
```

## 20 esse é IMPORTANTE

Criar uma função em JavaScript que receba 5 números e retorne-os em ordem
decrescente.

```
function ordenaNum(a,b,c,d,e){
    let lista=[a,b,c,d,e];
    lista.sort((a,b)=>a-b);
    return lista.reverse();
}
console.log('to aqui: '+ ordenaNum(40, 100, 1, 5, 25, 10))
```

## 21

Criar uma função em JavaScript que receba um array de números e retorne-os em
ordem decrescente.

```
function ordenaNum(numeros){
    numeros.sort((a,b)=>a-b);
    return numeros.reverse();
}
console.log('to aqui: '+ ordenaNum([40, 100, 1, 5, 25, 10]))
```

## 22

## 23

Qual é a sintaxe JavaScript correta para trocar o conteúdo do elemento abaixo?

<p id="inicio"> Texto de Exemplo</p>

document.getElementById("inicio").innerHTML = "Conteúdo Alterado!";

## 24

```
let objLivro1={
    titulo,
    autor,
}
let objLivro2 = new Object()
objLivro2.titulo=null;
objLivro2.autor=null;

```

## 25 Sintaxe de obj

Observe as formas em que foram criados os objetos abaixo, e assinale as que estão
corretas:
a

```
let aluno1 = new Object(); // forma 1
aluno1.ra = "00001234";
aluno1.nome = "Pedro da Silva";

```

b

```
let aluno2 = {}; // forma 2
aluno2.ra = "1234";
aluno2.nome = "José da Silva";
```

c

```
let aluno3 = {
  ra: "1234567",
  nome: "João da Silva",
};
```

d

```
function Aluno(_ra, _nome) {
  this.ra = _ra;
  this.nome = _nome;
}
let aluno4 = new Aluno(123, 'Carlos');
```

a abaixo está incorreta pois não pode usar let para as variaveis

```
function Aluno2() {
  let _ra;
  let _nome;
  this.getRa = function() { return this._ra };
  this.setRa = function(value) { this._ra = value };
  this.getNome = function() { return this._nome };
  this.setNome = function(value) { this._nome = value };
}
let aluno5 = new Aluno2();
aluno5.setRa(124);
aluno5.setNome("Helio");
```

f

```
class Aluno3 {
  constructor(ra, nome) {
    this._ra = ra;
    this._nome = nome;
  }
}
let aluno6 = new Aluno3(123, "Ana");
alert(`RA: ${aluno6._ra} Nome:${aluno6._nome}`);
```

## 26

O JSON é um formato simples e popular para armazenar e transferir dados
aninhados ou hierárquicos (ver exemplos). É bastante comum na web, usado para
enviar dados de um servidor para um navegador da web ou para transferir dados entre
sistemas. Veja exemplo:

## 27 Detalhe

Supondo o seguinte código, informe o que será impresso no alert?R: 20

Esse arguments a função acessa os argumentos passadoss, mesmo que  
não tenha nada declarado dentro da função.
o teste.apply() esse métodos permite passar os argumentos na forma de array

```
function teste() {
let auxiliar = 0;
for (let i = 0; i < arguments.length; i++) {
 auxiliar += arguments[i]*2;
}
return auxiliar;
}
let arr1 = [1, 2,3, 4];
alert(teste.apply(null, arr1));
```

## 28 IMPORTANTE

Criar a classe Médico (usando class) com os atributos nome e CRM. Criar as
subclasses (“filhas” da classe Médico) Pediatra com atributo idade máxima paciente e
Geriatra com atributo idade do paciente. Criar um objeto da classe Pediatra e outro
objeto da classe Geriatra

```
class Medico{
  constructor(nome,crm){
    this._nome=nome;
    this._crm=crm;
  }
}

class Pediatraextends Medico{
  constructor(nome,crm,idade){
    super(nome,crm);
    this._idadeMaxPaciente=idade;
  }
}

class Geriatra  extends Medico{
  constructor(nome,crm,idade){
    super();
    this._idadePaciente=idade;
  }
}

let pediatra= new Pediatra("joão",1234);
```

## 29

## 30

                   |-links[]
        |-document |-Anchor[]

window | |-images[]
| |- Forms |-Button
| |-Radio
| |-TextArea
| |...
|-History
|-Location
|-Navigator
