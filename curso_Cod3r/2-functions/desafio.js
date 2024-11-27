function somar(a,b,c){
    return Math.abs(a+b+c)
}
const resultado = somar(2,3,5)
// console.log(somar(2,3,5)) 

function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
const somarAb = somar(2)(3)
console.log(somarAb(15))


function calcular (x){
    return function(y){
        return function(fn){
            return fn (x,y)
        }
    }
}

function subtrair(a,b){
    return a - b
}

function multiplicar(a,b){
    return a * b
}

const r1 = calcular (10)(5)(subtrair)
const r2 = calcular (10)(5)(multiplicar)

console.log(r2)
console.log(r1)