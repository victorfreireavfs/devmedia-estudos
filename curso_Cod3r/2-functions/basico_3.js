//  arrow function

const felizNatal = () => console.log('Feliz Natal !!!!!!')
felizNatal()

// quando houver apenas um parâmetro pode ficar sem parênteses
const saudacao = nome => `Fala ${nome}, blz ?!?!?`
console.log(saudacao("Maria"))

//  arrow function com corpo

 const somar = (...numeros) => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return  total
 }

 console.log(somar(1, 2, 3))
 console.log(somar(1, 2, 3, 4, 5))
 console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// ---------------

const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(3))
