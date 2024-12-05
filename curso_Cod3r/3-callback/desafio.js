const carrinho = [
    {nome:'caneta',      qtde:10, preco:7.99,   fragil: true  },
    {nome:'impressora',  qtde:1,  preco:649.50, fragil: true  },
    {nome:'caderno',     qtde:4,  preco:27.10,  fragil: false },
    {nome:'lápis',       qtde:3,  preco:5.82,   fragil: false },
    {nome:'tesoura',     qtde:1,  preco:19.20,  fragil: true  }
]

// 1. apenas elementos frágeis
const frageis = item => item.fragil === true
const getName = item => item.nome

const prodFragil = carrinho
    .filter(frageis)
    .map(getName)
console.log('Proutos frágeis: ' + prodFragil)

// 2. quantidade * preco = total
const getTotal = item => item.qtde * item.preco
const totalGeral = carrinho
.map(getTotal)
console.log(totalGeral)


//  3. media de preço dos produtos

