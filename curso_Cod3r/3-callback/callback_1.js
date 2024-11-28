// fn como parâmetro refere-se somente a função
function exec (fn, a, b){
    return fn (a,b)
}

const somarNoTerminal = (x,y) => console.log(x + y)
const subtrairNoTerminal = (w,z) => console.log(w - z)
const subtrair = (w,z) => (w-z) 

// função callback função que returna outra função
exec(somarNoTerminal, 10, 5)
exec(subtrairNoTerminal, 10, 5)

const r = exec(subtrair, 50, 25)
console.log(r)

// ----------------
// 3 maneiras de executar a mesma fn cb
const cb = () => console.log('Exec...') 
setTimeout(cb,1000)

setTimeout(() => console.log('Exec 2...') ,2000)

setTimeout(function () {
     console.log('Exec 3...')
} ,3000)

// fn cb ta associada geralmente a requisições e