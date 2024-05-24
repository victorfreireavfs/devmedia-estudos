

// var produto = {
//     id: 6,
//     nome: 'Cafeteira Elétrica',
//     valor: 99.00
// }

// var cliente = {
//     id: 40,
//     nome: "Jorge Mendes",
//     telefone: "(21) 99999-9999"
// };

// console.log(cliente.nome)

// var usuario = {
//     id: 9,
//     classe: 'Português',
//     idade: 19,
//     nome: 'Victor Freire'
// };


// --------------------------------------
// var faixaEtaria = usuario.idade >= 18;

// if(faixaEtaria === true){
//     console.log('O aluno pode ' + usuario.nome + ' pode acessar o conteúdo.')
// }else{
//     console.log('Acesso negado.')
// }

// ---------------------------------------

var aluno_academia = {
    nome:'Victor Freire',
    peso: 65.8,
    altura: 1.65,
    id: 10
}

var imc_aluno = (aluno_academia.peso / (aluno_academia.altura * aluno_academia.altura)).toFixed(2)

console.log('O IMC do aluno é de: ' + imc_aluno)

if (imc_aluno < 18.5){
    console.log('O aluno ' + aluno_academia.nome + ' está abaixo do peso.');
} else if (imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log('O aluno ' + aluno_academia.nome + ' está com o peso normal.');
} else {
    console.log('O aluno ' + aluno_academia.nome + ' está acima do peso.')
}