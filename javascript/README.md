#Javascript
- Estado do JS (https://2020.stateofjs.com/en-US/technologies/)
- Onde  é executado
- Omnipresente na web
- App híbridos
- Aplicação de ponta-a-ponta: banco de dados, back-end / front-end
- Interagir com DOM (api-web)
- Requisições dinâmicas
- IoT (Internet das Coisas): o JS está presente em tudo
- ECMASript

## Fundamentos JS
- Fundamentos do Javascript são essenciais para avançar no desenvolviemnto de aplicações modernas, é a base de diversos frameworks
- Neste curso evoluímos da base para o topo
- É melhor que começar na frente e precisar retornar a base

## Metodologia
- Método progressivo e integrado
- Todo arranha céu só é erguido depois de ter uma fundação robusta e segura
- Neste curso apresentamos conceitos de modo progressivo, seguindo uma linha de evolução
- Começa fácil e vai aumentando a complexidade
- Além da especialização, aprendemos a interagir com diversas possibilidades

## Lógica de Programação

### Algoritmo para calcular a média de 3 números
1. Inicio;
2. Receber o primeiro número: entrada 1;
3. Receber o segundo número: entrada 2;
4. Receber terceiro número: entrada 3;
5. PROCESSAMENTO: Somar os 3 números recebidos e dividir por três: (entrada 1 + entrada 2 + entrada 3)/3;
6. Exibir o resultado: print, echo, console.log;
7. Fim;

https://www.somatematica.com.br/jogos/hanoi/

## Funcionalidades gerais
- Criar algoritmo e programas para executar no navegador: client side
- Manipular o DOM: elementos HTML, eventos (clique, submit),estilos CSS
- Node.js: framework JS para back-end / runtime em JS
- Mongo.db: banco de dados em JS
- React / Vue.js / Angular: framework JS para desenvolvimento mobile
- React Native: framework JS para desenvolvimento mobile


-recebe e manipular dados
- tomar decisões baseados na lógica computacional
- loope interações
- condições de saída

### Executar o JS
- Console browsers
-Editores: Sublime, Visual Studio Code
- JS Fiddle https://jsfiddle.net/

## Variáveis
São utilizados para referenciar espaço na memória

- var
- const (fica com valor imutável)
- let
- string
- tipagem: número ou string **Pesquisar
- array: conjunto de valores

## Operadores
- Soma +
- Subtração -
- Multiplicação *
- Divisão /
- Módulo (resto de divisão) %
- Math: random(), round(), sqrt().

## Atribuição
 - a = b
 - a += b
 - a -= b
 - a *= b
 - a /= b
 - a %= b

## Operadores de Comparação / Lógicos
- Igual == ou ===
- Diferente !=
- Maior que >
- Menor que <
- Menor que ou igual <=
- Maior que ou igual >=

## Operadores de lógica e junção lógica
- ! NOT
- && AND
- OR

O sinal de exclamação (!) é o operador  NOT, utilizado para negar a sentença que vem na sequência.

Ver mais em:
https://developer.mozilla.org/pt-BR/docs/Web/Javascript/Guide/Expressions_and_operators

# Code Together

## Lista de Exercícios

1. Descreva um Algoritmo para resolver o problema da travessia de modo 'seguro':

Um homem precisa atravessar um rio com um barco que possui capacidade apenas para carregar ele mesmo e mais um de seus três pertences, que são: um lobo, uma cabra e um maço de alfafa. Em cada viagem só poderá ir o homem e apenas um de seus pertences. A seguinte regra deverá ser respeitada: o lobo não pode ficar sozinho com a cabra e nem a cabra sozinha com o maço de alfafa. Escreva um algoritmo para fazer a travessia dos pertences que estão em uma margem do rio para a outra.

### RESPOSTA:
//Preciso levar a cabra primeiro. preciso ir e vir mais de três vezes?(Sim). Posso voltar com item? (Preciso).<br>
//Fica lobo e alfafa.

01. Início;
02. cabra, lobo, alfafa;
03. Homem pega cabra e atravessa o rio; 
04. Homem volta;
05. Homem pega lobo e atravessa o rio;
06. Homem pega cabra e volta;
07. Homem deixa cabra pega alfafa e atravessa o rio;
08. Homem deixa alfafa e volta; 
09. Homem pega cabra e atravessa o rio;
10. Travessia segura realizada;
11. Fim;

2. JS: Exibir média de 3 números com entradas pelo formulário HTML:

 ### RESPOSTA:

~~~html
 <p>Digite  3 números  para calcular a média</p>
 <input type="text" id="a">
 <input type="text" id="b">
 <input type="text" id="c">
 <button onclick="obterMedia()">calcular média</button>
 <div id="resultado"> </div>
 ~~~

 ~~~CSS
 input,button {
  display:block;
  margin: 1em;
}  
~~~

~~~javascript
 function obterMedia() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);

  var media = (a + b + c)/3;
  document.getElementById("resultado").innerHTML = "resultado: " + media;
  }
