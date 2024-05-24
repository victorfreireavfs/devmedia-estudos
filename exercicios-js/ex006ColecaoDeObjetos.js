// var colecao_disciplinas = [
//     { id: 1, nome: "Português",     carga_horaria: 240 }, // índice 0
//     { id: 2, nome: "Matemática",    carga_horaria: 220 }, // índice 1
//     { id: 3, nome: "História",      carga_horaria: 160 }, // índice 2
//     { id: 4, nome: "Geografia",     carga_horaria: 140 }, // índice 3
//     { id: 5, nome: "Química",       carga_horaria: 160 }, // índice 4
//     { id: 6, nome: "Física",        carga_horaria: 150 }, // índice 5
//     { id: 7, nome: "Inglês",        carga_horaria: 120 }  // índice 6
// ];

// console.log( colecao_disciplinas[5].nome ); // 1

// // console.log( colecao_disciplinas[4].nome ); // Química

// // console.log( colecao_disciplinas[6].carga_horaria ); // 120

//--------------------------------------------

var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date(); // guardando o valor da data atual numa variável

var dia_semana = data_atual.getDay(); 
// get.day() retorna o dia da semana com valores de 0 a 6. usamos o valor retornado pra acessar o objeto da coleção

var serie_do_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;
// guardando os dados do objeto seria_do_dia em variáveis

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);