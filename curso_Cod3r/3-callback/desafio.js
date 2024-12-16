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
const totalGeral = carrinho.map(getTotal)
console.log(totalGeral)


//  3. media de preço dos produtos

const media = carrinho
    .map(item => ({ valorTotal: item.qtde * item.preco, quantidade: item.qtde }))
    .reduce(
        (acc, item) => {
            acc.somaValores += item.valorTotal;
            acc.somaQuantidades += item.quantidade;
            return acc;
        },
        { somaValores: 0, somaQuantidades: 0 }
    );

const mediaFinal = media.somaValores / media.somaQuantidades;
console.log("Média de preço total:", mediaFinal.toFixed(2));

// --------------------

const produtos = [
    { nome: "Caneta", categoria: "Papelaria" },
    { nome: "Lápis", categoria: "Papelaria" },
    { nome: "Detergente", categoria: "Limpeza" }
]

    const agrupados = produtos.reduce((acc, item) =>{
        if(!acc[item.categoria]){
            acc[item.categoria]=[]
        }
        acc[item.categoria].push(item.nome)
        return acc
    }, {})
    console.log(agrupados);

// --------------------------------

const carrinho2 = [
    { nome: "Caneta", quantidade: 10, preco: 2.0 },
    { nome: "Caderno", quantidade: 2, preco: 20.0 }
]

const totalCarinho2 = carrinho2.reduce((acc, item) =>{
    return acc + item.quantidade * item.preco
}, 0)

console.log(totalCarinho2   )