// console.log('hello world');

// let contador = 0;

// let notas = [5, 7, 6, 8];

// let soma = 0;
// let media = 0;

// do {
    
//     console.log(notas[contador]);
    
//     soma = soma + notas[contador];
    
//     contador++;

// } while ( contador < notas.length );

// media = soma / notas.length;

// if( media >= 6 ){
//     console.log("Aluno aprovado");
// } else {
//     console.log("Aluno reprovado");
// }


// let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// for (let contador = 0 ; contador < meses.length; contador ++) {

//     console.log(meses[contador]);

//     if ( meses[contador] == "Junho" ) {
//         break;
//     }

// }

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



// let alunos = ["Diogo","Carlos","Danilo","Pedro","César"];

// let contador = 0;

// while ( contador < alunos.length ) {

//     let aluno_nome = alunos[contador];

//     console.log( "Aluno: " + aluno_nome );
//     contador++;

// }

let clientes_array = [
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

for ( let cliente of clientes_array ) {

    let nome = cliente.nome;
    let telefone = cliente.telefone;
    let id = cliente.id;

   console.log("Nome: " + nome + " - Telefone: " + telefone + " " + id);

}