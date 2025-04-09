//  NUMBER - IEEE 754-2008
let num1 = 0.7
let num2 = 0.1

num1 += num2
num1 += num2
num1 += num2

// num1 = parseFloat(num1.toFixed(2))
// num1 = Number(num1.toFixed(2)) resolvendo as imprecisões dos calculos
console.log(num1)

// console.log(num1.toString() + num2.toString())
// num1 = num1.toString() VARIÁVEL ALTERADA PRA STRING
// console.log(num1.toString(2)) REPRESENAÇÃO BINÁRIA DO NUMBER
// console.log(num1.toFixed(2)) CASAS DECIMAIS
// console.log(Number.isInteger(num1)) VERIFICAR SE N É INTEIRO

// let temp = num1 * 'olá' sempre converta e iguale os tipos de dados
// console.log(Number.isNaN(temp)) VERIFICA SE É UM NAN