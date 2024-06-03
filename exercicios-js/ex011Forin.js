 let aluno = {
    nome: 'victor',
    idade: 24,
    cpf: 9388493030
 }

 for( let dados in aluno){
    console.log(aluno[dados])
 }

// ------------------------

// let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

// let percentual_desconto = 5;

// for ( let propriedade in carro ) {

//     if ( propriedade == "preco" ) {

//         let preco = propriedade;

//         let desconto = ( carro[preco] * percentual_desconto ) / 100;

//         let novo_preco = carro[preco] - desconto;

//         console.log("novo preço: R$" + novo_preco + ",00");

//     } else {

//         console.log(propriedade + ": " + carro[propriedade]);

//     }

// }

// -------------------------------------

// let produtos = [
//     { id: 1, nome: "pizza", preco: 50 },
//     { id: 2, nome: "macarronada", preco: 25 },
//     { id: 3, nome: "lasanha", preco: 45 },
//     { id: 4, nome: "nhoque", preco: 30 }
// ];

// let desconto = 5;

// for ( let produto of produtos ){

//    let nome = produto.nome;
//    let valor = produto.preco;

//    let valor_desconto = (valor * desconto) / 100;
//    let novo_valor = valor - valor_desconto;

//    console.log("Novo valor do produto " + nome + ": R$" + novo_valor + ",00");
// }

// ---------------------------

// let notas_trimestre = [10 , 8 , 5 , 4];

// let total_notas = notas_trimestre.length;
// let soma_notas = 0;

// for(let nota of notas_trimestre){
//     soma_notas = soma_notas + nota;
// }

// let  media_notas = soma_notas / total_notas;

// console.log(media_notas)