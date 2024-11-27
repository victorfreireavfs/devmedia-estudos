// function bomDia(){
//     console.log('BOM DIA !!!')
// }

// const boaTarde = function (){
//     console.log('BOA TARDE!!!!')
// }

// // 
// function executarQualquerCoisa(fn){
//     if (typeof fn === 'function')
//     fn()
// }

// executarQualquerCoisa(bomDia)
// executarQualquerCoisa(boaTarde)

// returnando funcão dentro de fuinção

function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}
const potenciaDe3 = potencia(3)
console.log(potenciaDe3(3))

// ----------------------------
