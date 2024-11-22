let a = 4
console.log(a)

//  function declaration

function bomDia(){
    console.log('Bom dia!')
}

bomDia()

// function expression

const boaTarde = function(){
    console.log('Boa Tarde!')
}

boaTarde()

// return
function somar(a,b = 0){
    return a + b
}

console.log (somar (5,8,9))
