// EXEMPLOS DE CÓDIGOS IMPETARIVOS E DECLARATIVOS


// IMPERATIVO
// const notas = [8.7, 6.8, 5.6, 9.6, 10, 7.3];

// function media(notas){
//     let total = 0;
//     for( let i = 0; i < notas.length; i++){
//         total += notas[i]
//     }
//     return total / notas.length
// }
// const mediaTurma = media (notas);
// console.log(`Média é ${mediaTurma}`);


// ---------------------
// DECLARATIVO  
 const notas = [8.7, 6.8, 5.6, 9.6, 10, 7.3];

 const somar = (a,b) => a+b;
 const dividir = (a,b) => a / b;

 const mediaTurma = dividir(
    notas.reduce(somar),
    notas.length
 )
 console.log(`Média é ${mediaTurma}`);
