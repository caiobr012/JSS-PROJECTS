/* TIPO DE VARIÁVEL:
Number - (Inteiros, decimais, Negativos)
String - (texto "", '', ´´) -> ´aqui temo um ${} exemplo´
Boolean - (True / False)
Empty values - (NULL / Undefined)
*/

/* OPERADORES LÓGICOS 
<, <=, >, >= - (Clássicos)
!= -(Valor Diferente)
!== - (Valor e tipo Diferente)
== - (Valor Igual)
=== - (valor e Tipo Igual) 
*/

/* DECLARAÇÃO DE VARIÁVEL:
let - (Permite Alterar o valor depois)
const - (Não permite alterar o valor)
*/

/*MENSAGENS NA TELA
let nome = prompt("Digite seu nome:")
alert("mostrando msg")
console.log(Math.max(x, y, x)) -> mostra o maior valor entre eles)
console.log(Math.floor(x)) -> arredonda para baixo)
console.log(Math.ceil(x)) -> arredonda para cima)
*/

/*FUNÇÕES

-ARROW FUNCTION
let a = () => {
    console.log("ola");
    }
a();

-DEFAULT FUNCTION

 let saudacao = (nome, sd = "Bom dia") => {
    return `${sd} , ${nome}!`;
 };
 let nome = prompt("Digite seu nome: ");
 let texto = prompt("Digite a saudação: ");
 console.log(saudacao(nome, texto));

-RECURSIVIDADE
let num = (x) =>{
    console.log(`contagem regressiva ${x}...`);
    if(x <= 1){
        console.log("KABUM")
        return 0;
    }else{
        num(x -1);
    }   
} 
num(10);

-FOR OR
for(x of y){
    }

-DESTRUCTING

const {x,y,z} = userdetails - se userdatils tiver x, y, z os valores serão atribuidos em x, y, e z
 */
/*OBJETOS

const person{
    name: 'joao',
    idade: 23,
    altura: 1.87,
};

Object.assign(a,b) - Faz uma cópia de A em B
Object.key(a) - Mostra qual as chaves que o objeto possui
Object.entries(a) - Mostra o as chaves e os valores contidos nelas
*/

/*ARRAY
array.pop() - retira o ultimo elemento do array
array.push('a','b','c') - adciona os elementos
array.shift() - retira o primeiro elemento do array
array.unshift('a','b','c') - adciona os elementos no começo do array
array.indexof('a') - me retorna a posição de a
array.lastindexof('b') - me retorna a posição do último b
array.slice(x, y) - subtrai um array de outro array da posição x até y
array,foreach((x) =>{
    }) - Percorre os indices sem utilizar os loops
array.includes('x') - verifica se o x está no array
array.reverse() - inverte a ordem do array
string.trim() - remove espaços
string.padStart(x,y) - insere x no inicio da string até atingir y caracteres
string.padEnd(x,y) - insere x no fim da string ate atingir y 
string.split(" ") - insere , no lugar dos " " da string
string.join("x") - Junta strings por um "x"
string.repeat(x) - repete a string x vezes
...array - indefinido elementos
*/


/*JSON
const myJson = '{"name": "caio", "idade": 20, "hobbies": ["Jogar bola", "nadar", "comer"]}';
console.log(myJson);

const myObj = JSON.parse(myJson);
console.log(myObj);

const anotherJson = JSON.stringify(myObj);
console.log(anotherJson);
*/

/*
"use strict"; - Deixa seu código mais rigoroso
DEBUGGER; - Divide o código em etapas
throw new Error(""); - Emite Erro na tela

try { 
} catch () {
} finally {
}
*/