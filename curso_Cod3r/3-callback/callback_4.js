//  funçao filter
//  filtra e cria novo array com o resultado das condições da fuunção

const nums = [1, 2, 3, 4, 5, 8, 10, 7]
const impares = n => n % 2 !== 0
const pares = n => n % 2 === 0
const reprovado = n => n <= 6

console.log(nums.filter(pares))


// -----------------------------

//  combinar filter com map 
const carrinho = [
    {nome:'caneta',      qtde:10, preco:7.99,},
    {nome:'impressora',  qtde:0,  preco:649.50,},
    {nome:'caderno',     qtde:4,  preco:27.10,},
    {nome:'lápis',       qtde:3,  preco:5.82,},
    {nome:'tesoura',     qtde:1,  preco:19.20,}
]

const maiorQueZero = item => item.qtde > 2
const getName = item => item.nome

const itensValidos = carrinho
.filter(maiorQueZero)
.map(getName)

console.log(itensValidos)
