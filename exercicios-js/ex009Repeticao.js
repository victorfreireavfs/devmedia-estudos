// let numero = 3;
// let contador = 0;

// console.log("Tabuada de multiplicação - Nº " + numero);

// while(contador <= 10){
    
//     let resultado = numero * contador;

//     console.log( numero + " x " + contador + " = " + resultado);
//     contador++
// }

// ---------------------------

//  Percorrendo array com while

// let numeros = [10, 5, 7, 8, 9, 6, 12, 4, 45,39, 845];

// let total_impares = 0;
// let total_pares = 0;

// let contador = 0;

// while ( contador < numeros.length ) {

//     if( numeros[contador] % 2 == 0 ){
//         total_pares++;
//     } else {
//         total_impares++;
//     }

//     contador++;

// }

// console.log(" O total de números ímpares é: " + total_impares);
// console.log(" O total de números pares é: " + total_pares);
// ---------------------


let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

let impares = 0;
let pares = 0;

let contador = 0;

while (contador < numeros.length) {

    if(numeros[contador] % 2 == 0){
        pares++
    } else{
        impares++
    }
    contador++
}

console.log(" O total de números ímpares é: " + impares);
console.log(" O total de números pares é: " + pares);