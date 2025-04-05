//   strings são  indexáveis
// íncides começando do 0
//  métodos para índices de string

let umaString = "antônio victor freire da silva"

console.log(umaString[4])
console.log(umaString.charAt(6))
console.log(umaString + ' victor freire')
console.log(`${umaString} victor freire`)

// indexOf faz uma busca na string e retorna a posição
console.log(umaString.indexOf('o', 2))
console.log(umaString.lastIndexOf('o',7)) 

// replace= subistitui o valor pelo solicitado
console.log(umaString.replace('antônio', 'fabio'))
console.log(umaString.length)


console.log(umaString.slice(0,7))
console.log(umaString.split(' ', 3) )

console.log(umaString.toLocaleUpperCase(    ))
