import entradaDados from 'readline-sync';

// let nome = entradaDados.question('Digite seu nome: ');
// console.log('Olá, ' + nome);


// --------------------

console.log('Área do triângulo!')

let base = entradaDados.question('Informe a base: ');
let altura = entradaDados.question('informe a altura: ');

let area = (base * altura) / 2;

console.log('A área deste triângulo é: ' + area);