//  função map usada pra atribuir uma função e gerar um novo array como resultado
//  const nums = [1, 2, 3, 4, 5]
//  const dobro = (n,i,a) => n * 2 + i + a.length
//  a função map recebe 3 parâmetros : valor - indice - array
//  podendo ser usados ou não dentro da const que será utilizada como a fn map
// const dobro = n => n * 2 
// console.log(nums.map(dobro))

// const nomes = ['vitu', 'bia', 'line', 'kom', "deb"]
// const primeiraLetra = texto => texto[0]
// const letras = nomes.map(primeiraLetra)
// console.log(nomes, letras)

// ---------------------------

const carrinho = [
    {nome:'caneta',      qtde:10, preco:7.99,},
    {nome:'impressora',  qtde:0,  preco:649.50,},
    {nome:'caderno',     qtde:4,  preco:27.10,},
    {nome:'lápis',       qtde:3,  preco:5.82,},
    {nome:'tesoura',     qtde:1,  preco:19.20,}
]

const getName = item => item.nome
console.log(carrinho.map(getName))

const precoFinal = item => item.qtde * item.preco
const totais = carrinho.map(precoFinal)
console.log(totais)

