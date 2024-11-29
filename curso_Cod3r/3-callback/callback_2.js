const fs = require ('fs')
// fs = file system (biblioteca do node.js) usada pra ler o arquivo
// require para importar

const path = require('path')
//path biblioteca do node.js usada pra traçar o caminho de um arquivo  

const caminho = path.join(__dirname,'dados.txt')
// join juntar os trechos percorridos para o arquivo da maneira correta
// dirname diretório atual do arquivo

//  quando não se quer interpretar parâmetro coloca-se underline _
// toString converte o conteúdo em uma string(texto)
function exibirConteudo (_, conteudo){
    console.log(conteudo.toString())
}

// readFile ler conteúdo do arquivo de forma assincrona(não aguarda o cb para executar)
console.log('Inicio...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

// readFileSync aguarda a execução do cb para exibir os demais conteúdos
console.log('Início sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim sync...')
