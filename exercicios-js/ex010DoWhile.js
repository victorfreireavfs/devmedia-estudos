// let contador = 0;

// do{
//     console.log(contador);
//     contador++
// } while (contador < 5)

    // --------------------------

let notas_semestre = [7, 7, 5, 6];

let soma_notas = 0;
const quant_notas = 4;

for(let contador = 0; contador < quant_notas; contador++){

    soma_notas = soma_notas + notas_semestre[contador];
}

let media = soma_notas / quant_notas;

if(media >= 6){
    console.log('aprovado')
}else{
    console.log('reprovado')
}
