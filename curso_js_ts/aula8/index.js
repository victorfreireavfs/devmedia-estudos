let nome = 'Victor'
let sobrenome = 'Freire'

let nasc
let idade = 32
nasc = 2025 - idade

let peso = 66.3
let altura = 1.63
let imc = peso / altura ** 2

// console.log(imc.toFixed(2))

console.log(`${nome} ${sobrenome}, nascido em ${nasc} 
tem ${idade} anos, pesa ${peso} kg, tem ${altura} de 
altura e seu IMC é de ${imc.toFixed(2)}` )