~~~

 [Resolução] (https://jsfiddle.net/jeffdsdev/byo8wp6h/3/)

## Laços de Repetição (Loops)
- for ([expressãoInicial]; [condição]; [incremento]){
  
}
- while([condição]) {
  [execucao]
}
- do{ 
  [execução]
} while ([condição])

```
//fazer revisão do carro aos 10km
var km;
var revisao = 10;

for (km = 0; km < revisao; km++ ){
    console.log("Apenas" + km "pode rodar");
}

```

### Cálculo média de alunos

```
var alunos = [
  [6,5,7,8],
  [7,5,9,7],
  [8,8,9,9],
]

var nota = 0
for(var i = 0; i < alunos.length; i++){
  
  nota = 0
  aluno = alunos[i];
  console.log("Aluno: " + aluno);

  for(c = 0; c < aluno.length; c++){
    nota += aluno[c];
  }
  
  media = nota / 4;
  
  if(media >=7){
  resultado = "aprovado";
  }else {
  resultado = "reprovado"
  }

console.log("Media: " + media + " - " + resultado);
}
```

## Javascript II

### Resolva as operações:

- 10 + 15 = 25 (number)
- “10” + 2 = 102 (number)
- “10” * 2 = 20 (number)
- “10” / 3 = 3.333333335 (float)
- “10” % 3 = 1 (number)
- 10 + true = 11 (number)
- 10 == ”10” = true (boolean)
- 10 === “10” = false (boolean)
- 10 < 11 = true (boolean)
- 10 > 12 = false (boolean)
- 10 <= 10.1 = true (boolean)
- 10 > 9.99 = true (boolean)
- 10 != “dez” = true (boolean)
- 10 + true = 11 (number)
- “dez” + true = "deztrue" (string)
- 10 + false = 10 (number)
- 10 * false = 0 (number)
- true + true = true (boolean)
- 10++ = 11 (number)
- 10-- = 9 (number)
- 1 & 1 = 1 (number)
- 1 & 0 = 0 (number)
- 0 & 0 = 0 (number)
- 1 & 0 = 0 (number)
- 0 / 1 = 0 (number)
- 5 + 5 == 10 = true (boolean)
- “5” + ”5” == 10 = false (boolean)
- “5” * 2 > 9 = true (boolean)
- (10 + 10) * 2 = 40 (number)
- 10 + 10 * 2 = 30 (number)

### 2. Responda as perguntas de acordo com as variáveis.
var branco = “preto”;
var preto = “cinza”;
var cinza = “branco”;
var carro = “preto”;
var valor = 30.000;
var prestacao = 750;

a) branco == “branco”
R: false

b) branco == cinza
R: false

c) carro === branco
R:true

d) var cavalo = carro == “preto” ? “cinza” : “marron”;
R: cavalo = "cinza"

e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação.
R: 
~~~javascript
let carro = 30000;
let prestacao = 750;
let entrada = 3000;
let prestacoes;

carro-= entrada;
prestacoes = carro/prestacao;
console.log("Com a entrada de R$" + entrada + ", faltam " + prestacoes + " prestacões no valor de R$" + prestacao + " para ser pagas, totalizando: R$" + carro);
~~~

f) Somando as variáveis de cores é formada uma string de quantos caracteres?
R:
~~~javascript
let branco = "preto";
let preto = "cinza";
let cinza = "branco";

let somaCores = branco + preto + cinza;
console.log("A soma de caracteres das variáveis é igual a: " + somaCores.length);
~~~

## Javascript III

### DOM
- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML
- Interface de programação
- É essencial para o JS entender o modelo de páginas web

### Para que serve?
- Alterar a estrutura
- Alterar o estilo
- Alterar o conteúdo

### Como
- Disponibilizando API (Appplicatio Programming Interface)
- Rotinas e padões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos (nós/ nodes)

### Exemplo HTML:
```
<html>
	<head></head>
	<body></body>
</html>

```
### Exemplo Obj:
```
objeto = {
	html : {
		head : {},
		body : {
			h1 : {
			
			}
		}
	}
}
 
```

### DOM x JS
- O DOM pode ser usado por outras linguagens
- sem o DOM o JS não teria noção da página

### Vantagens de usar Javascript
- Código é executado por navegadores
- Tornar as págias dinâmicas
- Evitar Requisições desnecessárias (performance)
- SPA (SIngle Page Applications)
- Reagir rapidamente as ações dos usuários

### Desvantagens de usar o Javascript
- Código é executado por navegadore
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento

### Exemplos de como o DOM disponibiliza os métodos (callback)
Seleciona o objeti e disponibiliza (métodos / funções).callback

- document.getElementByID(id)
- document.getElementsByTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name')
- element.getAttribute('name')
- element.addEventListener()
- window.location
- window.onload (en-US)
- console.log()
- window.scrollTo()
