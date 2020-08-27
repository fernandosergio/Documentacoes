Window.confirm('Texto') // Caixa que aparece pedindo confirmação
window.prompt('Texto') // Aparece um campo de confirmação

Tipos de dados
number // são todos os números
    -
    Infinity // subtipo de number
    -
    NaN // Not a number subtipo de numver
string // são caracteres
boolean // true and false
Object //Objetos
    -
    Array // Subtipo de object
    -

    function // Subtipo de object
    -null // Subtipo de object
undefined // Indefinido
typeof(var) // Verifica o tipo

parseInt(valor) // Converte o valor em inteiro
number(valor) // Ele se vira 
String(valor) // Converter pra string
valor.toString() // Outro metodo pra converter pra string
document.write(`O aluno ${var} tirou nota %{var}`) // Metodo de formatação de frases tem que estar entre ``
document.write('Texto') // Escreve na pagina algo
valor.toUpperCase() // Tudo em maiúsculas
valor.toLowerCase() // Tudo em minúsculas
valor.toFixed(numero) // Mostra numero casas após o ponto
valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) // Formata na moeda(BRL)

Operadores Relacionais
    % // Resto da divisão inteira
    x = 1
x = x + 1 ou x += 1 ou x++ // Soma um ao x
    5 == 5 // Compara se 5 tem o mesmo valor que 5
5 == '5' // True porque compara só o valor
5 === '5' // False porque compara valor e tipo

Operadores Logicos
    ! // Negação
    && // Conjunção ou and
    || // Disjunção ou or

    -null
Operador ternário
teste ? true : false // faz um teste se for verdadeiro faz true senão false

Arvore DOM
window
location
history
document
html
head
meta
title
body
h1
p
p
strong
div

Metodos de selecionar elementos

Por tag // pode ser varias
    -
    getElementbyTagName(tag)[numero] // entre colchetes o indice do elemento desejado
    -
    var.innerText - //usado pra printa o texto dentro da variavel ex: <p></p>
    -
    var.innerhtml // pega o texto e a formatação

Por ID // apenas um
    -
    getElementbyID() // pega o id(id="")

Por Nome // pode ser varios
    -
    getElementsByName() // pega pelo nome(name="")

Por Classe // pode ser varios
    -
    getElementsByClassName() // pega pela classe(class="")

Por Seletor // tem que usar o id nas tags,
    -
    querySelector() - // tem que por o elemento e o id ou classe ex div#msg ou div.msg
    querySelectorAll() // selecionar todos

Eventos DOM

mouseenter //entrando na area
mousemove // enquanto move
mousedown // quando clica
mouseup // quando solta o click
click // quando clicka rapido
mouseout // quando sai da area
var.addEventlistner('ação', chamada de função) // quando tiver a ação aciona a função

switch (key) {
    case value:

        break;
    case value:

        break
    default:
        break;
} // em key é uma expressão que no case é um valor e caso nenhum seja atendido vai no default(tipo else) o break é obrigatorio

for (inicio; teste; incremento) {
    const element = array[index];

} // No inicio define a variavel tipo c = 1, no teste faz o teste e no incremento tipo c++ ou c += 1

var // é global
let // local
const // apenas para leitura

    document.createelement('nome') // cria um elemento html

Arrays
variavel a = [0, 1, 2, 3] é uma variavel composta ou uma Array ou em portugues vetor, o vetor é composto de elementos, um elemento de um vetor é um par que agrupa o espaço da memória, o valor colocando dentro dele e o indice, que pode ser chamado de key

for (let pos in num) {
    console.log(num[pos])
} // Para cada posição em num faça comandos, funciona so pra arrays , se lê para cada posição(pos) dentro de num(array)
var.sort() // coloca em ordem crescente
num.indexOf(7) // busca o valor 7 no array num e retorna o indice, se não tiver retorna -1
var.push() // Adiciona um elemento no ultimo indice

