// MANIPULAÇÃO

// contac() retorna junção de arrays ou valores
let frutas1 = ["maçã", "uva"];
let frutas2 = ["banana","manga"];
let todasFrutas = frutas1.concat(frutas2);
console.log(todasFrutas);

// .join() retorna todos elementos em uma string e retorna
// podendo especificar um separador
// console.log(todasFrutas.join("-"));

// .slice() retorna cópia do array delimitado por índice(elemento antes do último índice)
// let algumasFrutas = todasFrutas.slice(0,2);
// console.log(algumasFrutas);

// -------------------------

// MÉTODOS ITERAÇÃO
// .forEach() executa uma função para cada elemento

// todasFrutas.forEach(function(todasFrutas){
//     console.log(todasFrutas);
// });

// .map() cria novo array resultado da chamada da função para cada elemento
// aplica a função nos elementos do array

// let numeros = [2,4,6,7,9];
// let quadrados = numeros.map(function(numeros){
//     return numeros * numeros;
// })
// console.log(quadrados);

// // .filter() mostra o re

// let pares = quadrados.filter(function(quadrados){
//     return quadrados % 2 ===0
// });
// console.log(pares)