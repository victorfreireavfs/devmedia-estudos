// console.log('hello world');

let contador = 0;

let notas = [5, 7, 6, 8];

let soma = 0;
let media = 0;

do {
    
    console.log(notas[contador]);
    
    soma = soma + notas[contador];
    
    contador++;

} while ( contador < notas.length );

media = soma / notas.length;

if( media >= 6 ){
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}