function soma(n1 = 0, n2 = 0) {
    comandos
} // n1=0 0 fica como valor predefinido
let v = function(x) {
        return x * 2
    } // salva a função na variavel v, pra usar tem q ser v(x)

// RECURSIVIDADE É USAR A FUNÇÃO DENTRO DELA MESMA

// função anônima, quando salva uma função numa variavel, pra chamar ela é da mesma forma que a normal
var soma = function(a, b) {
    return a + b
}

// arrowfunction
var soma = (a, b) => a + b
    // pra usar é da mesma maneira, soma(a,b)
    // quando ela retorna apenas um valor pode tirar o return e as {chaves}
    // ou var soma = (b) => a*2

// A diferença entre a função anônima e a arrowfuncion, é quando ta trabalhando com o this

// vai criar uma função anonima que vai escrever na tela o elemento nome do objeto onde ele foi chamado
var func = function() { console.log(this.nome); }

// cria um elemento nome e  f que chama a função anonima func, que imprime na tela o elemento nome 
var obj1 = { nome: 'objeto1', f: func }

// chama o elemento f, que tem a função anônima func
obj1.f()

// na função anonima vai imprimir objeto1 porem em arrow function ele vai retornar undefined, na arrow function o this vai ser referencia ao window do DOM

// callback é uma função ou URL que será executada quando algum evento acontecer ou algum código chegar ao estado desejado, ou seja, fica esperando até chamar por isso é assíncrona. Exemplo no jquery

$(selector).hide(speed, callback); // selector é o id, class ou name, speed é a velocidade da animação e callback é a função que ele vai chamar quando a animação for concluida

// iife são funções auto-executáveis ex:
(function() {
    console.log(20 + 20)
})();
// estrutura (function nome (parâmetro) { código })(); 
// a função anônima fica entre parênteses e tem outro parênteses fora pra chamar ela.

var a = object.assign({}, lista1, lista2);
// objetos, usado pra juntar listas , no {} diz pra criar um novo objeto e depois diz quais quer juntar, ou

var a = { lista1, lista2 };
//  se deixar lista1 vai criar a propriedade lista1 pra tirar tem que por ... ex: ...lista2

var usuario = {
        posicao: = 0,
        get atual() {
            return usuarios[this.posicao]
        },
        set atual(pos) {
            this.posicao = pos
        }
        get proximo() {
            return ++this.posicao
        },
        get anterior() {
            return --this.posicao
        }
    }
    // usar o get no array diz que não precisa passar parâmetro
    // set serve pra definir o valor.
    // this indica que é a propridade posicao dessa array
usuario.atual = 0; // define o atual pra 0 porque usou o set
// set define um valor e get mostra um valor

var novoUsuario = {
    nome: 'fer',
    idade: 20,
    pais: 'Brasil'
}; // exemplo 

var nome = novoUsuario.nome; // tira o dado nome do novoUsuario e poe em nome, ou

var { nome, idade, pais } = novoUsuario; // cria uma variavel nome com a propriedade nome de novoUsuario, pode por uma ou mais propriedade ex: nome, idade
// se eu quiser mudar o nome da variavel faz assim
var { nome: primeiroNome } = novoUsuario;

var novoUsuario2 = {
    nome: {
        primeiro: 'Fernando',
        ultimo: 'Almeida'
    }
};
// pra extrair uma propriedade de um objeto dentro de um objeto usa: 
var { nome: { primeiro } } = novoUsuario2;
// caso queira passar um valor padrão faz igual função ex:
var { nome: { segundo = 'Sergio' } } = novoUsuario2;

function imprimeUsuario({ nome, idade, sexo }) {
    console.log(nome);
    console.log(idade);
    console.log(sexo);
} // pra pegar propriedades especificas de um objeto, passa o objeto como parâmetro e ele busca os valores de cada um
object.keys(objeto) // pra utilizar apenas as propriedades dos objetos
object.values(objeto) // pra utilizar apenas os valores das propriedades