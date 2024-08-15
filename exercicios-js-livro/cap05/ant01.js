// OBJETOS
// let carro = {
//     marca: 'Fiat',
//     modelo: 'Uno',
//     ano: 2022,
//     ligar: function(){
//         console.log("o carro está ligado");
//     }
// };
// acessando, modificando e removendo propriedades
// carro.cor = "azul";
// carro.marca = "argo"
// delete carro.ano;
// console.log(carro.ano); 

// ---------------------------------

// ARRAYS
// let numeros = [1,2,3,4,5,6,7];
// let mistos = [1,"dois", true, [3,4], {nome:"joão", idade: 30}];
  
// let nomes = ["ana", "victor", "larissa"];
// nomes[2] = "manoel"

// nomes.push("belma");
// nomes.pop();
// nomes.shift();
// nomes.unshift("maria");
// nomes.splice(0,0,"marcos");
// let nomesAmigos = nomes.slice(0,2)
// let nomesString = nomes.join(", ");
    
// console.log(nomesAmigos);
// console.log(nomes);
// console.log(nomesString);
    
// ----------------

// MÉTODOS ARRAY
// adicionar e remover pop() push() unshift()
let frutas = ["melão","maçã", "banana", "uva"];
// pshu() adiciona elementos no final
frutas.push("manga");

//pop() remove ultimo elemento e o retorna 
let frutaRemovida = frutas.pop();
console.log(frutaRemovida);

// adiciona um ou mais elementos início
frutas.unshift("pêra");

// shift() remove primeiro elemento e o retorna
frutas.shift();
console.log(frutas);

