// let salariosMinimos = [
//     {ano: 2010 , salario: 510.00},
//     {ano: 2011 , salario: 545.00},
//     {ano: 2012 , salario: 622.00},
//     {ano: 2013 , salario: 678.00},
//     {ano: 2014 , salario: 724.00},
//     {ano: 2015 , salario: 788.00},
//     {ano: 2016 , salario: 880.00},
//     {ano: 2017 , salario: 937.00},
//     {ano: 2018 , salario: 954.00},
//     {ano: 2019 , salario: 998.00},
//     {ano: 2020 , salario: 1045.00}
// ];

// let inflacao = [
//     {ano:2010 , ipca:5.91},
//     {ano:2011 , ipca:6.50},
//     {ano:2012 , ipca:5.84},
//     {ano:2013 , ipca:5.91},
//     {ano:2014 , ipca:6.41},
//     {ano:2015 , ipca:10.67},
//     {ano:2016 , ipca:6.29},
//     {ano:2017 , ipca:2.95},
//     {ano:2018 , ipca:3.75},
//     {ano:2019 , ipca:4.31},
//     {ano:2020 , ipca:4.52},
// ]

import opcoesMenu from 'readline-sync';

console.log("Escolha uma das alternativas: \n");

console.log("1 - Listar todos os salários mínimos de 2010 à 2020");
console.log("2 - Listr o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let escolha = opcoesMenu.question("DIgite o número de sua escolha: ");

if(escolha == 1){
    console.log("escolheu 1")

}else if (escolha == 2){
    console.log("escolheu 2")

}else if(escolha == 3){
    console.log("escolheu 3")

}else{
    console.log("Número invalido!")
};
die;