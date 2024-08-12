// function saudacao(nome){
//     console.log("olá, " + nome + "!");
// };

// saudacao("maria");

// -------------

// VARIÁVEL ESCOPO GLOAL
// let cor = "vermelho";

// function mostrarCor(){
//     console.log(cor);
// }

// mostrarCor();

// ---------------

// ESCOPO LOCAL
// function mostrarCarro(){
//     let carro = "ferrari";
//     console.log(carro);
// }
// mostrarCarro();


// ---------------------

// VARIÁVEIS LET E CONST
// let ou const dentro de um bloco de código(escopo de bloco)

// function testarLet(){
//     if(true){
//         let x  = 5;
//         console.log(x);
//     }
// }
// testarLet();

// -----------------

// FUNÇÕES DE ALTA ORDEM
// função .map() cria um novo array a partir da interação de uma função nos elementos 
// do array original.

// const numeros = [1,2,3,4,5,6];
// const quadrados = numeros.map(function (n){
//     return n*n;
// });
// console.log(quadrados);

// FUNÇÕES DE CALLBACK
// função que chama outra função
// function cuprimentar(callback){
//     console.log('Olá');
//     callback();
// };
// function dizerNome(){
//     console.log('joão')
// };
// cuprimentar(dizerNome);

