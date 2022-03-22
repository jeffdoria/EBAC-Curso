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

